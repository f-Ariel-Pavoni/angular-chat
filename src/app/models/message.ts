export interface Message {
  id: number;
  content: string;
  author: 'user' | 'app';
  date: Date;
}
