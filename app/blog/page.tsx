"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    title: "Blog & Resources",
    subtitle: "Insights, tips, and guides for tourism businesses",
    readMore: "Read More",
    categories: {
      all: "All",
      tips: "Tips & Guides",
      trends: "Industry Trends",
      case: "Case Studies",
    },
  },
  ar: {
    title: "المدونة والموارد",
    subtitle: "رؤى ونصائح وأدلة لشركات السياحة",
    readMore: "اقرأ المزيد",
    categories: {
      all: "الكل",
      tips: "نصائح وأدلة",
      trends: "اتجاهات الصناعة",
      case: "دراسات حالة",
    },
  },
}

const blogPosts = [
  {
    id: 1,
    title: {
      en: "10 Tips to Optimize Your Viator Listings for Better Visibility",
      ar: "10 نصائح لتحسين قوائم Viator الخاصة بك لرؤية أفضل",
    },
    excerpt: {
      en: "Learn how to optimize your tour listings on Viator to increase visibility and bookings with these expert tips.",
      ar: "تعرف على كيفية تحسين قوائم الجولات الخاصة بك على Viator لزيادة الرؤية والحجوزات باستخدام هذه النصائح الخبيرة.",
    },
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-10-15",
    category: "tips",
    author: {
      en: "Ahmed Ibrahim",
      ar: "أحمد إبراهيم",
    },
  },
  {
    id: 2,
    title: {
      en: "The Rise of Experiential Tourism in Egypt: What You Need to Know",
      ar: "صعود السياحة التجريبية في مصر: ما تحتاج إلى معرفته",
    },
    excerpt: {
      en: "Explore the growing trend of experiential tourism in Egypt and how tourism businesses can adapt to meet changing traveler preferences.",
      ar: "استكشف الاتجاه المتزايد للسياحة التجريبية في مصر وكيف يمكن لشركات السياحة التكيف لتلبية تفضيلات المسافرين المتغيرة.",
    },
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-09-28",
    category: "trends",
    author: {
      en: "Laila Hassan",
      ar: "ليلى حسن",
    },
  },
  {
    id: 3,
    title: {
      en: "How We Increased Online Bookings by 200% for Red Sea Diving Center",
      ar: "كيف زدنا الحجوزات عبر الإنترنت بنسبة 200٪ لمركز الغوص في البحر الأحمر",
    },
    excerpt: {
      en: "A case study on how our digital solutions helped a diving center in Hurghada triple their online bookings within six months.",
      ar: "دراسة حالة حول كيف ساعدت حلولنا الرقمية مركز غوص في الغردقة على مضاعفة حجوزاتهم عبر الإنترنت ثلاث مرات خلال ستة أشهر.",
    },
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-09-10",
    category: "case",
    author: {
      en: "Omar Saleh",
      ar: "عمر صالح",
    },
  },
  {
    id: 4,
    title: {
      en: "Essential SEO Strategies for Tourism Websites in 2023",
      ar: "استراتيجيات SEO الأساسية لمواقع السياحة في 2023",
    },
    excerpt: {
      en: "Discover the latest SEO techniques to help your tourism website rank higher in search results and attract more potential customers.",
      ar: "اكتشف أحدث تقنيات تحسين محركات البحث لمساعدة موقع السياحة الخاص بك على الترتيب الأعلى في نتائج البحث وجذب المزيد من العملاء المحتملين.",
    },
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-08-22",
    category: "tips",
    author: {
      en: "Nour Ibrahim",
      ar: "نور إبراهيم",
    },
  },
  {
    id: 5,
    title: {
      en: "Mobile Apps vs. Responsive Websites: What's Best for Your Tourism Business?",
      ar: "تطبيقات الجوال مقابل مواقع الويب المتجاوبة: ما هو الأفضل لأعمالك السياحية؟",
    },
    excerpt: {
      en: "Weigh the pros and cons of developing a mobile app versus a responsive website for your tourism business in Egypt.",
      ar: "قارن بين مزايا وعيوب تطوير تطبيق جوال مقابل موقع ويب متجاوب لأعمالك السياحية في مصر.",
    },
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-08-05",
    category: "tips",
    author: {
      en: "Mahmoud Ali",
      ar: "محمود علي",
    },
  },
  {
    id: 6,
    title: {
      en: "How Digital Transformation Revitalized a Traditional Tour Operator",
      ar: "كيف أعادت التحول الرقمي إحياء مشغل جولات تقليدي",
    },
    excerpt: {
      en: "Case study: How we helped a 30-year-old tour operator in Luxor embrace digital solutions and increase revenue by 150%.",
      ar: "دراسة حالة: كيف ساعدنا مشغل جولات عمره 30 عامًا في الأقصر على تبني الحلول الرقمية وزيادة الإيرادات بنسبة 150٪.",
    },
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-07-20",
    category: "case",
    author: {
      en: "Fatima Khalid",
      ar: "فاطمة خالد",
    },
  },
]

export default function BlogPage() {
  const { language, direction } = useLanguage()
  const t = translations[language]
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
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

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={cn("rounded-full", language === "ar" ? "font-cairo" : "font-poppins")}
            >
              {t.categories.all}
            </Button>
            <Button
              variant={activeCategory === "tips" ? "default" : "outline"}
              onClick={() => setActiveCategory("tips")}
              className={cn("rounded-full", language === "ar" ? "font-cairo" : "font-poppins")}
            >
              {t.categories.tips}
            </Button>
            <Button
              variant={activeCategory === "trends" ? "default" : "outline"}
              onClick={() => setActiveCategory("trends")}
              className={cn("rounded-full", language === "ar" ? "font-cairo" : "font-poppins")}
            >
              {t.categories.trends}
            </Button>
            <Button
              variant={activeCategory === "case" ? "default" : "outline"}
              onClick={() => setActiveCategory("case")}
              className={cn("rounded-full", language === "ar" ? "font-cairo" : "font-poppins")}
            >
              {t.categories.case}
            </Button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title[language]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "text-xl font-bold mb-2 line-clamp-2",
                      language === "ar" ? "font-cairo" : "font-poppins",
                    )}
                  >
                    {post.title[language]}
                  </h3>
                  <p
                    className={cn(
                      "text-muted-foreground mb-4 line-clamp-3",
                      language === "ar" ? "font-cairo" : "font-poppins",
                    )}
                  >
                    {post.excerpt[language]}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{t.readMore}</span>
                        <ArrowRight className={cn("h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
