import Image from 'next/image'

const REF_URL = 'https://comboflo.site/aetf3u2q9u'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-[#f2f2f2] flex flex-col">
      {/* Top Mobile Bar (shown on mobile / tablet) */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#121215] border-b border-[#1f1f24] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#mobile-menu"
            aria-label="Открыть меню"
            className="p-2 -ml-2 text-[#f5a623] hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
          <a href={REF_URL} className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[#f5a623]" viewBox="0 0 32 32" fill="currentColor">
              <path d="M4 22L8 6l8 12L24 6l4 16h-4l-2.5-10L16 22 10.5 12 8 22H4z" />
            </svg>
            <span className="font-black text-lg tracking-wider text-white">FARO</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={REF_URL}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#232328] text-white hover:bg-[#2e2e36]"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#f5a623] text-black hover:bg-[#e09315]"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Main Layout (Sidebar + Content) */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* Left Sidebar (Desktop Rail & Mobile Drawer via #mobile-menu target) */}
        <aside
          id="mobile-menu"
          className="z9f4-rail lg:flex flex-col w-64 shrink-0 p-4 fixed lg:static inset-y-0 left-0 z-50 overflow-y-auto lg:overflow-visible"
        >
          {/* Close button on mobile */}
          <div className="lg:hidden flex items-center justify-between pb-3 mb-2 border-b border-[#222227]">
            <span className="font-bold text-sm text-[#f5a623]">Меню Faro</span>
            <a href="#!" aria-label="Закрыть меню" className="p-1 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center gap-3 mb-6 px-2">
            <button
              type="button"
              aria-label="Свернуть меню"
              className="p-1.5 rounded-lg bg-[#1a1a20] text-gray-400 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <a href={REF_URL} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[#f5a623]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M4 22L8 6l8 12L24 6l4 16h-4l-2.5-10L16 22 10.5 12 8 22H4z" />
              </svg>
              <span className="font-black text-xl tracking-wider text-white">FARO</span>
            </a>
          </div>

          {/* Fortune Roulette Card */}
          <a
            href={REF_URL}
            className="mb-4 p-3 rounded-2xl bg-gradient-to-r from-[#1c1c23] to-[#17171d] border border-[#2a2a33] flex items-center justify-between hover:border-[#f5a623]/40 transition group"
          >
            <div>
              <div className="text-xs font-bold text-white group-hover:text-[#f5a623] transition">
                Рулетка удачи
              </div>
              <div className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                <svg className="w-3 h-3 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>01:27:56</span>
              </div>
            </div>
            <div className="w-12 h-12 relative shrink-0">
              <Image
                src="/images/roulette-wheel.png"
                alt="Рулетка удачи Faro Casino"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          </a>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-1 flex-1">
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">🎁</span>
              <span>Бонусы</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">🪙</span>
              <span>Магазин</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">🎯</span>
              <span>Миссии</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">📦</span>
              <span>Сундуки</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">⚡</span>
              <span>Умножение баланса</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item bg-[#1a1a22] text-[#f5a623]">
              <span>🎃</span>
              <span>Шабаш Хэллоуина</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">👥</span>
              <span>Реферальная программа</span>
            </a>
            <a href={REF_URL} className="z9f4-nav-item">
              <span className="text-[#f5a623]">👑</span>
              <span>VIP Клуб</span>
            </a>
          </nav>

          {/* Language Selector in Sidebar bottom */}
          <div className="mt-4 pt-4 border-t border-[#1f1f24]">
            <a
              href={REF_URL}
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#17171c] text-xs text-gray-300 hover:bg-[#1f1f26]"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">🇷🇺</span>
                <span>Русский</span>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </aside>

        {/* Backdrop scrim for mobile drawer */}
        <a
          href="#!"
          aria-label="Закрыть меню"
          className="z9f4-scrim hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-6 max-w-7xl mx-auto w-full flex flex-col gap-6">
          {/* Desktop Header Bar (Auth Buttons) */}
          <div className="hidden lg:flex items-center justify-end gap-3 pb-2">
            <a
              href={REF_URL}
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#232328] text-white hover:bg-[#2e2e36] transition"
            >
              Вход
            </a>
            <a
              href={REF_URL}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#f5a623] text-black hover:bg-[#e09315] shadow-lg shadow-[#f5a623]/20 transition"
            >
              Регистрация
            </a>
          </div>

          {/* Screen 1: Hero Banner (Шабаш Хэллоуина) */}
          <section className="relative overflow-hidden rounded-3xl border border-[#302a20] bg-gradient-to-r from-[#141418] via-[#121216] to-[#0c0c0e] p-6 lg:p-10 min-h-[300px] sm:min-h-[340px] flex items-center shadow-2xl">
            <div className="relative z-10 max-w-xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Шабаш Хэллоуина <br />
                <span className="text-[#f5a623]">21 день подарков</span>
              </h1>
              <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-300 font-medium max-w-[280px] sm:max-w-none">
                Забирайте награды на 139 500 ₽ и 1 145 FS
              </p>
              <div className="mt-5 sm:mt-6 flex items-center gap-4">
                <a
                  href={REF_URL}
                  className="z9f4-gold-btn px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#f5a623]/30 inline-block"
                >
                  Забрать
                </a>
              </div>
            </div>

            {/* Witch & Halloween Illustration (Right Side) */}
            <div className="absolute right-0 bottom-0 top-0 w-3/5 sm:w-2/3 lg:w-1/2 pointer-events-none opacity-45 sm:opacity-85 lg:opacity-100 flex items-end justify-end">
              <div className="relative w-full h-full max-h-[340px]">
                <Image
                  src="/images/halloween-witch.png"
                  alt="Faro Casino Шабаш Хэллоуина"
                  fill
                  priority
                  sizes="(max-width: 768px) 60vw, 50vw"
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>

            {/* Pagination Dots at Bottom Center */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              <span className="w-5 h-1.5 rounded-full bg-[#f5a623]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </section>

          {/* Three Feature Cards Row */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {/* Card 1: Депозитный стрик */}
            <div className="z9f4-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="relative z-10">
                <h3 className="text-base font-bold text-white">Депозитный стрик</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-[170px]">
                  Чем длиннее серия депозитов, тем ценнее призы
                </p>
              </div>

              <div className="relative z-10 mt-6 flex flex-col gap-3">
                <a
                  href={REF_URL}
                  className="z9f4-gold-btn text-center px-4 py-2 rounded-full text-xs font-bold w-fit"
                >
                  Начать стрик
                </a>

                {/* Streak Step Badges */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-[#f5a623]/20 border border-[#f5a623] text-[#f5a623] flex items-center justify-center text-[10px]">
                    ★
                  </span>
                  <span className="px-1 text-gray-400">🎁</span>
                  <span className="w-5 h-5 rounded-md bg-[#22222a] flex items-center justify-center text-[11px]">4</span>
                  <span className="w-5 h-5 rounded-md bg-[#22222a] flex items-center justify-center text-[11px]">5</span>
                  <span className="w-5 h-5 rounded-md bg-[#22222a] flex items-center justify-center text-[11px]">6</span>
                  <span className="px-0.5 text-gray-400">🎁</span>
                  <span className="px-0.5 text-gray-400">🎁</span>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 w-32 h-32 pointer-events-none opacity-85">
                <Image
                  src="/images/golden-chest.png"
                  alt="Депозитный стрик Faro Casino"
                  fill
                  sizes="128px"
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>

            {/* Card 2: Faro Casino App */}
            <div className="z9f4-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="relative z-10">
                <h3 className="text-base font-bold text-white">Faro Casino App</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-[190px]">
                  Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#f5a623] mt-2">
                  <span>🤖</span>
                  <span>Доступно для Android</span>
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <a
                  href={REF_URL}
                  className="z9f4-gold-btn px-6 py-2 rounded-full text-xs font-bold inline-block"
                >
                  Скачать
                </a>
              </div>

              <div className="absolute right-0 bottom-0 w-36 h-36 pointer-events-none opacity-90">
                <Image
                  src="/images/faro-app-mobile.png"
                  alt="Мобильное приложение Faro Casino"
                  fill
                  sizes="144px"
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>

            {/* Card 3: Миссии */}
            <div className="z9f4-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="relative z-10">
                <h3 className="text-base font-bold text-white">Миссии</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-[190px]">
                  Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                </p>
                <div className="flex items-center justify-between text-xs text-gray-300 mt-3 max-w-[210px]">
                  <span className="text-[11px] text-gray-400">Завершите 3 депозита</span>
                  <span className="text-[11px] font-bold text-[#f5a623] flex items-center gap-1">
                    💎 +12 Faro Coins
                  </span>
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <a
                  href={REF_URL}
                  className="z9f4-dark-btn px-6 py-2 rounded-full text-xs font-bold inline-block"
                >
                  Начать
                </a>
              </div>

              <div className="absolute right-0 bottom-0 w-32 h-32 pointer-events-none opacity-85">
                <Image
                  src="/images/target-mission.png"
                  alt="Миссии Faro Casino"
                  fill
                  sizes="128px"
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
          </section>

          {/* Quick Registration Banner */}
          <section className="rounded-2xl p-6 bg-gradient-to-r from-[#1c1a14] via-[#16161c] to-[#121217] border border-[#2d2922] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-white">
                Готовы начать игру в Faro Casino прямо сейчас?
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Мгновенная регистрация за 15 секунд и приветственный пакет до 139 500 рублей
              </p>
            </div>
            <a
              href={REF_URL}
              className="z9f4-gold-btn px-7 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-lg shadow-[#f5a623]/25 shrink-0"
            >
              Зарегистрироваться
            </a>
          </section>

          {/* SEO Content Article (Pure Semantic HTML, 300-400 words target) */}
          <article className="mt-4 pt-6 border-t border-[#1f1f24] text-gray-300 leading-relaxed text-sm">
            <h2 className="text-xl font-bold text-white mb-3" id="official">
              Faro Casino официальный сайт и рабочее зеркало онлайн
            </h2>
            <p className="mb-4">
              Современный <strong>Faro Casino официальный сайт</strong> представляет собой передовую игровую платформу для ценителей премиального азартного отдыха. Здесь каждый гэмблер найдет сертифицированные слоты, карточные столы с живыми дилерами и ежедневные турниры с крупными призовыми фондами. Если основной домен временно недоступен из-за региональных ограничений, на помощь приходит надежное <strong>Faro Casino зеркало</strong>. Альтернативный адрес сохраняет полную конфиденциальность данных, баланс учетной записи и активные статусы программы лояльности. Выбирая <strong>Фаро Казино зеркало</strong>, вы получаете стабильный круглосуточный доступ к любимым развлечениям без необходимости установки сложных дополнительных программ или прокси-серверов.
            </p>

            <h2 className="text-xl font-bold text-white mb-3" id="play">
              Как в Faro Casino играть на реальные деньги и бесплатно
            </h2>
            <p className="mb-4">
              Чтобы в <strong>Faro Casino играть</strong> с максимальной выгодой, достаточно пройти простую регистрацию по номеру телефона или электронной почте. Платформа дарит новичкам щедрый приветственный пакет на первые депозиты и регулярные бесплатные вращения в топовых автоматах. Если вы только знакомитесь с правилами видеослотов, в клубе <strong>Faro Казино</strong> предусмотрен демонстрационный режим без риска для банкролла. Для постоянных гостей <strong>Фаро Казино играть</strong> становится еще интереснее благодаря системе стриков, колесу удачи и миссиям с начислением внутренних монет Faro Coins, которые легко обмениваются на реальные средства в фирменном магазине.
            </p>

            <h2 className="text-xl font-bold text-white mb-3" id="mirror">
              Актуальное Фаро Казино зеркало рабочее на сегодня
            </h2>
            <p className="mb-4">
              Когда требуется войти в личный кабинет без пауз, проверенное <strong>Фаро Казино зеркало рабочее</strong> позволяет восстановить сессию за считанные секунды. Зеркальные копии абсолютно идентичны главному ресурсу: на них действует сквозное SSL-шифрование, доступны быстрые выплаты на банковские карты и криптовалютные кошельки, а также работает профессиональный саппорт. Независимо от того, открываете ли вы <strong>Фаро Казино онлайн</strong> со смартфона на базе Android или с экрана персонального компьютера, адаптивный интерфейс гарантирует плавную графику и мгновенный отклик в каждой партии.
            </p>

            <h2 className="text-xl font-bold text-white mb-3" id="faro">
              Преимущества лицензионного клуба Фаро Казино официальный сайт
            </h2>
            <p className="mb-4">
              Авторитетный <strong>Фаро Казино официальный</strong> портал привлекает прозрачными условиями вывода выигрышей, честными генераторами случайных чисел от ведущих мировых провайдеров и регулярными промо-акциями. Лицензионный статус гарантирует строгую защиту пользовательских данных и честную отдачу аппаратов (RTP от 96%). Переходите на <strong>Фаро Казино официальный сайт</strong>, активируйте приветственный бонус и наслаждайтесь первоклассным игровым процессом на проверенной временем площадке.
            </p>
          </article>

          {/* Footer with Hashtags & Internal Anchors */}
          <footer className="mt-8 pt-6 pb-10 border-t border-[#1f1f24] flex flex-col gap-6">
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#official" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #farocasino
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #farocasinoзеркало
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #farocasinoиграть
              </a>
              <a href="#official" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #farocasinoофициальный
              </a>
              <a href="#official" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #farocasinoофициальныйсайт
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #faroказино
              </a>
              <a href="#faro" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказино
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказинозеркало
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказинозеркалорабочее
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказиноиграть
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказиноонлайн
              </a>
              <a href="#faro" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказиноофициальный
              </a>
              <a href="#faro" className="px-3 py-1.5 rounded-lg bg-[#18181f] text-gray-400 hover:text-[#f5a623] hover:bg-[#202029] transition">
                #фароказиноофициальныйсайт
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
              <div>
                © 2026 Faro Casino. Все права защищены. 18+ Играйте ответственно.
              </div>
              <div className="flex items-center gap-4">
                <a href={REF_URL} className="hover:text-gray-300">
                  Правила и условия
                </a>
                <a href={REF_URL} className="hover:text-gray-300">
                  Политика конфиденциальности
                </a>
                <a href={REF_URL} className="hover:text-gray-300">
                  Ответственная игра
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Support Chat Widget Button */}
      <a
        href={REF_URL}
        aria-label="Поддержка Faro Casino"
        className="fixed right-5 bottom-5 z-40 w-12 h-12 rounded-full bg-[#f5a623] text-black shadow-xl shadow-[#f5a623]/30 flex items-center justify-center hover:scale-105 transition"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          <circle cx="8" cy="9" r="1.2" />
          <circle cx="12" cy="9" r="1.2" />
          <circle cx="16" cy="9" r="1.2" />
        </svg>
      </a>
    </div>
  )
}
