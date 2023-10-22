import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sahil Bhor | Portfolio',
  description: 'A software engineer with experience in web tecnology, data science and automation, looking for a development role with a team I can learn and grow with.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
