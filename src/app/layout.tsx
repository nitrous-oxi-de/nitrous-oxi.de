import './globals.css'

import { NextUIProvider } from "@nextui-org/react";

import type { Metadata }  from 'next'
import      { Inter    }  from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nitrous-oxi.de',
  description: 'Open-source OSINT investigation suite with an exposed RESTful API written for research purposes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextUIProvider>
        <head>
        <meta charSet="UTF-8" />
          <meta name="subject" content="Open-source OSINT Investigation Suite" />
          <meta name="keywords" content="OSINT, free, open-source, lookup, search, nitrous, nitrousoxide, nitrous-oxide, email, username, phone, domain, ip" />
          <meta name="author" content="Haruhime Holdings" />
          <meta name="copyright" content="Haruhime Holdings LLC" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta name="revised" content="Thursday, Aug 1st, 2024, 10:50 am" />
          <meta property="og:title" content="OSINT - Nitrous Oxide" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nitrous-oxi.de/" />
          <meta property="og:site_name" content="Nitrous Oxide" />
          <meta property="og:description" content="Nitrous Oxide is an open-source OSINT investigation suite with an exposed RESTful API written for research purposes." />
          <meta name="twitter:title" content="OSINT - Nitrous Oxide" />
          <meta name="twitter:description" content="Nitrous Oxide is an open-source OSINT investigation suite with an exposed RESTful API written for research purposes." />
          <meta name="twitter:image" content="/path/to/your-image.jpg" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />
        </head>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  )
}
