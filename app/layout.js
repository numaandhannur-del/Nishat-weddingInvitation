import { Cormorant_Garamond, Great_Vibes, Playfair_Display } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
})

export const metadata = {
  title: 'Nishat & Shamshu Tabrez — Wedding',
  description: 'Wedding Ceremony Invitation — October 8, 2026, Anjuman Shadi Hall, Ilkal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  )
}
