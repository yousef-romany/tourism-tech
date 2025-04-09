"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const translations = {
  en: {
    title: "Our Partners",
    subtitle: "Trusted by leading tourism companies in Egypt and beyond",
    becomePartner: "Become a Partner",
    testimonials: {
      title: "What Our Partners Say",
      items: [
        {
          quote:
            "TechTour Egypt transformed our online presence. Our bookings increased by 40% within the first three months of launching our new website and platform integrations.",
          author: "Ahmed Hassan",
          position: "CEO, Cairo Excursions",
        },
        {
          quote:
            "The mobile app developed by TechTour Egypt has revolutionized how our customers experience our tours. The offline capabilities and interactive features have received outstanding feedback.",
          author: "Laila Mahmoud",
          position: "Marketing Director, Alexandria Tours",
        },
        {
          quote:
            "Working with TechTour Egypt to manage our global platform presence has been a game-changer. Their expertise in optimizing our listings on Viator and GetYourGuide has significantly increased our international bookings.",
          author: "Mohamed Salah",
          position: "Operations Manager, Red Sea Adventures",
        },
      ],
    },
  },
  ar: {
    title: "شركاؤنا",
    subtitle: "موثوق به من قبل شركات السياحة الرائدة في مصر وخارجها",
    becomePartner: "كن شريكًا",
    testimonials: {
      title: "ماذا يقول شركاؤنا",
      items: [
        {
          quote:
            "قامت تيك تور مصر بتحويل وجودنا عبر الإنترنت. زادت حجوزاتنا بنسبة 40٪ خلال الأشهر الثلاثة الأولى من إطلاق موقعنا الجديد وتكاملات المنصة.",
          author: "أحمد حسن",
          position: "الرئيس التنفيذي، رحلات القاهرة",
        },
        {
          quote:
            "لقد أحدث التطبيق الجوال الذي طورته تيك تور مصر ثورة في كيفية تجربة عملائنا لجولاتنا. حصلت القدرات غير المتصلة بالإنترنت والميزات التفاعلية على ردود فعل ممتازة.",
          author: "ليلى محمود",
          position: "مدير التسويق، جولات الإسكندرية",
        },
        {
          quote:
            "كان العمل مع تيك تور مصر لإدارة وجودنا على المنصة العالمية بمثابة تغيير في قواعد اللعبة. أدت خبرتهم في تحسين قوائمنا على Viator و GetYourGuide إلى زيادة حجوزاتنا الدولية بشكل كبير.",
          author: "محمد صلاح",
          position: "مدير العمليات، مغامرات البحر الأحمر",
        },
      ],
    },
  },
}

const partners = [
  { name: "Cairo Excursions", logo: "/placeholder-logo.svg" },
  { name: "Alexandria Tours", logo: "/placeholder-logo.svg" },
  { name: "Red Sea Adventures", logo: "/placeholder-logo.svg" },
  { name: "Luxor Explorers", logo: "/placeholder-logo.svg" },
  { name: "Aswan Journeys", logo: "/placeholder-logo.svg" },
  { name: "Sinai Trekkers", logo: "/placeholder-logo.svg" },
  { name: "Nile Cruise Lines", logo: "/placeholder-logo.svg" },
  { name: "Giza Tour Operators", logo: "/placeholder-logo.svg" },
]

export default function PartnersPage() {
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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
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
            className="text-3xl font-bold text-center mb-12"
          >
            {t.testimonials.title}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-muted/30 p-6 rounded-lg relative">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" ? "Interested in becoming our partner?" : "هل أنت مهتم بأن تصبح شريكنا؟"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Join our network of successful tourism businesses and leverage our tech expertise to grow your digital presence."
              : "انضم إلى شبكتنا من شركات السياحة الناجحة واستفد من خبرتنا التقنية لتنمية وجودك الرقمي."}
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">
              {t.becomePartner}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
