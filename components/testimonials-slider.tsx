"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content: {
      en: "TripLaunch transformed our online presence. Our bookings increased by 60% within the first three months of launching our new website and platform integrations.",
      ar: "قامت تورتك مصر بتحويل وجودنا عبر الإنترنت. زادت حجوزاتنا بنسبة 60٪ خلال الأشهر الثلاثة الأولى من إطلاق موقعنا الجديد وتكاملات المنصة.",
    },
    author: {
      en: "Ahmed Hassan",
      ar: "أحمد حسن",
    },
    position: {
      en: "CEO, Cairo Excursions",
      ar: "الرئيس التنفيذي، رحلات القاهرة",
    },
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content: {
      en: "The mobile app developed by TripLaunch has revolutionized how our customers experience our tours. The offline capabilities and interactive features have received outstanding feedback.",
      ar: "لقد أحدث التطبيق الجوال الذي طورته تورتك مصر ثورة في كيفية تجربة عملائنا لجولاتنا. حصلت القدرات غير المتصلة بالإنترنت والميزات التفاعلية على ردود فعل ممتازة.",
    },
    author: {
      en: "Laila Mahmoud",
      ar: "ليلى محمود",
    },
    position: {
      en: "Marketing Director, Alexandria Tours",
      ar: "مدير التسويق، جولات الإسكندرية",
    },
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content: {
      en: "Working with TripLaunch to manage our global platform presence has been a game-changer. Their expertise in optimizing our listings on Viator and GetYourGuide has significantly increased our international bookings.",
      ar: "كان العمل مع تورتك مصر لإدارة وجودنا على المنصة العالمية بمثابة تغيير في قواعد اللعبة. أدت خبرتهم في تحسين قوائمنا على Viator و GetYourGuide إلى زيادة حجوزاتنا الدولية بشكل كبير.",
    },
    author: {
      en: "Mohamed Salah",
      ar: "محمد صلاح",
    },
    position: {
      en: "Operations Manager, Red Sea Adventures",
      ar: "مدير العمليات، مغامرات البحر الأحمر",
    },
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSlider({ language }: { language: string }) {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  // Safely get content based on language
  const getContent = (item: any, lang: string) => {
    return lang === "ar" ? item.content.ar : item.content.en
  }

  // Safely get author based on language
  const getAuthor = (item: any, lang: string) => {
    return lang === "ar" ? item.author.ar : item.author.en
  }

  // Safely get position based on language
  const getPosition = (item: any, lang: string) => {
    return lang === "ar" ? item.position.ar : item.position.en
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <Card className="max-w-3xl border-none shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <svg
                      className="h-12 w-12 text-primary/40"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className={cn("text-lg mb-8", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {getContent(testimonials[current], language)}
                  </p>
                  <div className="flex items-center flex-col">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={getAuthor(testimonials[current], language)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className={cn("font-bold text-lg", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {getAuthor(testimonials[current], language)}
                    </h4>
                    <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {getPosition(testimonials[current], language)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full hidden md:flex"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full hidden md:flex"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
