import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-new-chat',
  templateUrl: './new-chat.html',
  styleUrl: './new-chat.css',
})
export class NewChat {
  avatars = ['🦊', '🐱', '🐶', '🐼', '🐨', '🐯', '🦁', '🐸', '🐵', '🐰', '🐻', '🐙'];

  constructor(
    private chatService: ChatService,
    private router: Router,
  ) {}

  chatForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    avatar: new FormControl('🦊'),
  });

  onSubmit(): void {
    if (this.chatForm.invalid) {
      this.chatForm.markAllAsTouched();
      return;
    }

    const newChat: Chat = {
      id: Date.now(),
      name: this.chatForm.value.name ?? '',
      avatar: this.chatForm.value.avatar ?? '',
      status: 'offline',
      messages: [],
    };

    this.chatService.addChat(newChat);
    this.router.navigate(['/chats']);
  }
}
