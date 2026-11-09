import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#0f0f11]">
      <head>
        <title>Faro Casino Официальный Сайт | Фаро Казино Зеркало Рабочее</title>
        <meta
          name="description"
          content="Faro Casino официальный сайт и рабочее зеркало фаро казино онлайн. Быстрый вход, регистрация, бонусы до 139 500 ₽ и 1 145 FS. Играйте в фаро казино с мобильных и ПК 24/7."
        />
        <meta name="keywords" content="faro casino, faro casino зеркало, faro casino играть, faro casino официальный, faro casino официальный сайт, faro казино, фаро казино, фаро казино зеркало, фаро казино зеркало рабочее, фаро казино играть, фаро казино онлайн, фаро казино официальный, фаро казино официальный сайт" />
        <link rel="canonical" href="https://farocasino37.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#0f0f11" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Faro Casino Официальный Сайт | Фаро Казино Зеркало Рабочее" />
        <meta
          property="og:description"
          content="Faro Casino официальный сайт и рабочее зеркало фаро казино онлайн. Быстрый вход, регистрация, бонусы до 139 500 ₽ и 1 145 FS."
        />
        <meta property="og:url" content="https://farocasino37.vercel.app/" />
        <meta property="og:site_name" content="Faro Casino" />
        <meta property="og:image" content="https://farocasino37.vercel.app/images/halloween-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino Официальный Сайт | Фаро Казино Зеркало Рабочее" />
        <meta
          name="twitter:description"
          content="Faro Casino официальный сайт и рабочее зеркало фаро казино онлайн. Быстрый вход и бонусы."
        />
        <meta name="twitter:image" content="https://farocasino37.vercel.app/images/halloween-banner.png" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased bg-[#0f0f11] text-[#f2f2f2] min-h-screen">
        {children}
      </body>
    </html>
  )
}
