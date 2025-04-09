"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

const translations = {
  en: {
    title: "Book Your Free Consultation",
    subtitle: "Get expert advice on how to improve your tourism business's digital presence",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      website: "Current Website (if any)",
      service: "Service of Interest",
      services: {
        website: "Website Development",
        mobile: "Mobile App Development",
        platforms: "Global Platform Management",
        seo: "SEO & Marketing",
        social: "Social Media Management",
        media: "Photography & Videography",
        reporting: "Analytics & Reporting",
        other: "Other",
      },
      date: "Preferred Date",
      time: "Preferred Time",
      times: {
        morning: "Morning (9AM - 12PM)",
        afternoon: "Afternoon (12PM - 3PM)",
        evening: "Evening (3PM - 6PM)",
      },
      message: "Additional Information",
      submit: "Book Consultation",
      success: "Your consultation has been booked successfully!",
      successMessage: "We'll contact you shortly to confirm your appointment.",
    },
    benefits: {
      title: "Why Book a Free Consultation?",
      items: [
        {
          title: "Expert Advice",
          description: "Get personalized recommendations from tourism tech specialists",
        },
        {
          title: "No Obligation",
          description: "Free consultation with no commitment required",
        },
        {
          title: "Custom Solutions",
          description: "Discover tailored digital solutions for your specific needs",
        },
        {
          title: "Cost Estimates",
          description: "Receive transparent pricing information for your project",
        },
      ],
    },
  },
  ar: {
    title: "احجز استشارتك المجانية",
    subtitle: "احصل على نصائح خبراء حول كيفية تحسين الوجود الرقمي لأعمالك السياحية",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      website: "الموقع الإلكتروني الحالي (إن وجد)",
      service: "الخدمة المطلوبة",
      services: {
        website: "تطوير المواقع الإلكترونية",
        mobile: "تطوير تطبيقات الجوال",
        platforms: "إدارة المنصات العالمية",
        seo: "تحسين محركات البحث والتسويق",
        social: "إدارة وسائل التواصل الاجتماعي",
        media: "التصوير الفوتوغرافي والفيديو",
        reporting: "التحليلات والتقارير",
        other: "أخرى",
      },
      date: "التاريخ المفضل",
      time: "الوقت المفضل",
      times: {
        morning: "صباحًا (9 صباحًا - 12 ظهرًا)",
        afternoon: "ظهرًا (12 ظهرًا - 3 مساءً)",
        evening: "مساءً (3 مساءً - 6 مساءً)",
      },
      message: "معلومات إضافية",
      submit: "حجز استشارة",
      success: "تم حجز استشارتك بنجاح!",
      successMessage: "سنتصل بك قريبًا لتأكيد موعدك.",
    },
    benefits: {
      title: "لماذا تحجز استشارة مجانية؟",
      items: [
        {
          title: "نصائح خبراء",
          description: "احصل على توصيات مخصصة من متخصصي تكنولوجيا السياحة",
        },
        {
          title: "بدون التزام",
          description: "استشارة مجانية بدون الحاجة إلى التزام",
        },
        {
          title: "حلول مخصصة",
          description: "اكتشف حلولًا رقمية مخصصة لاحتياجاتك المحددة",
        },
        {
          title: "تقديرات التكلفة",
          description: "احصل على معلومات شفافة عن الأسعار لمشروعك",
        },
      ],
    },
  },
}

export default function ConsultationPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-full mb-6">
                      <CheckCircle className="h-12 w-12" />
                    </div>
                    <h3 className={cn("text-2xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.form.success}
                    </h3>
                    <p
                      className={cn(
                        "text-muted-foreground max-w-md",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.form.successMessage}
                    </p>
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
                        <Input
                          id="phone"
                          type="tel"
                          className={cn(language === "ar" ? "font-cairo" : "font-poppins")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                          {t.form.company}
                        </Label>
                        <Input id="company" className={cn(language === "ar" ? "font-cairo" : "font-poppins")} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.website}
                      </Label>
                      <Input
                        id="website"
                        type="url"
                        className={cn(language === "ar" ? "font-cairo" : "font-poppins")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.service}
                      </Label>
                      <Select>
                        <SelectTrigger className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                          <SelectValue placeholder={t.form.service} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">{t.form.services.website}</SelectItem>
                          <SelectItem value="mobile">{t.form.services.mobile}</SelectItem>
                          <SelectItem value="platforms">{t.form.services.platforms}</SelectItem>
                          <SelectItem value="seo">{t.form.services.seo}</SelectItem>
                          <SelectItem value="social">{t.form.services.social}</SelectItem>
                          <SelectItem value="media">{t.form.services.media}</SelectItem>
                          <SelectItem value="reporting">{t.form.services.reporting}</SelectItem>
                          <SelectItem value="other">{t.form.services.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                          {t.form.date}
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground",
                                language === "ar" ? "font-cairo" : "font-poppins",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP", {
                                  locale: language === "ar" ? ar : undefined,
                                })
                              ) : (
                                <span>{t.form.date}</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                          {t.form.time}
                        </Label>
                        <Select>
                          <SelectTrigger className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                            <SelectValue placeholder={t.form.time} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{t.form.times.morning}</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="afternoon">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{t.form.times.afternoon}</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="evening">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{t.form.times.evening}</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                        {t.form.message}
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        className={cn(language === "ar" ? "font-cairo" : "font-poppins")}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      {t.form.submit}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted h-full">
              <CardContent className="p-6">
                <h3 className={cn("text-xl font-bold mb-6", language === "ar" ? "font-cairo" : "font-poppins")}>
                  {t.benefits.title}
                </h3>

                <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                  {t.benefits.items.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className={cn("font-bold mb-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                          {item.title}
                        </h4>
                        <p
                          className={cn(
                            "text-sm text-muted-foreground",
                            language === "ar" ? "font-cairo" : "font-poppins",
                          )}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className={cn("text-sm text-center", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {language === "en"
                      ? "Our consultations are completely free and come with no obligation. We're here to help you understand how digital solutions can transform your tourism business."
                      : "استشاراتنا مجانية تمامًا وتأتي بدون أي التزام. نحن هنا لمساعدتك على فهم كيف يمكن للحلول الرقمية أن تحول أعمالك السياحية."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
