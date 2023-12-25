import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from './provider'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    template: "Nucleus.dev | Sujit Kumar",
    default: "Sujit Kumar",
    absolute: "Nucleus.dev | Sujit Kumar - Full Stack Developer",
  },
  description:
  "Hey, I'm Sujit Kumar, a budding Full Stack Web Developer passionate about crafting seamless digital experiences. While I'm in the early stages of my journey, I love sharing my coding adventures on Dev.to. Join me as I explore the tech world, contribute to open source projects, and share insights on Dev.to. and let's shape the future of the web together! 💡🚀 #FullStackMagic #CodeCrafting #OpenSourceExplorer",
  category: "Portfolio",
  metadataBase: new URL("https://github.com/mnamesujit"),
  openGraph: {
    type: "website",
    title: "Sujit Kumar - Full Stack Developer",
    emails: "mnamesujit@gmail.com",
    description: "Hey, I'm Sujit Kumar, a budding Full Stack Web Developer passionate about crafting seamless digital experiences. While I'm in the early stages of my journey, I love sharing my coding adventures on Dev.to. Join me as I explore the tech world, contribute to open source projects, and share insights on Dev.to. and let's shape the future of the web together! 💡🚀 #FullStackMagic #CodeCrafting #OpenSourceExplorer",
    countryName: "India",
    siteName: "Sujit Kumar - Full Stack Developer",
    url: "https://github.com/mnamesujit",
    phoneNumbers: "+919305083852",
    locale: "en_IN",
    images: "https://nucleus-neon.vercel.app/profile.jpg",
  },
  authors: [{ name: "Sujit Kumar" }],
  keywords: [
    "Sujit Kumar",
    "Nucleus.dev",
    "nucleus.dev",
    "Programmar",
    "Frontend-Developer",
    "Backend-Developer",
    "Full Stack Developer",
    "Next.Js",
  ],
  applicationName: "Sujit Kumar",
  creator: "Sujit Kumar",
  publisher: "Vercel",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: "Sujit Kumar - Full Stack Developer",
    startupImage: "https://github.com/mnamesujit",
  },
  generator: "Next.js",
  twitter: {
    title: "Sujit Kumar - Full Stack Developer",
    creator: "Sujit Kumar",
    creatorId: "@mnamesujit",
    site: "https://github.com/mnamesujit",
    images: "https://nucleus-neon.vercel.app/profile.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
           <div className='min-h-screen min-w-screen flex flex-col items-center pt-0 md:pt-8'>
              <Header />
              {children}
           </div>
          </ThemeProvider>
      </body>
    </html>
  )
}
