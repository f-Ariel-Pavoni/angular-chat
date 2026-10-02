import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly storageKey = 'angular-chat-chats';

  private chats: Chat[] = [];

  constructor() {
    this.loadChats();
  }

  getChats(): Chat[] {
    return this.chats;
  }

  getChatById(id: number): Chat | undefined {
    return this.chats.find((chat) => chat.id === id);
  }

  addChat(chat: Chat): void {
    this.chats.push(chat);
    this.saveChats();
  }

  deleteChat(id: number): void {
    const index = this.chats.findIndex((chat) => chat.id === id);

    if (index !== -1) {
      this.chats.splice(index, 1);
      this.saveChats();
    }
  }

  addMessage(chatId: number, message: Message): void {
    const chat = this.getChatById(chatId);

    if (!chat) {
      return;
    }

    chat.messages.push(message);
    this.saveChats();
  }

  clearMessages(chatId: number): void {
    const chat = this.getChatById(chatId);

    if (!chat) {
      return;
    }

    chat.messages = [];
    this.saveChats();
  }

  private saveChats(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.chats));
  }

  private loadChats(): void {
    const storedChats = localStorage.getItem(this.storageKey);

    if (!storedChats) {
      return;
    }

    const chats: Chat[] = JSON.parse(storedChats);

    this.chats = chats.map((chat) => ({
      ...chat,
      lastConnection: chat.lastConnection ? new Date(chat.lastConnection) : undefined,
      messages: chat.messages.map((message: Message) => ({
        ...message,
        date: new Date(message.date),
      })),
    }));
  }
}
