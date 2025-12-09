import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const levels = [
    {
      world: "1-1",
      name: "Грибное королевство",
      difficulty: "Легко",
      enemies: ["Гумба", "Купа"],
      items: ["Гриб", "Цветок огня"],
    },
    {
      world: "1-2",
      name: "Подземелье",
      difficulty: "Средне",
      enemies: ["Гумба", "Купа", "Пиранья"],
      items: ["Гриб", "Звезда"],
    },
    {
      world: "1-3",
      name: "Небесные мосты",
      difficulty: "Средне",
      enemies: ["Парагумба", "Парачерепаха"],
      items: ["Гриб", "1-UP"],
    },
    {
      world: "1-4",
      name: "Замок Боузера",
      difficulty: "Сложно",
      enemies: ["Купа", "Боузер"],
      items: ["Топор"],
    },
  ];

  const mechanics = [
    {
      icon: "Zap",
      title: "Прыжки",
      description: "Основная механика - прыгай на врагов, чтобы победить их",
    },
    {
      icon: "Flame",
      title: "Усиления",
      description: "Собирай грибы для роста и цветки огня для стрельбы",
    },
    {
      icon: "Coins",
      title: "Монеты",
      description: "Собери 100 монет для получения дополнительной жизни",
    },
    {
      icon: "Star",
      title: "Звезда",
      description: "Стань неуязвимым на короткое время",
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white pixel-border retro-shadow p-6 mb-4">
            <h1 className="text-3xl md:text-5xl text-[var(--mario-red)] mb-2 pixel-text">
              SUPER MARIO
            </h1>
            <p className="text-xs md:text-sm text-[var(--mario-blue)]">
              BROS.™
            </p>
          </div>
          <div className="flex justify-center gap-4 text-white text-xs md:text-sm">
            <div className="bg-black/50 px-4 py-2 retro-shadow">
              SCORE: 000000
            </div>
            <div className="bg-black/50 px-4 py-2 retro-shadow">
              COINS: ×00
            </div>
            <div className="bg-black/50 px-4 py-2 retro-shadow">
              WORLD: 1-1
            </div>
            <div className="bg-black/50 px-4 py-2 retro-shadow">
              TIME: 400
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 space-y-8">
        {/* About Section */}
        <section>
          <Card className="pixel-border retro-shadow bg-white/95">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Info" className="text-[var(--mario-red)]" />
                Об игре
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed mt-2">
                Легендарная платформенная игра, выпущенная в 1985 году для консоли NES
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs leading-relaxed">
                Помоги Марио спасти принцессу Пич из лап злого Боузера! Путешествуй через 
                восемь миров, полных опасностей и секретов. Прыгай на врагов, собирай монеты 
                и усиления, находи тайные проходы и бонусные уровни.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge className="bg-[var(--mario-red)] hover:bg-[var(--mario-red)]/90">
                  8 миров
                </Badge>
                <Badge className="bg-[var(--mario-blue)] hover:bg-[var(--mario-blue)]/90">
                  32 уровня
                </Badge>
                <Badge className="bg-[var(--mario-yellow)] text-black hover:bg-[var(--mario-yellow)]/90">
                  Бесконечное веселье
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Game Mechanics */}
        <section>
          <h2 className="text-2xl mb-4 text-white retro-shadow pixel-text">
            ИГРОВАЯ МЕХАНИКА
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mechanics.map((mechanic, index) => (
              <Card key={index} className="pixel-border retro-shadow bg-white/95 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto bg-[var(--mario-red)] rounded-lg flex items-center justify-center retro-shadow mb-2">
                    <Icon name={mechanic.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-sm text-center">{mechanic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[10px] leading-relaxed text-center">
                    {mechanic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Levels */}
        <section>
          <h2 className="text-2xl mb-4 text-white retro-shadow pixel-text">
            УРОВНИ МИРА 1
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {levels.map((level, index) => (
              <Card key={index} className="pixel-border retro-shadow bg-white/95 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Flag" className="text-[var(--mario-red)]" size={20} />
                      {level.world}
                    </CardTitle>
                    <Badge 
                      variant={level.difficulty === "Легко" ? "default" : level.difficulty === "Средне" ? "secondary" : "destructive"}
                      className="text-[10px]"
                    >
                      {level.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs mt-1">
                    {level.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-[10px] font-bold mb-1">ВРАГИ:</p>
                    <div className="flex flex-wrap gap-1">
                      {level.enemies.map((enemy, i) => (
                        <Badge key={i} variant="outline" className="text-[9px] bg-red-50">
                          {enemy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold mb-1">ПРЕДМЕТЫ:</p>
                    <div className="flex flex-wrap gap-1">
                      {level.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="text-[9px] bg-yellow-50">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section>
          <Card className="pixel-border retro-shadow bg-white/95">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="BookOpen" className="text-[var(--mario-blue)]" />
                Правила игры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Target" className="text-[var(--mario-red)] mt-1 flex-shrink-0" size={16} />
                  <p className="text-xs leading-relaxed">
                    <strong>Цель:</strong> Пройди до конца уровня и дотронься до флага. Спаси принцессу в финальном замке!
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Heart" className="text-[var(--mario-red)] mt-1 flex-shrink-0" size={16} />
                  <p className="text-xs leading-relaxed">
                    <strong>Жизни:</strong> Начинаешь с 3 жизнями. Получай дополнительные за 100 монет или найди гриб 1-UP.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Clock" className="text-[var(--mario-blue)] mt-1 flex-shrink-0" size={16} />
                  <p className="text-xs leading-relaxed">
                    <strong>Время:</strong> У тебя есть 400 секунд на прохождение уровня. Не медли!
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Sparkles" className="text-[var(--mario-yellow)] mt-1 flex-shrink-0" size={16} />
                  <p className="text-xs leading-relaxed">
                    <strong>Секреты:</strong> Ищи тайные блоки, скрытые проходы и бонусные комнаты с сокровищами!
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Skull" className="text-red-600 mt-1 flex-shrink-0" size={16} />
                  <p className="text-xs leading-relaxed">
                    <strong>Опасности:</strong> Не касайся врагов сбоку, не падай в пропасти и берегись ядовитых растений!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8">
          <div className="inline-block bg-white pixel-border retro-shadow p-6 animate-pulse">
            <p className="text-lg md:text-2xl text-[var(--mario-red)] mb-2">
              🍄 PRESS START 🍄
            </p>
            <p className="text-[10px] md:text-xs text-gray-600 animate-blink">
              ▶ READY TO PLAY ◀
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 px-4 mt-12">
        <div className="bg-black/70 inline-block px-6 py-3 retro-shadow">
          <p className="text-[10px] text-white">
            © 1985 NINTENDO - FAN TRIBUTE PAGE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
