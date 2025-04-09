"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: {
      en: "Cairo Excursions",
      ar: "رحلات القاهرة",
    },
    logo: "/placeholder-logo.svg",
    rating: 5,
    text: {
      en: "TripLaunch transformed our online presence completely. Our bookings increased by 60% within just three months of launching our new website and implementing their platform management strategy. Their team's expertise in tourism tech is unmatched in Egypt.",
      ar: "قامت تورتك مصر بتحويل وجودنا عبر الإنترنت بشكل كامل. زادت حجوزاتنا بنسبة 60٪ في غضون ثلاثة أشهر فقط من إطلاق موقعنا الجديد وتنفيذ استراتيجية إدارة المنصة الخاصة بهم. خبرة فريقهم في تكنولوجيا السياحة لا مثيل لها في مصر.",
    },
    author: {
      en: "Ahmed Hassan, CEO",
      ar: "أحمد حسن، الرئيس التنفيذي",
    },
  },
  {
    id: 2,
    name: {
      en: "Red Sea Adventures",
      ar: "مغامرات البحر الأحمر",
    },
    logo: "/placeholder-logo.svg",
    rating: 5,
    text: {
      en: "The mobile app developed by TripLaunch has revolutionized how our customers experience our diving tours. The offline capabilities and interactive features have received outstanding feedback from international tourists. Our bookings have increased by 45% since launching the app.",
      ar: "لقد أحدث التطبيق الجوال الذي طورته تورتك مصر ثورة في كيفية تجربة عملائنا لجولات الغوص لدينا. حصلت القدرات غير المتصلة بالإنترنت والميزات التفاعلية على ردود فعل ممتازة من السياح الدوليين. زادت حجوزاتنا بنسبة 45٪ منذ إطلاق التطبيق.",
    },
    author: {
      en: "Mohamed Salah, Operations Manager",
      ar: "محمد صلاح، مدير العمليات",
    },
  },
  {
    id: 3,
    name: {
      en: "Alexandria Tours",
      ar: "جولات الإسكندرية",
    },
    logo: "/placeholder-logo.svg",
    rating: 4.5,
    text: {
      en: "Working with TripLaunch to manage our global platform presence has been a game-changer. Their expertise in optimizing our listings on Viator and GetYourGuide has significantly increased our international bookings by 75% year-over-year. Their responsive support team is always available when we need them.",
      ar: "كان العمل مع ت  Their responsive support team is always available when we need them.",
      ar: "كان العمل مع تورتك مصر لإدارة وجودنا على المنصات العالمية بمثابة تغيير في قواعد اللعبة. أدت خبرتهم في تحسين قوائمنا على Viator و GetYourGuide إلى زيادة حجوزاتنا الدولية بنسبة 75٪ على أساس سنوي. فريق الدعم سريع الاستجابة لديهم متاح دائمًا عندما نحتاج إليهم.",
    },
    author: {
      en: "Laila Mahmoud, Marketing Director",
      ar: "ليلى محمود، مدير التسويق",
    },
  },
  {
    id: 4,
    name: {
      en: "Luxor Explorers",
      ar: "مستكشفو الأقصر",
    },
    logo: "/placeholder-logo.svg",
    rating: 5,
    text: {
      en: "The SEO and content marketing strategy implemented by TripLaunch has dramatically improved our visibility in search results. We're now ranking on the first page for key tourism keywords, resulting in a 90% increase in organic traffic and 50% more direct bookings through our website.",
      ar: "أدت استراتيجية تحسين محركات البحث والتسويق بالمحتوى التي نفذتها تورتك مصر إلى تحسين ظهورنا بشكل كبير في نتائج البحث. نحن الآن نحتل مرتبة في الصفحة الأولى للكلمات الرئيسية للسياحة، مما أدى إلى زيادة بنسبة 90٪ في حركة المرور العضوية و 50٪ زيادة في الحجوزات المباشرة من خلال موقعنا.",
    },
    author: {
      en: "Hossam Ali, General Manager",
      ar: "حسام علي، المدير العام",
    },
  },
]

interface ClientReviewsProps {
  title?: {
    en: string
    ar: string
  }
  subtitle?: {
    en: string
    ar: string
  }
}

export default function ClientReviews({
  title = {
    en: "What Our Clients Say",
    ar: "ماذا يقول عملاؤنا",
  },
  subtitle = {
    en: "Read reviews from tourism businesses we've helped across Egypt",
    ar: "اقرأ المراجعات من شركات السياحة التي ساعدناها في جميع أنحاء مصر",
  },
}: ClientReviewsProps) {
  const { language, direction } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-5 w-5 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />)
    }

    return stars
  }

  return (
    <section className="py-16 bg-muted/30">
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

        <div className="relative max-w-4xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full hidden md:flex"
            onClick={prevReview}
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction === "rtl" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "rtl" ? 50 : -50 }}
            transition={{ duration: 0.5 }}
            className="px-4 md:px-16"
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={reviews[currentIndex].logo || "/placeholder-logo.svg"}
                        alt={reviews[currentIndex].name[language]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className={cn("text-xl font-bold", language === "ar" ? "font-cairo" : "font-poppins")}>
                        {reviews[currentIndex].name[language]}
                      </h3>
                      <div className="flex mt-1">{renderStars(reviews[currentIndex].rating)}</div>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="h-12 w-12 text-primary/20 absolute -top-6 -left-6" />
                    <p
                      className={cn(
                        "text-lg text-muted-foreground relative z-10",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {reviews[currentIndex].text[language]}
                    </p>
                  </div>

                  <p className={cn("font-medium", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {reviews[currentIndex].author[language]}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full hidden md:flex"
            onClick={nextReview}
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
