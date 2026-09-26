import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chat } from '../../models/chat';

@Component({
  selector: 'app-chat-list',
  imports: [RouterLink],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  @Input() chats: Chat[] = [];
}
