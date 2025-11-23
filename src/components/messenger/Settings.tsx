import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Settings = () => {
  return (
    <div className="h-screen bg-background overflow-auto">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-semibold text-foreground mb-8">Настройки</h1>

        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Уведомления</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Звук уведомлений</Label>
                  <p className="text-sm text-muted-foreground">Проигрывать звук при новых сообщениях</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push-уведомления</Label>
                  <p className="text-sm text-muted-foreground">Получать уведомления в браузере</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email-уведомления</Label>
                  <p className="text-sm text-muted-foreground">Отправлять важные сообщения на почту</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Приватность</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Статус "В сети"</Label>
                  <p className="text-sm text-muted-foreground">Показывать когда вы онлайн</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Время прочтения</Label>
                  <p className="text-sm text-muted-foreground">Показывать когда сообщение прочитано</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Профиль</Label>
                  <p className="text-sm text-muted-foreground">Кто может видеть ваш профиль</p>
                </div>
                <Button variant="outline" size="sm">
                  Только ученики
                  <Icon name="ChevronDown" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Внешний вид</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Тёмная тема</Label>
                  <p className="text-sm text-muted-foreground">Использовать тёмное оформление</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Размер шрифта</Label>
                  <p className="text-sm text-muted-foreground">Настроить размер текста</p>
                </div>
                <Button variant="outline" size="sm">
                  Средний
                  <Icon name="ChevronDown" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Безопасность</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Lock" size={18} className="mr-3" />
                Изменить пароль
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Shield" size={18} className="mr-3" />
                Двухфакторная аутентификация
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="History" size={18} className="mr-3" />
                История входов
              </Button>
            </div>
          </div>

          <Separator />

          <div className="pt-4">
            <Button variant="destructive" className="w-full">
              <Icon name="LogOut" size={18} className="mr-2" />
              Выйти из аккаунта
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Версия приложения: 1.0.0</p>
          <p className="mt-1">© 2024 Образовательный мессенджер</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
