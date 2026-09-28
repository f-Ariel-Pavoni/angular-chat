import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chats: Chat[] = [];

  getChats(): Chat[] {
    return this.chats;
  }

  getChatById(id: number): Chat | undefined {
    return this.chats.find((chat) => chat.id === id);
  }

  addChat(chat: Chat): void {
    this.chats.push(chat);
  }

  deleteChat(id: number): void {
    const index = this.chats.findIndex((chat) => chat.id === id);

    if (index !== -1) {
      this.chats.splice(index, 1);
    }
  }
}
