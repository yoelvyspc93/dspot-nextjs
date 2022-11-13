import { Inter } from '@next/font/google'
import 'styles/globals.css'

const font = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--inter-font'
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={font.variable}>
        {children}
      </body>
    </html>
  )
}
