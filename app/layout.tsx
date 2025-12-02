import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LatinosTaxi1 - Servicio de Taxi Profesional en Lutz, FL',
  description: 'Servicio de taxi confiable y profesional en Lutz, Florida. Transporte seguro las 24 horas. Llama al +1 (656) 237-7425 o contacta por WhatsApp.',
  keywords: 'taxi, transporte, Lutz, Florida, servicio taxi, LatinosTaxi1, transporte seguro',
  authors: [{ name: 'LatinosTaxi1' }],
  openGraph: {
    title: 'LatinosTaxi1 - Servicio de Taxi Profesional',
    description: 'Servicio de taxi confiable y profesional en Lutz, Florida',
    type: 'website',
    locale: 'es_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LatinosTaxi1 - Servicio de Taxi Profesional',
    description: 'Servicio de taxi confiable y profesional en Lutz, Florida',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://latinostaxi1.com" />
        <meta name="theme-color" content="#eab308" />
        <meta name="facebook-domain-verification" content="29leofbeg3sdhm2vkox4bidfkwpa99" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
