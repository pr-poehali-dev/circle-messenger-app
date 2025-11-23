import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ChatListProps {
  onSelectChat: (chatId: string) => void;
  selectedChatId: string | null;
}

const mockChats = [
  { id: '1', name: 'Александр Петров', lastMessage: 'Отправил документы для проверки', time: '14:32', unread: 2, avatar: '', status: 'online' },
  { id: '2', name: 'Мария Иванова', lastMessage: 'Спасибо за информацию', time: '13:15', unread: 0, avatar: '', status: 'online' },
  { id: '3', name: 'Группа: Математика', lastMessage: 'Дмитрий: Завтра контрольная?', time: '12:48', unread: 5, avatar: '', status: 'offline' },
  { id: '4', name: 'Елена Сергеевна', lastMessage: 'Хорошо, жду вашего ответа', time: '11:20', unread: 0, avatar: '', status: 'offline' },
  { id: '5', name: 'Игорь Козлов', lastMessage: 'Можно перенести встречу?', time: 'Вчера', unread: 1, avatar: '', status: 'offline' },
];

const ChatList = ({ onSelectChat, selectedChatId }: ChatListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-96 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Сообщения</h2>
        <div className="relative">
          <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Поиск чатов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full p-4 flex items-start space-x-3 hover:bg-accent transition-colors border-b border-border ${
              selectedChatId === chat.id ? 'bg-accent' : ''
            }`}
          >
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src={chat.avatar} />
                <AvatarFallback className="bg-slate-700 text-white">
                  {chat.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {chat.status === 'online' && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full"></span>
              )}
            </div>
            
            <div className="flex-1 text-left overflow-hidden">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium text-foreground truncate">{chat.name}</h3>
                <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </div>
            
            {chat.unread > 0 && (
              <div className="flex-shrink-0 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {chat.unread}
              </div>
            )}
          </button>
        ))}
      </ScrollArea>
    </div>
  );
};

export default ChatList;
