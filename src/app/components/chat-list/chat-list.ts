import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

import { Chat } from '../../models/chat';
import { ChatService } from '../../services/chat.service';
import { ConfirmModal } from '../confirm-modal/confirm-modal';

@Component({
  selector: 'app-chat-list',
  imports: [RouterLink, LucideAngularModule, ConfirmModal],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  @Input() chats: Chat[] = [];

  protected readonly Trash2 = Trash2;

  showConfirmModal = false;
  chatToDelete: number | null = null;

  constructor(
    private chatService: ChatService,
    private router: Router,
  ) {}

  openDeleteModal(id: number): void {
    this.chatToDelete = id;
    this.showConfirmModal = true;
  }

  deleteChat(): void {
    if (this.chatToDelete === null) {
      return;
    }

    this.chatService.deleteChat(this.chatToDelete);

    this.chatToDelete = null;
    this.showConfirmModal = false;

    this.router.navigate(['/chats']);
  }

  cancelDelete(): void {
    this.chatToDelete = null;
    this.showConfirmModal = false;
  }
}
