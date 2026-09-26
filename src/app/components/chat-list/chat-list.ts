import { Component, Input } from '@angular/core';
import { Chat } from '../../models/chat';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  @Input() chats: Chat[] = [];
}
