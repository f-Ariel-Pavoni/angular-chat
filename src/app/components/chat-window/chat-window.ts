import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

import { Chat } from '../../models/chat';
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

  constructor(private cdr: ChangeDetectorRef) {}

  showConfirmModal = false;

  messageControl = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  });

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

    this.chat.messages.push(newMessage);

    this.messageControl.reset();

    setTimeout(() => {
      const response: Message = {
        id: Date.now() + 1,
        content: 'Gracias por tu mensaje. En breve te respondo.',
        author: 'app',
        date: new Date(),
      };

      this.chat!.messages.push(response);

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

    this.chat.messages = [];
    this.showConfirmModal = false;
  }

  cancelClearMessages(): void {
    this.showConfirmModal = false;
  }
}
