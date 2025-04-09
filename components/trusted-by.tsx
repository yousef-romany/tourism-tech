"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Award, Trophy, Star } from "lucide-react"

const translations = {
  en: {
    title: "Trusted By",
    subtitle: "Awards, certifications, and media recognition",
    awards: [
      {
        title: "Best Tourism Tech Provider 2023",
        organization: "Egypt Tourism Excellence Awards",
        icon: Trophy,
      },
      {
        title: "Digital Innovation Award",
        organization: "Middle East Tech Summit",
        icon: Award,
      },
      {
        title: "Top Rated Agency",
        organization: "Tourism Technology Association",
        icon: Star,
      },
    ],
    media: [
      {
        name: "Egypt Today",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "Travel Weekly",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "Tech Middle East",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "Cairo Business Journal",
        logo: "/placeholder-logo.svg",
      },
    ],
    certifications: [
      {
        name: "Google Partner",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "TripAdvisor Preferred Partner",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "ISO 9001 Certified",
        logo: "/placeholder-logo.svg",
      },
    ],
  },
  ar: {
    title: "موثوق به من قبل",
    subtitle: "الجوائز والشهادات والاعتراف الإعلامي",
    awards: [
      {
        title: "أفضل مزود تقنية سياحية 2023",
        organization: "جوائز التميز السياحي المصرية",
        icon: Trophy,
      },
      {
        title: "جائزة الابتكار الرقمي",
        organization: "قمة الشرق الأوسط للتكنولوجيا",
        icon: Award,
      },
      {
        title: "وكالة ذات تصنيف عالي",
        organization: "جمعية تكنولوجيا السياحة",
        icon: Star,
      },
    ],
    media: [
      {
        name: "مصر اليوم",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "أسبوعية السفر",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "تك الشرق الأوسط",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "مجلة القاهرة للأعمال",
        logo: "/placeholder-logo.svg",
      },
    ],
    certifications: [
      {
        name: "شريك جوجل",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "شريك مفضل لـ TripAdvisor",
        logo: "/placeholder-logo.svg",
      },
      {
        name: "حاصل على شهادة ISO 9001",
        logo: "/placeholder-logo.svg",
      },
    ],
  },
}

export default function TrustedBy() {
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className={cn("text-3xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.title}
          </h2>
          <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>{t.subtitle}</p>
        </motion.div>

        <div className="space-y-12">
          {/* Awards */}
          <div>
            <h3 className={cn("text-xl font-bold mb-6 text-center", language === "ar" ? "font-cairo" : "font-poppins")}>
              {language === "en" ? "Awards & Recognition" : "الجوائز والتقدير"}
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t.awards.map((award, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-none shadow-lg bg-gradient-to-br from-background to-muted">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <award.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className={cn("text-lg font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                        {award.title}
                      </h4>
                      <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                        {award.organization}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Media Features */}
          <div>
            <h3 className={cn("text-xl font-bold mb-6 text-center", language === "ar" ? "font-cairo" : "font-poppins")}>
              {language === "en" ? "Featured In" : "ظهر في"}
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t.media.map((media, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors w-[180px] h-[100px]"
                >
                  <Image
                    src={media.logo || "/placeholder-logo.svg"}
                    alt={media.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className={cn("text-xl font-bold mb-6 text-center", language === "ar" ? "font-cairo" : "font-poppins")}>
              {language === "en" ? "Certifications & Partnerships" : "الشهادات والشراكات"}
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors w-[180px] h-[100px]"
                >
                  <Image
                    src={cert.logo || "/placeholder-logo.svg"}
                    alt={cert.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
