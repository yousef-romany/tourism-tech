"use client"

import React from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const translations = {
  en: {
    title: "Our Projects",
    subtitle: "Explore our successful tourism tech projects",
    viewProject: "View Project",
    contactUs: "Contact Us",
    categories: {
      all: "All",
      websites: "Websites",
      mobileApps: "Mobile Apps",
      platforms: "Platforms",
    },
  },
  ar: {
    title: "مشاريعنا",
    subtitle: "استكشف مشاريع تقنية السياحة الناجحة لدينا",
    viewProject: "عرض المشروع",
    contactUs: "اتصل بنا",
    categories: {
      all: "الكل",
      websites: "مواقع الويب",
      mobileApps: "تطبيقات الجوال",
      platforms: "المنصات",
    },
  },
}

const projects = [
  {
    id: 1,
    title: {
      en: "Egypt Tours Website",
      ar: "موقع جولات مصر",
    },
    description: {
      en: "A responsive website for a leading tour operator in Egypt with booking capabilities and multilingual support.",
      ar: "موقع متجاوب لمشغل جولات رائد في مصر مع إمكانيات الحجز ودعم متعدد اللغات.",
    },
    image: "/placeholder.svg?height=600&width=800",
    category: "websites",
  },
  {
    id: 2,
    title: {
      en: "Cairo Guide App",
      ar: "تطبيق دليل القاهرة",
    },
    description: {
      en: "A mobile app for tourists visiting Cairo with offline maps, audio guides, and recommended itineraries.",
      ar: "تطبيق جوال للسياح الذين يزورون القاهرة مع خرائط بدون اتصال بالإنترنت وأدلة صوتية ومسارات موصى بها.",
    },
    image: "/placeholder.svg?height=600&width=800",
    category: "mobileApps",
  },
  {
    id: 3,
    title: {
      en: "Luxor Adventures",
      ar: "مغامرات الأقصر",
    },
    description: {
      en: "Platform integration for a Luxor-based tour company, managing listings across Viator, GetYourGuide, and TripAdvisor.",
      ar: "تكامل المنصة لشركة جولات مقرها الأقصر، وإدارة القوائم عبر Viator و GetYourGuide و TripAdvisor.",
    },
    image: "/placeholder.svg?height=600&width=800",
    category: "platforms",
  },
  {
    id: 4,
    title: {
      en: "Red Sea Diving",
      ar: "الغوص في البحر الأحمر",
    },
    description: {
      en: "Website and booking system for a diving center in Hurghada with virtual dive site tours and equipment rental.",
      ar: "موقع ونظام حجز لمركز غوص في الغردقة مع جولات افتراضية لمواقع الغوص وتأجير المعدات.",
    },
    image: "/placeholder.svg?height=600&width=800",
    category: "websites",
  },
  {
    id: 5,
    title: {
      en: "Alexandria Tours",
      ar: "جولات الإسكندرية",
    },
    description: {
      en: "A comprehensive website for Alexandria tours with virtual reality experiences of historical sites.",
      ar: "موقع شامل لجولات الإسكندرية مع تجارب الواقع الافتراضي للمواقع التاريخية.",
    },
    image: "/placeholder.svg?height=600&width=800",
    category: "websites",
  },
  {
    id: 6,
    title: {
      en: "Nile Cruise Companion",
      ar: "رفيق رحلة النيل",
    },
    description: {
      en: "Mobile app for Nile cruise passengers with daily itineraries, historical information, and onboard services.",
      ar: "تطبيق جوال لركاب رحلات النيل مع مسارات يومية ومعلومات تاريخية وخدمات على متن السفينة.",
    },
    image: "/placeholder.svg?height=600&width=800",
    category: "mobileApps",
  },
]

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeCategory, setActiveCategory] = React.useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

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
    hidden: { y: 50, opacity: 0 },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="rounded-full"
            >
              {t.categories.all}
            </Button>
            <Button
              variant={activeCategory === "websites" ? "default" : "outline"}
              onClick={() => setActiveCategory("websites")}
              className="rounded-full"
            >
              {t.categories.websites}
            </Button>
            <Button
              variant={activeCategory === "mobileApps" ? "default" : "outline"}
              onClick={() => setActiveCategory("mobileApps")}
              className="rounded-full"
            >
              {t.categories.mobileApps}
            </Button>
            <Button
              variant={activeCategory === "platforms" ? "default" : "outline"}
              onClick={() => setActiveCategory("platforms")}
              className="rounded-full"
            >
              {t.categories.platforms}
            </Button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title[language]}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title[language]}</h3>
                  <p className="text-muted-foreground mb-4">{project.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="gap-1">
                      {t.viewProject}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            {language === "en"
              ? "Interested in working with us on your next tourism tech project?"
              : "هل أنت مهتم بالعمل معنا في مشروع تقنية السياحة التالي الخاص بك؟"}
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">
              {t.contactUs}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
