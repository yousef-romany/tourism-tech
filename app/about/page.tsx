"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    hero: {
      title: "About DigiTour Solutions",
      subtitle: "Empowering tourism businesses in Egypt with innovative digital solutions",
    },
    mission: {
      title: "Our Mission",
      content:
        "To transform the digital presence of tourism businesses in Egypt, helping them reach global audiences and maximize their potential through innovative technology solutions.",
    },
    vision: {
      title: "Our Vision",
      content:
        "To be the leading digital solutions provider for the tourism industry in Egypt and the Middle East, known for excellence, innovation, and customer satisfaction.",
    },
    story: {
      title: "Our Story",
      content:
        "DigiTour Solutions was founded in 2015 by a team of tech enthusiasts with a passion for tourism. Recognizing the untapped potential of Egypt's tourism industry in the digital space, we set out to bridge this gap by offering specialized tech solutions tailored to the unique needs of tourism businesses.",
      milestones: [
        {
          year: "2015",
          title: "Company Founded",
          description: "DigiTour Solutions was established in Cairo, Egypt.",
        },
        {
          year: "2017",
          title: "Platform Partnerships",
          description: "Became official partners with major global travel platforms.",
        },
        {
          year: "2019",
          title: "Mobile App Launch",
          description: "Launched our first mobile app development service for tourism businesses.",
        },
        {
          year: "2021",
          title: "Regional Expansion",
          description: "Expanded our services to cover the entire Middle East region.",
        },
        {
          year: "2023",
          title: "Innovation Award",
          description: "Received the Tourism Technology Innovation Award.",
        },
      ],
    },
    values: {
      title: "Our Core Values",
      items: [
        {
          title: "Innovation",
          description: "We constantly explore new technologies and approaches to provide cutting-edge solutions.",
        },
        {
          title: "Quality",
          description: "We are committed to delivering high-quality services that exceed expectations.",
        },
        {
          title: "Customer Focus",
          description: "We prioritize understanding and meeting the unique needs of each client.",
        },
        {
          title: "Integrity",
          description: "We operate with honesty, transparency, and ethical business practices.",
        },
        {
          title: "Collaboration",
          description: "We believe in working closely with our clients as partners in their success.",
        },
      ],
    },
    team: {
      title: "Meet Our Team",
      subtitle: "A diverse team of experts passionate about tourism and technology",
      members: [
        {
          name: "Ahmed Mahmoud",
          position: "Founder & CEO",
          bio: "With over 15 years of experience in tech and tourism, Ahmed leads our vision and strategy.",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Laila Hassan",
          position: "CTO",
          bio: "Laila oversees all technical aspects of our solutions, ensuring innovation and quality.",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Omar Saleh",
          position: "Head of Marketing",
          bio: "Omar brings creative marketing strategies to help our clients stand out in the digital space.",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Nour Ibrahim",
          position: "Client Success Manager",
          bio: "Nour ensures our clients receive exceptional support and achieve their business goals.",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
    cta: {
      title: "Ready to transform your tourism business?",
      button: "Contact Us Today",
    },
  },
  ar: {
    hero: {
      title: "عن ديجيتور سوليوشنز",
      subtitle: "تمكين شركات السياحة في مصر من خلال حلول رقمية مبتكرة",
    },
    mission: {
      title: "مهمتنا",
      content:
        "تحويل الوجود الرقمي لشركات السياحة في مصر، ومساعدتهم على الوصول إلى الجماهير العالمية وتحقيق أقصى إمكاناتهم من خلال حلول تكنولوجية مبتكرة.",
    },
    vision: {
      title: "رؤيتنا",
      content:
        "أن نكون المزود الرائد للحلول الرقمية لصناعة السياحة في مصر والشرق الأوسط، المعروف بالتميز والابتكار ورضا العملاء.",
    },
    story: {
      title: "قصتنا",
      content:
        "تأسست ديجيتور سوليوشنز في عام 2015 من قبل فريق من عشاق التكنولوجيا الذين لديهم شغف بالسياحة. إدراكًا للإمكانات غير المستغلة لصناعة السياحة المصرية في المجال الرقمي، سعينا لسد هذه الفجوة من خلال تقديم حلول تقنية متخصصة مصممة خصيصًا للاحتياجات الفريدة لشركات السياحة.",
      milestones: [
        {
          year: "2015",
          title: "تأسيس الشركة",
          description: "تأسست ديجيتور سوليوشنز في القاهرة، مصر.",
        },
        {
          year: "2017",
          title: "شراكات المنصات",
          description: "أصبحنا شركاء رسميين مع منصات السفر العالمية الرئيسية.",
        },
        {
          year: "2019",
          title: "إطلاق تطبيق الجوال",
          description: "أطلقنا أول خدمة تطوير تطبيقات الجوال لشركات السياحة.",
        },
        {
          year: "2021",
          title: "التوسع الإقليمي",
          description: "وسعنا خدماتنا لتغطية منطقة الشرق الأوسط بأكملها.",
        },
        {
          year: "2023",
          title: "جائزة الابتكار",
          description: "حصلنا على جائزة الابتكار التكنولوجي في السياحة.",
        },
      ],
    },
    values: {
      title: "قيمنا الأساسية",
      items: [
        {
          title: "الابتكار",
          description: "نستكشف باستمرار تقنيات ونهج جديدة لتقديم حلول متطورة.",
        },
        {
          title: "الجودة",
          description: "نحن ملتزمون بتقديم خدمات عالية الجودة تفوق التوقعات.",
        },
        {
          title: "التركيز على العملاء",
          description: "نعطي الأولوية لفهم وتلبية الاحتياجات الفريدة لكل عميل.",
        },
        {
          title: "النزاهة",
          description: "نعمل بصدق وشفافية وممارسات تجارية أخلاقية.",
        },
        {
          title: "التعاون",
          description: "نؤمن بالعمل عن كثب مع عملائنا كشركاء في نجاحهم.",
        },
      ],
    },
    team: {
      title: "تعرف على فريقنا",
      subtitle: "فريق متنوع من الخبراء المتحمسين للسياحة والتكنولوجيا",
      members: [
        {
          name: "أحمد محمود",
          position: "المؤسس والرئيس التنفيذي",
          bio: "مع أكثر من 15 عامًا من الخبرة في التكنولوجيا والسياحة، يقود أحمد رؤيتنا واستراتيجيتنا.",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "ليلى حسن",
          position: "المدير التقني",
          bio: "تشرف ليلى على جميع الجوانب التقنية لحلولنا، مما يضمن الابتكار والجودة.",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "عمر صالح",
          position: "رئيس التسويق",
          bio: "يجلب عمر استراتيجيات تسويقية إبداعية لمساعدة عملائنا على التميز في المجال الرقمي.",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "نور إبراهيم",
          position: "مدير نجاح العملاء",
          bio: "تضمن نور حصول عملائنا على دعم استثنائي وتحقيق أهدافهم التجارية.",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
    cta: {
      title: "هل أنت مستعد لتحويل أعمالك السياحية؟",
      button: "اتصل بنا اليوم",
    },
  },
}

export default function AboutPage() {
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted/30">
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
              {t.hero.title}
            </h1>
            <p className={cn("text-xl text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: direction === "rtl" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-gradient-to-br from-background to-muted">
                <CardContent className="p-8">
                  <h2 className={cn("text-2xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.mission.title}
                  </h2>
                  <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.mission.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: direction === "rtl" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-gradient-to-br from-background to-muted">
                <CardContent className="p-8">
                  <h2 className={cn("text-2xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.vision.title}
                  </h2>
                  <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.vision.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={cn("text-3xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.story.title}
            </h2>
            <p
              className={cn(
                "text-muted-foreground max-w-3xl mx-auto",
                language === "ar" ? "font-cairo" : "font-poppins",
              )}
            >
              {t.story.content}
            </p>
          </motion.div>

          <div className="relative mt-20">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-20">
              {t.story.milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative flex items-center",
                    index % 2 === 0 ? "justify-start md:justify-end" : "justify-start",
                    "md:w-1/2 md:ml-auto md:mr-auto",
                    index % 2 === 0 ? "md:mr-0" : "md:ml-0",
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10",
                      "flex items-center justify-center",
                    )}
                  >
                    <div className="w-3 h-3 rounded-full bg-background"></div>
                  </div>
                  <Card
                    className={cn(
                      "w-full md:w-80 border-none shadow-lg bg-gradient-to-br from-background to-muted",
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8",
                    )}
                  >
                    <CardContent className="p-6">
                      <div className="bg-primary/10 text-primary font-bold rounded-full px-3 py-1 inline-block mb-2">
                        {milestone.year}
                      </div>
                      <h3 className={cn("text-lg font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                        {milestone.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm text-muted-foreground",
                          language === "ar" ? "font-cairo" : "font-poppins",
                        )}
                      >
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={cn("text-3xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.values.title}
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {t.values.items.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {value.title}
                    </h3>
                    <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={cn("text-3xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.team.title}
            </h2>
            <p
              className={cn(
                "text-muted-foreground max-w-2xl mx-auto",
                language === "ar" ? "font-cairo" : "font-poppins",
              )}
            >
              {t.team.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {t.team.members.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={cn("text-xl font-bold mb-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                        {member.name}
                      </h3>
                      <p className={cn("text-primary text-sm mb-3", language === "ar" ? "font-cairo" : "font-poppins")}>
                        {member.position}
                      </p>
                      <p
                        className={cn(
                          "text-muted-foreground text-sm",
                          language === "ar" ? "font-cairo" : "font-poppins",
                        )}
                      >
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={cn("text-3xl font-bold mb-8", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.cta.title}
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
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
