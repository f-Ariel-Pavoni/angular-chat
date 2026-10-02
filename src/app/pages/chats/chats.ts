import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChatList } from '../../components/chat-list/chat-list';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat';
import { ChatWindow } from '../../components/chat-window/chat-window';

@Component({
  imports: [ChatList, ChatWindow, RouterLink, ReactiveFormsModule],
  selector: 'app-chats',
  styleUrl: './chats.css',
  templateUrl: './chats.html',
})
export class Chats {
  chats: Chat[];
  selectedChat: Chat | undefined;
  isChatOpen = false;

  searchControl = new FormControl('', {
    nonNullable: true,
  });

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
  ) {
    this.chats = this.chatService.getChats();

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.selectedChat = this.chatService.getChatById(id);

      this.isChatOpen = params.has('id');
    });
  }

  get filteredChats(): Chat[] {
    const search = this.searchControl.value.toLowerCase().trim();

    return this.chats.filter((chat) => chat.name.toLowerCase().includes(search));
  }
}
