"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import TestimonialsSlider from "@/components/testimonials-slider"

const translations = {
  en: {
    title: "Our Clients",
    subtitle: "Trusted by leading tourism companies in Egypt and beyond",
    becomeClient: "Become a Client",
    testimonials: {
      title: "What Our Clients Say",
    },
    platforms: {
      title: "Platforms We Work With",
      subtitle: "We help tourism businesses manage their presence on global platforms",
    },
    cta: {
      title: "Ready to join our success stories?",
      subtitle: "Let's discuss how our tech solutions can help your tourism business thrive",
      button: "Contact Us Today",
    },
  },
  ar: {
    title: "عملاؤنا",
    subtitle: "موثوق به من قبل شركات السياحة الرائدة في مصر وخارجها",
    becomeClient: "كن عميلاً",
    testimonials: {
      title: "ماذا يقول عملاؤنا",
    },
    platforms: {
      title: "المنصات التي نعمل معها",
      subtitle: "نساعد شركات السياحة على إدارة وجودها على المنصات العالمية",
    },
    cta: {
      title: "هل أنت مستعد للانضمام إلى قصص نجاحنا؟",
      subtitle: "دعنا نناقش كيف يمكن لحلولنا التقنية أن تساعد أعمالك السياحية على الازدهار",
      button: "اتصل بنا اليوم",
    },
  },
}

const clients = [
  { name: "Cairo Excursions", logo: "/placeholder-logo.svg" },
  { name: "Alexandria Tours", logo: "/placeholder-logo.svg" },
  { name: "Red Sea Adventures", logo: "/placeholder-logo.svg" },
  { name: "Luxor Explorers", logo: "/placeholder-logo.svg" },
  { name: "Aswan Journeys", logo: "/placeholder-logo.svg" },
  { name: "Sinai Trekkers", logo: "/placeholder-logo.svg" },
  { name: "Nile Cruise Lines", logo: "/placeholder-logo.svg" },
  { name: "Giza Tour Operators", logo: "/placeholder-logo.svg" },
  { name: "Dahab Diving Center", logo: "/placeholder-logo.svg" },
  { name: "Sharm El Sheikh Resorts", logo: "/placeholder-logo.svg" },
  { name: "Hurghada Water Sports", logo: "/placeholder-logo.svg" },
  { name: "Siwa Oasis Expeditions", logo: "/placeholder-logo.svg" },
]

const platforms = [
  { name: "Viator", logo: "/placeholder-logo.svg" },
  { name: "TripAdvisor", logo: "/placeholder-logo.svg" },
  { name: "GetYourGuide", logo: "/placeholder-logo.svg" },
  { name: "Klook", logo: "/placeholder-logo.svg" },
  { name: "TourHQ", logo: "/placeholder-logo.svg" },
  { name: "Expedia", logo: "/placeholder-logo.svg" },
]

export default function ClientsPage() {
  const { language, direction } = useLanguage()
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className={cn("text-4xl md:text-5xl font-bold mb-6", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.title}
          </h1>
          <p className={cn("text-xl text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={140}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={cn("text-3xl font-bold text-center mb-12", language === "ar" ? "font-cairo" : "font-poppins")}
          >
            {t.testimonials.title}
          </motion.h2>

          <TestimonialsSlider language={language} />
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={cn("text-3xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.platforms.title}
            </h2>
            <p
              className={cn(
                "text-muted-foreground max-w-2xl mx-auto",
                language === "ar" ? "font-cairo" : "font-poppins",
              )}
            >
              {t.platforms.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Image
                  src={platform.logo || "/placeholder.svg"}
                  alt={platform.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-muted/30 p-12 rounded-lg"
        >
          <h2 className={cn("text-2xl md:text-3xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.cta.title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mb-8 max-w-2xl mx-auto",
              language === "ar" ? "font-cairo" : "font-poppins",
            )}
          >
            {t.cta.subtitle}
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">
              <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{t.cta.button}</span>
              <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
