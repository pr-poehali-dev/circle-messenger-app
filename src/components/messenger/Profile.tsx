import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Profile = () => {
  return (
    <div className="h-screen bg-background overflow-auto">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-semibold text-foreground mb-8">Профиль</h1>
        
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src="" />
              <AvatarFallback className="bg-slate-700 text-white text-3xl">ИВ</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="mt-2">
              <Icon name="Camera" size={16} className="mr-2" />
              Изменить фото
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Имя и фамилия</Label>
              <Input id="name" defaultValue="Иван Васильев" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="ivan.vasiliev@school.edu" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="class">Класс / Группа</Label>
              <Input id="class" defaultValue="10-А" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="bio">О себе</Label>
              <textarea
                id="bio"
                rows={4}
                className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background text-foreground resize-none"
                defaultValue="Ученик 10-А класса. Интересуюсь математикой и программированием."
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                Сохранить изменения
              </Button>
              <Button variant="outline" className="flex-1">
                Отмена
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Статистика</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Сообщений</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-2xl font-bold text-foreground">23</p>
              <p className="text-sm text-muted-foreground">Файлов</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Контактов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
