import Navbar from '@/components/hero/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Providers from '@/components/Provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Suspense } from 'react'
import Album from '@/components/Album'
import Notifcation from '@/components/hero/Notifcation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ConsoleMania',
  description: 'A E-commerce web-app for consoles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
      
        
        <ClerkProvider>
        <Providers>
        <Suspense fallback={<Album/>}>
        <Notifcation/>
        <Navbar/>
        {children}
        <Footer/>
        </Suspense>
        </Providers>
        </ClerkProvider>
        
        </body>
    </html>
  )
}
