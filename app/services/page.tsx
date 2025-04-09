"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Smartphone, Search, Settings, BarChart, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    title: "Our Services",
    subtitle: "Comprehensive tech solutions for tourism companies in Egypt",
    web: {
      title: "Website Development",
      description: "Custom websites optimized for tourism businesses",
      features: [
        "Responsive tourism websites",
        "Booking systems integration",
        "Multilingual support",
        "SEO optimization",
        "Payment gateway integration",
        "Virtual tours and galleries",
      ],
    },
    mobile: {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS and Android apps",
        "Tour guide features",
        "Offline capabilities",
        "Push notifications",
        "GPS and maps integration",
        "Booking management",
      ],
    },
    platforms: {
      title: "Global Platform Management",
      description: "Setup and management of accounts on major travel platforms",
      features: [
        "Viator & TripAdvisor",
        "GetYourGuide & Klook",
        "TourHQ & other platforms",
        "Account setup and verification",
        "Content creation and optimization",
        "Ongoing management services",
      ],
    },
    seo: {
      title: "SEO & Marketing",
      description: "Improve your visibility and rankings on search engines",
      features: [
        "Tourism-focused SEO strategy",
        "Keyword research and optimization",
        "Content marketing",
        "Local SEO for Egyptian tourism",
        "Performance tracking",
        "Conversion optimization",
      ],
    },
    support: {
      title: "Technical Support",
      description: "Ongoing support and maintenance for your digital assets",
      features: [
        "24/7 technical support",
        "Regular updates and maintenance",
        "Performance monitoring",
        "Security audits",
        "Backup and recovery",
        "Training and documentation",
      ],
    },
    social: {
      title: "Social Media Management",
      description: "Strategic social media presence for tourism businesses",
      features: [
        "Social media strategy",
        "Content creation and scheduling",
        "Community management",
        "Paid advertising campaigns",
        "Performance analytics",
        "Influencer collaborations",
      ],
    },
    media: {
      title: "Photography & Videography",
      description: "Professional media content for tourism businesses",
      features: [
        "Drone aerial photography",
        "Cinematic tour videos",
        "Instagram reels and TikTok content",
        "Hotel and attraction photography",
        "Video editing and post-production",
        "360° virtual tours",
      ],
    },
    reporting: {
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your digital performance",
      features: [
        "Monthly performance reports",
        "Booking conversion tracking",
        "Customer journey analysis",
        "Competitor benchmarking",
        "ROI measurement",
        "Strategic recommendations",
      ],
    },
    cta: "Contact Us",
  },
  ar: {
    title: "خدماتنا",
    subtitle: "حلول تقنية شاملة لشركات السياحة في مصر",
    web: {
      title: "تطوير المواقع الإلكترونية",
      description: "مواقع مخصصة محسنة لشركات السياحة",
      features: [
        "مواقع سياحية متجاوبة",
        "تكامل أنظمة الحجز",
        "دعم متعدد اللغات",
        "تحسين محركات البحث",
        "تكامل بوابات الدفع",
        "جولات افتراضية ومعارض",
      ],
    },
    mobile: {
      title: "تطوير تطبيقات الجوال",
      description: "تطبيقات جوال أصلية ومتعددة المنصات",
      features: [
        "تطبيقات iOS و Android",
        "ميزات دليل السياحة",
        "إمكانيات العمل دون اتصال",
        "إشعارات فورية",
        "تكامل GPS والخرائط",
        "إدارة الحجوزات",
      ],
    },
    platforms: {
      title: "إدارة المنصات العالمية",
      description: "إعداد وإدارة الحسابات على منصات السفر الرئيسية",
      features: [
        "Viator و TripAdvisor",
        "GetYourGuide و Klook",
        "TourHQ ومنصات أخرى",
        "إعداد الحساب والتحقق",
        "إنشاء المحتوى وتحسينه",
        "خدمات الإدارة المستمرة",
      ],
    },
    seo: {
      title: "تحسين محركات البحث والتسويق",
      description: "تحسين ظهورك وترتيبك في محركات البحث",
      features: [
        "استراتيجية SEO للسياحة",
        "بحث وتحسين الكلمات المفتاحية",
        "تسويق المحتوى",
        "SEO محلي للسياحة المصرية",
        "تتبع الأداء",
        "تحسين التحويل",
      ],
    },
    support: {
      title: "الدعم الفني",
      description: "دعم وصيانة مستمرة لأصولك الرقمية",
      features: [
        "دعم فني على مدار الساعة",
        "تحديثات وصيانة منتظمة",
        "مراقبة الأداء",
        "تدقيقات أمنية",
        "النسخ الاحتياطي والاسترداد",
        "التدريب والتوثيق",
      ],
    },
    social: {
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "وجود استراتيجي على وسائل التواصل الاجتماعي لشركات السياحة",
      features: [
        "استراتيجية وسائل التواصل الاجتماعي",
        "إنشاء المحتوى وجدولته",
        "إدارة المجتمع",
        "حملات إعلانية مدفوعة",
        "تحليلات الأداء",
        "تعاون مع المؤثرين",
      ],
    },
    media: {
      title: "التصوير الفوتوغرافي والفيديو",
      description: "محتوى وسائط احترافي لشركات السياحة",
      features: [
        "التصوير الجوي بالدرون",
        "مقاطع فيديو سينمائية للجولات",
        "محتوى Instagram reels و TikTok",
        "تصوير الفنادق والمعالم السياحية",
        "تحرير الفيديو وما بعد الإنتاج",
        "جولات افتراضية 360 درجة",
      ],
    },
    reporting: {
      title: "التحليلات والتقارير",
      description: "رؤى قائمة على البيانات لتحسين أدائك الرقمي",
      features: [
        "تقارير أداء شهرية",
        "تتبع تحويل الحجوزات",
        "تحليل رحلة العملاء",
        "مقارنة المنافسين",
        "قياس العائد على الاستثمار",
        "توصيات استراتيجية",
      ],
    },
    cta: "اتصل بنا",
  },
}

export default function ServicesPage() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1
              className={cn("text-4xl md:text-5xl font-bold mb-6", language === "ar" ? "font-cairo" : "font-poppins")}
            >
              {t.title}
            </h1>
            <p className={cn("text-xl text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Website Development */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Website Development"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.web.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.web.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.web.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile App Development */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mobile App Development"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.mobile.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.mobile.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.mobile.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Global Platform Management */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Global Platform Management"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.platforms.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.platforms.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.platforms.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* SEO & Marketing */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="SEO & Marketing"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.seo.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.seo.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.seo.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media Management */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Social Media Management"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.social.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.social.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.social.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photography & Videography */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Photography & Videography"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.media.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.media.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.media.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Analytics & Reporting */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                <CardHeader className="relative p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Analytics & Reporting"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className={cn("mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.reporting.title}
                  </CardTitle>
                  <CardDescription className={cn("mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.reporting.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm mb-6">
                    {t.reporting.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
