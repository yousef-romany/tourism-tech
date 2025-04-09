"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Headphones, Wrench, BookOpen, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    title: "Support & Warranty",
    subtitle: "We stand behind our work with comprehensive support and warranty",
    description:
      "All our projects come with a standard 3-month support period, ensuring your digital solutions continue to perform optimally after launch. We offer extended support packages for ongoing maintenance and updates beyond the initial period.",
    features: [
      {
        title: "3-Month Free Support",
        description: "All projects include 3 months of free technical support and maintenance after launch.",
        icon: Clock,
      },
      {
        title: "Bug Fixes Guarantee",
        description: "We fix any bugs or issues that arise within 12 months of project completion at no extra cost.",
        icon: Shield,
      },
      {
        title: "24/7 Emergency Support",
        description: "Critical issues are addressed within 2 hours, with emergency contact numbers provided.",
        icon: Headphones,
      },
      {
        title: "Regular Maintenance",
        description: "We provide security updates, performance optimization, and regular system checks.",
        icon: Wrench,
      },
      {
        title: "Training & Documentation",
        description: "Comprehensive training and documentation to help your team manage the system effectively.",
        icon: BookOpen,
      },
      {
        title: "Quick Response Time",
        description: "Non-critical issues are addressed within 24 hours during business days.",
        icon: Zap,
      },
    ],
    cta: "Learn More About Our Support",
  },
  ar: {
    title: "الدعم والضمان",
    subtitle: "نحن ندعم عملنا بدعم وضمان شاملين",
    description:
      "تأتي جميع مشاريعنا مع فترة دعم قياسية مدتها 3 أشهر، مما يضمن استمرار أداء حلولك الرقمية بشكل مثالي بعد الإطلاق. نقدم حزم دعم ممتدة للصيانة المستمرة والتحديثات بعد الفترة الأولية.",
    features: [
      {
        title: "دعم مجاني لمدة 3 أشهر",
        description: "تتضمن جميع المشاريع 3 أشهر من الدعم الفني المجاني والصيانة بعد الإطلاق.",
        icon: Clock,
      },
      {
        title: "ضمان إصلاح الأخطاء",
        description: "نقوم بإصلاح أي أخطاء أو مشكلات تنشأ خلال 12 شهرًا من اكتمال المشروع دون أي تكلفة إضافية.",
        icon: Shield,
      },
      {
        title: "دعم الطوارئ على مدار الساعة",
        description: "يتم معالجة المشكلات الحرجة في غضون ساعتين، مع توفير أرقام اتصال للطوارئ.",
        icon: Headphones,
      },
      {
        title: "صيانة منتظمة",
        description: "نقدم تحديثات أمنية وتحسين الأداء وفحوصات منتظمة للنظام.",
        icon: Wrench,
      },
      {
        title: "التدريب والتوثيق",
        description: "تدريب وتوثيق شاملين لمساعدة فريقك على إدارة النظام بفعالية.",
        icon: BookOpen,
      },
      {
        title: "وقت استجابة سريع",
        description: "يتم معالجة المشكلات غير الحرجة في غضون 24 ساعة خلال أيام العمل.",
        icon: Zap,
      },
    ],
    cta: "تعرف على المزيد حول الدعم الخاص بنا",
  },
}

export default function SupportWarranty() {
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
      transition: { duration: 0.5 },
    },
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
            {t.title}
          </h2>
          <p className={cn("text-xl text-muted-foreground mb-6", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.subtitle}
          </p>
          <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t.features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {feature.title}
                  </h3>
                  <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {feature.description}
                  </p>
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
            <Link href="/contact">
              <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{t.cta}</span>
              <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
