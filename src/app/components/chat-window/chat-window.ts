import { Component, Input } from '@angular/core';
import { Chat } from '../../models/chat';

@Component({
  selector: 'app-chat-window',
  imports: [],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css',
})
export class ChatWindow {
  @Input() chat: Chat | undefined;
}
