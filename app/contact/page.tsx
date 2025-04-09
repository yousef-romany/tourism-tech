"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      success: "Your message has been sent successfully!",
    },
    info: {
      title: "Contact Information",
      address: {
        label: "Address",
        value: "Cairo, Egypt",
      },
      phone: {
        label: "Phone",
        value: "+20 123 456 7890",
      },
      email: {
        label: "Email",
        value: "info@digitoursolutions.com",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What services do you offer for tourism businesses?",
          answer:
            "We offer a comprehensive range of digital services including website development, mobile app development, global platform management, SEO optimization, social media management, and technical support tailored specifically for tourism businesses in Egypt.",
        },
        {
          question: "How long does it take to develop a tourism website?",
          answer:
            "The timeline for website development varies depending on the complexity and requirements of your project. Typically, a standard tourism website takes 4-6 weeks from concept to launch, while more complex projects with booking systems and custom features may take 8-12 weeks.",
        },
        {
          question: "Do you offer ongoing support after project completion?",
          answer:
            "Yes, we offer various support packages to ensure your digital assets continue to perform optimally. Our support includes regular maintenance, security updates, content updates, and technical assistance whenever you need it.",
        },
        {
          question: "Can you help with existing accounts on platforms like Viator and TripAdvisor?",
          answer:
            "We specialize in optimizing existing accounts on global travel platforms. We can audit your current listings, improve content, enhance SEO, resolve any issues, and implement strategies to increase your visibility and bookings.",
        },
        {
          question: "What makes your services specific to tourism businesses?",
          answer:
            "Our team has extensive experience in the tourism industry in Egypt. We understand the unique challenges and opportunities in this sector, including seasonality, target markets, booking patterns, and competitive landscapes. All our solutions are tailored with these specific considerations in mind.",
        },
      ],
    },
  },
  ar: {
    title: "اتصل بنا",
    subtitle: "تواصل مع فريقنا",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      subject: "الموضوع",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      success: "تم إرسال رسالتك بنجاح!",
    },
    info: {
      title: "معلومات الاتصال",
      address: {
        label: "العنوان",
        value: "القاهرة، مصر",
      },
      phone: {
        label: "الهاتف",
        value: "+20 123 456 7890",
      },
      email: {
        label: "البريد الإلكتروني",
        value: "info@digitoursolutions.com",
      },
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "ما هي الخدمات التي تقدمونها لشركات السياحة؟",
          answer:
            "نقدم مجموعة شاملة من الخدمات الرقمية بما في ذلك تطوير المواقع الإلكترونية، وتطوير تطبيقات الجوال، وإدارة المنصات العالمية، وتحسين محركات البحث، وإدارة وسائل التواصل الاجتماعي، والدعم الفني المصمم خصيصًا لشركات السياحة في مصر.",
        },
        {
          question: "كم من الوقت يستغرق تطوير موقع سياحي؟",
          answer:
            "يختلف الجدول الزمني لتطوير الموقع حسب تعقيد ومتطلبات مشروعك. عادةً، يستغرق موقع السياحة القياسي 4-6 أسابيع من المفهوم إلى الإطلاق، بينما قد تستغرق المشاريع الأكثر تعقيدًا مع أنظمة الحجز والميزات المخصصة 8-12 أسبوعًا.",
        },
        {
          question: "هل تقدمون دعمًا مستمرًا بعد اكتمال المشروع؟",
          answer:
            "نعم، نقدم حزم دعم متنوعة لضمان استمرار أداء أصولك الرقمية بشكل مثالي. يشمل دعمنا الصيانة المنتظمة، وتحديثات الأمان، وتحديثات المحتوى، والمساعدة الفنية عندما تحتاجها.",
        },
        {
          question: "هل يمكنكم المساعدة في الحسابات الموجودة على منصات مثل Viator و TripAdvisor؟",
          answer:
            "بالتأكيد! نحن متخصصون في تحسين الحسابات الموجودة على منصات السفر العالمية. يمكننا تدقيق قوائمك الحالية، وتحسين المحتوى، وتعزيز تحسين محركات البحث، وحل أي مشكلات، وتنفيذ استراتيجيات لزيادة ظهورك وحجوزاتك.",
        },
        {
          question: "ما الذي يجعل خدماتكم خاصة بشركات السياحة؟",
          answer:
            "يتمتع فريقنا بخبرة واسعة في صناعة السياحة في مصر. نحن نفهم التحديات والفرص الفريدة في هذا القطاع، بما في ذلك الموسمية، والأسواق المستهدفة، وأنماط الحجز، والمشهد التنافسي. جميع حلولنا مصممة مع مراعاة هذه الاعتبارات المحددة.",
        },
      ],
    },
  },
}

export default function ContactPage() {
  const { language, direction } = useLanguage()
  const t = translations[language]
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: direction === "rtl" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 shadow-lg border-none bg-gradient-to-br from-background to-muted">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.form.success}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.name}
                      </Label>
                      <Input id="name" required className={cn(language === "ar" ? "font-cairo" : "font-poppins")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className={cn(language === "ar" ? "font-cairo" : "font-poppins")}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.phone}
                      </Label>
                      <Input id="phone" type="tel" className={cn(language === "ar" ? "font-cairo" : "font-poppins")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.subject}
                      </Label>
                      <Input id="subject" required className={cn(language === "ar" ? "font-cairo" : "font-poppins")} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.form.message}
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      className={cn(language === "ar" ? "font-cairo" : "font-poppins")}
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    {t.form.submit}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: direction === "rtl" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 shadow-lg border-none bg-gradient-to-br from-background to-muted h-full">
              <h2 className={cn("text-xl font-bold mb-6", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.info.title}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "font-medium text-sm text-muted-foreground",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.info.address.label}
                    </h3>
                    <p className={cn("mt-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.info.address.value}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "font-medium text-sm text-muted-foreground",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.info.phone.label}
                    </h3>
                    <p className={cn("mt-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.info.phone.value}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "font-medium text-sm text-muted-foreground",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.info.email.label}
                    </h3>
                    <p className={cn("mt-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.info.email.value}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76983794954!2d31.18401455!3d30.059482450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our location"
                  className="mt-4"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className={cn("text-2xl font-bold mb-6 text-center", language === "ar" ? "font-cairo" : "font-poppins")}>
            {t.faq.title}
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={cn(language === "ar" ? "font-cairo" : "font-poppins", "text-left")}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(language === "ar" ? "font-cairo" : "font-poppins", "text-muted-foreground")}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
