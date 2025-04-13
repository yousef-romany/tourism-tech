"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Smartphone, Camera, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import AnimatedCounter from "@/components/animated-counter"
import SectionHeading from "@/components/section-heading"
import PerformanceTracking from "@/components/performance-tracking"
import { useRef } from "react"
import ClientReviews from "@/components/client-reviews"
import SuccessStories from "@/components/success-stories"
import SupportWarranty from "@/components/support-warranty"
import TrustedBy from "@/components/trusted-by"

const translations = {
  en: {
    hero: {
      title: "Digital Solutions for Tourism Businesses in Egypt",
      subtitle: "We help tourism businesses expand their global reach through innovative tech solutions",
      cta1: "View Services",
      cta2: "Contact Us",
    },
    stats: {
      title: "Trusted by Tourism Businesses",
      years: "Years Experience",
      clients: "Happy Clients",
      projects: "Projects Completed",
      platforms: "Global Platforms",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive tech solutions for tourism companies",
      web: {
        title: "Website Development",
        description: "Custom websites optimized for tourism businesses",
      },
      mobile: {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications",
      },
      platforms: {
        title: "Global Platform Management",
        description: "Setup and management of accounts on major travel platforms",
      },
      media: {
        title: "Photography & Videography",
        description: "Professional media content for tourism businesses",
      },
      viewAll: "View All Services",
    },
    why: {
      title: "Why Choose Us",
      subtitle: "We understand the unique challenges of the tourism industry in Egypt",
      reasons: [
        {
          title: "Tourism Industry Expertise",
          description:
            "We specialize exclusively in the tourism sector, understanding its unique challenges and opportunities.",
        },
        {
          title: "Multilingual Support",
          description: "Our solutions support Arabic, English, and other languages to reach global audiences.",
        },
        {
          title: "Local & Global Knowledge",
          description: "We combine local Egyptian tourism insights with global digital marketing strategies.",
        },
        {
          title: "End-to-End Solutions",
          description: "From website development to platform management and content creation - we handle it all.",
        },
        {
          title: "Proven Results",
          description: "Our clients see an average 40% increase in online bookings within the first 3 months.",
        },
        {
          title: "Ongoing Support",
          description: "We provide continuous support and optimization to ensure long-term success.",
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
    },
    cta: {
      title: "Ready to transform your tourism business?",
      subtitle: "Let's discuss how our tech solutions can help you reach more customers",
      button: "Book Free Consultation",
    },
  },
  ar: {
    hero: {
      title: "حلول رقمية لشركات السياحة في مصر",
      subtitle: "نساعد شركات السياحة على توسيع نطاقها العالمي من خلال حلول تقنية مبتكرة",
      cta1: "عرض الخدمات",
      cta2: "اتصل بنا",
    },
    stats: {
      title: "موثوق به من قبل شركات السياحة",
      years: "سنوات الخبرة",
      clients: "عملاء سعداء",
      projects: "مشاريع مكتملة",
      platforms: "منصات عالمية",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول تقنية شاملة لشركات السياحة",
      web: {
        title: "تطوير المواقع الإلكترونية",
        description: "مواقع مخصصة محسنة لشركات السياحة",
      },
      mobile: {
        title: "تطوير تطبيقات الجوال",
        description: "تطبيقات جوال أصلية ومتعددة المنصات",
      },
      platforms: {
        title: "إدارة المنصات العالمية",
        description: "إعداد وإدارة الحسابات على منصات السفر الرئيسية",
      },
      media: {
        title: "التصوير الفوتوغرافي والفيديو",
        description: "محتوى وسائط احترافي لشركات السياحة",
      },
      viewAll: "عرض جميع الخدمات",
    },
    why: {
      title: "لماذا تختارنا",
      subtitle: "نحن نفهم التحديات الفريدة لصناعة السياحة في مصر",
      reasons: [
        {
          title: "خبرة في صناعة السياحة",
          description: "نحن متخصصون حصريًا في قطاع السياحة، ونفهم تحدياته وفرصه الفريدة.",
        },
        {
          title: "دعم متعدد اللغات",
          description: "تدعم حلولنا اللغة العربية والإنجليزية ولغات أخرى للوصول إلى الجماهير العالمية.",
        },
        {
          title: "معرفة محلية وعالمية",
          description: "نجمع بين رؤى السياحة المصرية المحلية واستراتيجيات التسويق الرقمي العالمية.",
        },
        {
          title: "حلول شاملة",
          description: "من تطوير المواقع إلى إدارة المنصات وإنشاء المحتوى - نحن نتعامل مع كل شيء.",
        },
        {
          title: "نتائج مثبتة",
          description: "يشهد عملاؤنا زيادة بنسبة 40٪ في الحجوزات عبر الإنترنت خلال الأشهر الثلاثة الأولى.",
        },
        {
          title: "دعم مستمر",
          description: "نقدم دعمًا وتحسينًا مستمرين لضمان النجاح على المدى الطويل.",
        },
      ],
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
    },
    cta: {
      title: "هل أنت مستعد لتحويل أعمالك السياحية؟",
      subtitle: "دعنا نناقش كيف يمكن لحلولنا التقنية أن تساعدك في الوصول إلى المزيد من العملاء",
      button: "احجز استشارة مجانية",
    },
  },
}

export default function Home() {
  const { language, direction } = useLanguage()
  const t = translations[language]
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

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
    <>
      {/* Performance Tracking */}
      <PerformanceTracking />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full opacity-20"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/placeholder.mp4" type="video/mp4" />
            {/* Fallback image */}
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Egyptian tourism"
              fill
              priority
              className="object-cover"
            />
          </video>
        </div>
        <div className="container">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: direction === "rtl" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
                  language === "ar" ? "font-cairo" : "font-poppins",
                )}
              >
                {t.hero.title}
              </h1>
              <p
                className={cn(
                  "text-xl text-muted-foreground mb-8 max-w-lg",
                  language === "ar" ? "font-cairo" : "font-poppins",
                )}
              >
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                    <Link href="/services">
                      {t.hero.cta1}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                    <Link href="/contact">{t.hero.cta2}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Tourism tech solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className={cn("text-3xl font-bold", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.stats.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter
                end={8}
                suffix="+"
                className={cn(
                  "text-4xl md:text-5xl text-primary mb-2",
                  language === "ar" ? "font-cairo" : "font-poppins",
                )}
              />
              <div className={cn("text-sm text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.stats.years}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter
                end={150}
                suffix="+"
                className={cn(
                  "text-4xl md:text-5xl text-primary mb-2",
                  language === "ar" ? "font-cairo" : "font-poppins",
                )}
              />
              <div className={cn("text-sm text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.stats.clients}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter
                end={300}
                suffix="+"
                className={cn(
                  "text-4xl md:text-5xl text-primary mb-2",
                  language === "ar" ? "font-cairo" : "font-poppins",
                )}
              />
              <div className={cn("text-sm text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.stats.projects}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter
                end={10}
                suffix="+"
                className={cn(
                  "text-4xl md:text-5xl text-primary mb-2",
                  language === "ar" ? "font-cairo" : "font-poppins",
                )}
              />
              <div className={cn("text-sm text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.stats.platforms}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container">
          <SectionHeading title={t.services.title} subtitle={t.services.subtitle} center={true} language={language} />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Website Development"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.web.title}
                    </h3>
                    <p className={cn("text-muted-foreground mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.web.description}
                    </p>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/services" className="flex items-center gap-2">
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{language === "ar" ? "أعرف مزيد" : "Learn More"}</span>
                        <ArrowRight className={cn("h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mobile App Development"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.mobile.title}
                    </h3>
                    <p className={cn("text-muted-foreground mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.mobile.description}
                    </p>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/services" className="flex items-center gap-2">
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{language === "ar" ? "أعرف مزيد" : "Learn More"}</span>
                        <ArrowRight className={cn("h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Global Platform Management"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.platforms.title}
                    </h3>
                    <p className={cn("text-muted-foreground mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.platforms.description}
                    </p>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/services" className="flex items-center gap-2">
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{language === "ar" ? "أعرف مزيد" : "Learn More"}</span>
                        <ArrowRight className={cn("h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Photography & Videography"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.media.title}
                    </h3>
                    <p className={cn("text-muted-foreground mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.services.media.description}
                    </p>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/services" className="flex items-center gap-2">
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{language === "ar" ? "أعرف مزيد" : "Learn More"}</span>
                        <ArrowRight className={cn("h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="/services">
                {t.services.viewAll}
                <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Import Client Reviews Component */}
      <ClientReviews />

      {/* Import Success Stories Component */}
      <SuccessStories />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <SectionHeading title={t.why.title} subtitle={t.why.subtitle} center={true} language={language} />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {t.why.reasons.map((reason, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {reason.title}
                    </h3>
                    <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support & Warranty Section */}
      <SupportWarranty />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className={cn("text-3xl md:text-4xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}
            >
              {t.cta.title}
            </h2>
            <p className={cn("text-muted-foreground mb-8", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.cta.subtitle}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/consultation">
                  {t.cta.button}
                  <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
