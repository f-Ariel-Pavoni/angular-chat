import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Chat } from '../../models/chat';
import { Message } from '../../models/message';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-chat-window',
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {
  @Input() chat: Chat | undefined;

  messageControl = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  });

  onSubmit(): void {
    if (this.messageControl.invalid) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      content: this.messageControl.value,
      author: 'user',
      date: new Date(),
    };

    this.chat?.messages.push(newMessage);
    this.messageControl.reset();
  }
}
