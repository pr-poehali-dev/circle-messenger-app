export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  role: UserRole;
  status: 'online' | 'offline' | 'away';
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isModerated?: boolean;
  moderatedBy?: string;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface Chat {
  id: string;
  name: string;
  type: 'personal' | 'group';
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}
