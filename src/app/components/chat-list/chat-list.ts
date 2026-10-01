import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
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
export class ChatList implements OnDestroy {
  @Input() chats: Chat[] = [];

  protected readonly Trash2 = Trash2;

  private timer = setInterval(() => {
    this.cdr.detectChanges();
  }, 1000);

  showConfirmModal = false;
  chatToDelete: number | null = null;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private cdr: ChangeDetectorRef,
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

  isOnline(chat: Chat): boolean {
    if (!chat.lastConnection) {
      return false;
    }

    const elapsed = Date.now() - chat.lastConnection.getTime();

    return elapsed < 15_000;
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  getLastSeen(chat: Chat): string {
    if (!chat.lastConnection) {
      return 'Sin conexión registrada';
    }

    return `Última conexión ${chat.lastConnection.toLocaleTimeString('es-AR')}`;
  }
}
