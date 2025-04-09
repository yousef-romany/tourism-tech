"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    title: "Request a Service",
    subtitle: "Tell us about your project and we'll get back to you within 24 hours",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      website: "Current Website (if any)",
      projectType: "Project Type",
      projectTypes: {
        website: "Website Development",
        mobile: "Mobile App Development",
        platforms: "Global Platform Management",
        seo: "SEO & Marketing",
        social: "Social Media Management",
        media: "Photography & Videography",
        other: "Other",
      },
      budget: "Estimated Budget",
      budgets: {
        small: "Less than $5,000",
        medium: "$5,000 - $10,000",
        large: "$10,000 - $20,000",
        enterprise: "More than $20,000",
      },
      timeline: "Project Timeline",
      timelines: {
        urgent: "Urgent (ASAP)",
        short: "1-2 Months",
        medium: "3-6 Months",
        flexible: "Flexible",
      },
      description: "Project Description",
      descriptionPlaceholder: "Tell us about your project requirements, goals, and any specific features you need...",
      submit: "Submit Request",
      success: "Your request has been submitted!",
      successMessage: "We'll contact you shortly to discuss your project.",
    },
  },
  ar: {
    title: "طلب خدمة",
    subtitle: "أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      website: "الموقع الإلكتروني الحالي (إن وجد)",
      projectType: "نوع المشروع",
      projectTypes: {
        website: "تطوير المواقع الإلكترونية",
        mobile: "تطوير تطبيقات الجوال",
        platforms: "إدارة المنصات العالمية",
        seo: "تحسين محركات البحث والتسويق",
        social: "إدارة وسائل التواصل الاجتماعي",
        media: "التصوير الفوتوغرافي والفيديو",
        other: "أخرى",
      },
      budget: "الميزانية التقديرية",
      budgets: {
        small: "أقل من 5,000 دولار",
        medium: "5,000 - 10,000 دولار",
        large: "10,000 - 20,000 دولار",
        enterprise: "أكثر من 20,000 دولار",
      },
      timeline: "الجدول الزمني للمشروع",
      timelines: {
        urgent: "عاجل (في أسرع وقت ممكن)",
        short: "1-2 أشهر",
        medium: "3-6 أشهر",
        flexible: "مرن",
      },
      description: "وصف المشروع",
      descriptionPlaceholder: "أخبرنا عن متطلبات مشروعك وأهدافه وأي ميزات محددة تحتاجها...",
      submit: "إرسال الطلب",
      success: "تم إرسال طلبك!",
      successMessage: "سنتصل بك قريبًا لمناقشة مشروعك.",
    },
  },
}

export default function ServiceRequestForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
  }

  return (
    <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted">
      <CardHeader>
        <CardTitle className={cn("text-2xl", language === "ar" ? "font-cairo" : "font-poppins")}>{t.title}</CardTitle>
        <CardDescription className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
          {t.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-full mb-6">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h3 className={cn("text-2xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.form.success}
            </h3>
            <p className={cn("text-muted-foreground max-w-md", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.form.successMessage}
            </p>
          </motion.div>
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
              <Input id="website" type="url" className={cn(language === "ar" ? "font-cairo" : "font-poppins")} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectType" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                  {t.form.projectType}
                </Label>
                <Select required>
                  <SelectTrigger className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                    <SelectValue placeholder={t.form.projectType} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">{t.form.projectTypes.website}</SelectItem>
                    <SelectItem value="mobile">{t.form.projectTypes.mobile}</SelectItem>
                    <SelectItem value="platforms">{t.form.projectTypes.platforms}</SelectItem>
                    <SelectItem value="seo">{t.form.projectTypes.seo}</SelectItem>
                    <SelectItem value="social">{t.form.projectTypes.social}</SelectItem>
                    <SelectItem value="media">{t.form.projectTypes.media}</SelectItem>
                    <SelectItem value="other">{t.form.projectTypes.other}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                  {t.form.budget}
                </Label>
                <Select>
                  <SelectTrigger className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                    <SelectValue placeholder={t.form.budget} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">{t.form.budgets.small}</SelectItem>
                    <SelectItem value="medium">{t.form.budgets.medium}</SelectItem>
                    <SelectItem value="large">{t.form.budgets.large}</SelectItem>
                    <SelectItem value="enterprise">{t.form.budgets.enterprise}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                  {t.form.timeline}
                </Label>
                <Select>
                  <SelectTrigger className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                    <SelectValue placeholder={t.form.timeline} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">{t.form.timelines.urgent}</SelectItem>
                    <SelectItem value="short">{t.form.timelines.short}</SelectItem>
                    <SelectItem value="medium">{t.form.timelines.medium}</SelectItem>
                    <SelectItem value="flexible">{t.form.timelines.flexible}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.form.description}
              </Label>
              <Textarea
                id="description"
                rows={5}
                placeholder={t.form.descriptionPlaceholder}
                required
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
  )
}
