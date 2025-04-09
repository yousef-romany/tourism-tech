"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"
type Direction = "ltr" | "rtl"

interface LanguageContextType {
  language: Language
  direction: Direction
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.clients": "Clients",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.faq": "FAQs",
    "nav.consultation": "Free Consultation",
    "cta.getStarted": "Get Started",
    "cta.learnMore": "Learn More",
    "cta.viewServices": "View Services",
    "cta.contactUs": "Contact Us",
    "cta.bookConsultation": "Book Free Consultation",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.portfolio": "أعمالنا",
    "nav.clients": "عملاؤنا",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.faq": "الأسئلة الشائعة",
    "nav.consultation": "استشارة مجانية",
    "cta.getStarted": "ابدأ الآن",
    "cta.learnMore": "اعرف المزيد",
    "cta.viewServices": "عرض الخدمات",
    "cta.contactUs": "اتصل بنا",
    "cta.bookConsultation": "احجز استشارة مجانية",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar")
  const [direction, setDirection] = useState<Direction>("rtl")

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Set direction based on language
    setDirection(language === "ar" ? "rtl" : "ltr")

    // Set direction attribute on html element
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language

    // Save language preference to localStorage
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"))
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
