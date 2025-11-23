import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ChatWindowProps {
  chatId: string | null;
}

const mockMessages = [
  { id: '1', sender: 'Александр Петров', text: 'Добрый день! Отправил документы для проверки', time: '14:30', isMine: false },
  { id: '2', sender: 'Вы', text: 'Спасибо, проверю в ближайшее время', time: '14:31', isMine: true },
  { id: '3', sender: 'Александр Петров', text: 'Отлично, жду обратной связи', time: '14:32', isMine: false },
];

const ChatWindow = ({ chatId }: ChatWindowProps) => {
  const [message, setMessage] = useState('');

  if (!chatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center text-muted-foreground">
          <Icon name="MessageSquare" size={64} className="mx-auto mb-4 opacity-20" />
          <p className="text-lg">Выберите чат для начала общения</p>
        </div>
      </div>
    );
  }

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-slate-700 text-white">АП</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">Александр Петров</h3>
            <p className="text-xs text-muted-foreground">В сети</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Icon name="Phone" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Video" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="MoreVertical" size={20} />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md px-4 py-3 rounded-lg ${
                  msg.isMine
                    ? 'bg-blue-600 text-white'
                    : 'bg-card border border-border text-foreground'
                }`}
              >
                {!msg.isMine && (
                  <p className="text-xs font-medium mb-1 opacity-70">{msg.sender}</p>
                )}
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.isMine ? 'text-blue-100' : 'text-muted-foreground'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Icon name="Paperclip" size={20} />
          </Button>
          <Input
            placeholder="Введите сообщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
