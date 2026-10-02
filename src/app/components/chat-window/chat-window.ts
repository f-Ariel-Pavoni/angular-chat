import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Trash2, ArrowLeft } from 'lucide-angular';

import { Chat } from '../../models/chat';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message';
import { ConfirmModal } from '../confirm-modal/confirm-modal';

@Component({
  imports: [ReactiveFormsModule, LucideAngularModule, ConfirmModal],
  selector: 'app-chat-window',
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {
  @Input() chat: Chat | undefined;

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  protected readonly Trash2 = Trash2;
  protected readonly ArrowLeft = ArrowLeft;

  constructor(
    private cdr: ChangeDetectorRef,
    private chatService: ChatService,
    private router: Router,
  ) {}

  showConfirmModal = false;

  messageControl = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  });

  private scrollToBottom(): void {
    setTimeout(() => {
      const element = this.messagesContainer.nativeElement;

      element.scrollTop = element.scrollHeight;
    });
  }

  onSubmit(): void {
    if (this.messageControl.invalid || !this.chat) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      content: this.messageControl.value,
      author: 'user',
      date: new Date(),
    };

    this.chat!.lastConnection = new Date();

    this.chatService.addMessage(this.chat.id, newMessage);

    this.cdr.detectChanges();
    this.scrollToBottom();

    this.messageControl.reset();

    setTimeout(() => {
      const response: Message = {
        id: Date.now() + 1,
        content: 'Gracias por tu mensaje. En breve te respondo.',
        author: 'app',
        date: new Date(),
      };

      this.chatService.addMessage(this.chat!.id, response);

      this.cdr.detectChanges();

      setTimeout(() => {
        const element = this.messagesContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      });
    }, 2000);
  }

  openConfirmModal(): void {
    this.showConfirmModal = true;
  }

  clearMessages(): void {
    if (!this.chat) {
      return;
    }

    this.chatService.clearMessages(this.chat.id);
    this.showConfirmModal = false;
  }

  cancelClearMessages(): void {
    this.showConfirmModal = false;
  }

  goBack(): void {
    this.router.navigate(['/chats']);
  }
}
