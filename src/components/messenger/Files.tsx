import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockFiles = [
  { id: '1', name: 'Презентация_математика.pdf', size: '2.3 МБ', date: '15.11.2024', type: 'pdf', sender: 'Александр Петров' },
  { id: '2', name: 'Домашнее_задание.docx', size: '156 КБ', date: '14.11.2024', type: 'doc', sender: 'Мария Иванова' },
  { id: '3', name: 'График_экзаменов.xlsx', size: '45 КБ', date: '13.11.2024', type: 'xls', sender: 'Елена Сергеевна' },
  { id: '4', name: 'Конспект_физика.pdf', size: '1.8 МБ', date: '12.11.2024', type: 'pdf', sender: 'Игорь Козлов' },
  { id: '5', name: 'Фото_доски.jpg', size: '3.2 МБ', date: '11.11.2024', type: 'img', sender: 'Группа: Математика' },
];

const Files = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = mockFiles.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'FileText';
      case 'doc':
        return 'FileText';
      case 'xls':
        return 'Sheet';
      case 'img':
        return 'Image';
      default:
        return 'File';
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'text-red-500';
      case 'doc':
        return 'text-blue-500';
      case 'xls':
        return 'text-green-500';
      case 'img':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Файлы</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Upload" size={18} className="mr-2" />
              Загрузить файл
            </Button>
          </div>
          
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Поиск файлов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-accent border-b border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Название</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Отправитель</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Размер</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Дата</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Действия</th>
                </tr>
              </thead>
              <tbody>
                {filteredFiles.map((file) => (
                  <tr key={file.id} className="border-b border-border hover:bg-accent transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Icon name={getFileIcon(file.type)} className={getFileColor(file.type)} size={24} />
                        <span className="text-foreground font-medium">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{file.sender}</td>
                    <td className="p-4 text-muted-foreground">{file.size}</td>
                    <td className="p-4 text-muted-foreground">{file.date}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Icon name="Download" size={18} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Icon name="Share2" size={18} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Icon name="MoreVertical" size={18} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Files;
