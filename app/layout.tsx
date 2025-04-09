import type React from "react"
import type { Metadata } from "next"
import { Cairo, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTopButton from "@/components/back-to-top-button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "TripLaunch | Digital Solutions for Tourism Businesses",
  description:
    "We provide specialized digital solutions for tourism businesses in Egypt, including website and app development, platform management, and digital marketing.",
  keywords:
    "tourism technology, Egypt tourism, digital solutions, website development, app development, Viator, TripAdvisor",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${cairo.variable} font-sans`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
              <BackToTopButton />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}


import './globals.css'