import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Comparatif Ordinateurs Portables - Back Market',
  description: 'Comparaison d\'ordinateurs portables professionnels disponibles sur Back Market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
