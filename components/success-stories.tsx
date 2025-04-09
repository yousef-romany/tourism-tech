"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Globe, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const successStories = [
  {
    id: 1,
    title: {
      en: "60% Booking Increase for Cairo Excursions",
      ar: "زيادة الحجوزات بنسبة 60٪ لرحلات القاهرة",
    },
    description: {
      en: "We developed a multilingual website with an integrated booking system and optimized their presence on global platforms like Viator and GetYourGuide.",
      ar: "قمنا بتطوير موقع متعدد اللغات مع نظام حجز متكامل وتحسين وجودهم على المنصات العالمية مثل Viator و GetYourGuide.",
    },
    results: [
      {
        metric: {
          en: "Booking Increase",
          ar: "زيادة الحجوزات",
        },
        value: "60%",
        icon: TrendingUp,
      },
      {
        metric: {
          en: "International Visitors",
          ar: "الزوار الدوليين",
        },
        value: "45%",
        icon: Globe,
      },
    ],
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder-logo.svg",
  },
  {
    id: 2,
    title: {
      en: "90% Organic Traffic Growth for Luxor Explorers",
      ar: "نمو حركة المرور العضوية بنسبة 90٪ لمستكشفي الأقصر",
    },
    description: {
      en: "Our SEO and content marketing strategy helped this Luxor-based tour company rank on the first page for key tourism keywords, resulting in significant organic traffic growth.",
      ar: "ساعدت استراتيجية تحسين محركات البحث والتسويق بالمحتوى الخاصة بنا شركة الجولات السياحية في الأقصر على التصنيف في الصفحة الأولى للكلمات الرئيسية للسياحة، مما أدى إلى نمو كبير في حركة المرور العضوية.",
    },
    results: [
      {
        metric: {
          en: "Organic Traffic Growth",
          ar: "نمو حركة المرور العضوية",
        },
        value: "90%",
        icon: Search,
      },
      {
        metric: {
          en: "Direct Bookings",
          ar: "الحجوزات المباشرة",
        },
        value: "50%",
        icon: TrendingUp,
      },
    ],
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder-logo.svg",
  },
  {
    id: 3,
    title: {
      en: "45% More Bookings via Mobile App for Red Sea Adventures",
      ar: "45٪ المزيد من الحجوزات عبر تطبيق الجوال لمغامرات البحر الأحمر",
    },
    description: {
      en: "We developed a mobile app with offline capabilities for this diving center, allowing tourists to browse tours, view dive sites, and book experiences even with limited connectivity.",
      ar: "قمنا بتطوير تطبيق جوال بقدرات غير متصلة بالإنترنت لمركز الغوص هذا، مما يسمح للسياح بتصفح الجولات ومشاهدة مواقع الغوص وحجز التجارب حتى مع الاتصال المحدود.",
    },
    results: [
      {
        metric: {
          en: "Mobile Bookings",
          ar: "الحجوزات عبر الجوال",
        },
        value: "45%",
        icon: TrendingUp,
      },
      {
        metric: {
          en: "User Engagement",
          ar: "مشاركة المستخدم",
        },
        value: "78%",
        icon: Users,
      },
    ],
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder-logo.svg",
  },
]

interface SuccessStoriesProps {
  title?: {
    en: string
    ar: string
  }
  subtitle?: {
    en: string
    ar: string
  }
}

export default function SuccessStories({
  title = {
    en: "Success Stories",
    ar: "قصص النجاح",
  },
  subtitle = {
    en: "Real results we've delivered for tourism businesses in Egypt",
    ar: "نتائج حقيقية قدمناها لشركات السياحة في مصر",
  },
}: SuccessStoriesProps) {
  const { language, direction } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
            {title[language]}
          </h2>
          <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
            {subtitle[language]}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {successStories.map((story) => (
            <motion.div key={story.id} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title[language]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                    <Image
                      src={story.logo || "/placeholder-logo.svg"}
                      alt={story.title[language]}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className={cn("text-xl font-bold mb-3", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {story.title[language]}
                  </h3>
                  <p className={cn("text-muted-foreground mb-6", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {story.description[language]}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {story.results.map((result, index) => (
                      <div key={index} className="bg-muted/30 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <result.icon className="h-5 w-5 text-primary" />
                          <span
                            className={cn(
                              "text-sm text-muted-foreground",
                              language === "ar" ? "font-cairo" : "font-poppins",
                            )}
                          >
                            {result.metric[language]}
                          </span>
                        </div>
                        <p className={cn("text-2xl font-bold", language === "ar" ? "font-cairo" : "font-poppins")}>
                          {result.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="link" className="p-0">
                    <Link href="/portfolio" className="flex items-center gap-2">
                      <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {language === "en" ? "View Case Study" : "عرض دراسة الحالة"}
                      </span>
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/portfolio">
              <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                {language === "en" ? "View All Success Stories" : "عرض جميع قصص النجاح"}
              </span>
              <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
