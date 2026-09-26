import { Routes } from '@angular/router';
import { Chats } from './pages/chats/chats';
import { NewChat } from './pages/new-chat/new-chat';

export const routes: Routes = [
  {
    path: 'chats',
    component: Chats,
  },
  {
    path: 'chats/:id',
    component: Chats,
  },
  {
    path: 'nuevo',
    component: NewChat,
  },
];
