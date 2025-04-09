"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our tourism tech services",
    searchPlaceholder: "Search for questions...",
    categories: {
      all: "All Questions",
      websites: "Website Development",
      mobile: "Mobile Apps",
      platforms: "Global Platforms",
      seo: "SEO & Marketing",
      support: "Support & Maintenance",
    },
    questions: [
      {
        category: "websites",
        question: "How long does it take to develop a tourism website?",
        answer:
          "The timeline for website development varies depending on the complexity and requirements of your project. Typically, a standard tourism website takes 4-6 weeks from concept to launch, while more complex projects with booking systems and custom features may take 8-12 weeks. We provide a detailed timeline during our initial consultation based on your specific needs.",
      },
      {
        category: "websites",
        question: "Do you offer multilingual website development?",
        answer:
          "Yes, we specialize in multilingual website development, which is essential for tourism businesses in Egypt. Our websites support Arabic, English, and other languages as needed. We implement proper RTL (Right-to-Left) support for Arabic and other RTL languages, ensuring a seamless experience for all users regardless of their language preference.",
      },
      {
        category: "websites",
        question: "Can you integrate booking systems into my website?",
        answer:
          "We offer seamless integration with various booking systems and payment gateways. Whether you need a custom booking solution or integration with existing platforms like Booking.com, Expedia, or TripAdvisor, we can implement a solution that works for your business. Our booking systems include features like real-time availability, instant confirmations, and secure payment processing.",
      },
      {
        category: "mobile",
        question: "Do I need both iOS and Android apps for my tourism business?",
        answer:
          "While having both iOS and Android apps maximizes your reach, we understand budget constraints. We recommend starting with the platform most used by your target audience. For international tourists visiting Egypt, iOS often has higher usage among travelers from North America and Europe, while Android has stronger penetration in many Asian and Middle Eastern markets. We can also develop cross-platform apps using technologies like React Native to reduce costs while supporting both platforms.",
      },
      {
        category: "mobile",
        question: "Can your mobile apps work offline for tourists with limited connectivity?",
        answer:
          "Yes, we design our tourism mobile apps with offline functionality in mind, knowing that tourists may have limited connectivity while traveling in Egypt. Our apps can cache essential information like maps, tour guides, and itineraries for offline use. Once connectivity is restored, the app can sync any necessary data with your servers. This ensures tourists can access important information even in remote locations or areas with poor internet coverage.",
      },
      {
        category: "platforms",
        question: "Which global tourism platforms do you work with?",
        answer:
          "We work with all major global tourism platforms including Viator, TripAdvisor, GetYourGuide, Klook, Expedia, Booking.com, Airbnb Experiences, and more. Our team has extensive experience in setting up, optimizing, and managing listings on these platforms to maximize visibility and bookings for tourism businesses in Egypt.",
      },
      {
        category: "platforms",
        question: "How do you optimize listings on platforms like Viator and GetYourGuide?",
        answer:
          "We optimize platform listings through several strategies: 1) Compelling, keyword-rich titles and descriptions, 2) High-quality professional photos and videos, 3) Competitive pricing and availability management, 4) Strategic category selection and tagging, 5) Regular content updates based on seasonal trends, 6) Proactive review management, and 7) Data-driven adjustments based on performance analytics. We continuously monitor performance and make adjustments to improve visibility and conversion rates.",
      },
      {
        category: "seo",
        question: "How long does it take to see results from SEO efforts?",
        answer:
          "SEO is a long-term strategy that typically shows meaningful results within 3-6 months. Initial improvements may be visible within the first month, but significant ranking improvements and traffic increases usually take several months of consistent effort. For tourism businesses in Egypt, we focus on both international SEO (targeting tourists from abroad) and local SEO (targeting domestic tourists), with different timelines for each. We provide monthly reports to track progress and show the improvements over time.",
      },
      {
        category: "seo",
        question: "Do you handle social media marketing for tourism businesses?",
        answer:
          "Yes, we offer comprehensive social media marketing services tailored specifically for tourism businesses. This includes content creation, posting schedules, community management, paid advertising campaigns, influencer collaborations, and performance analytics. We focus on platforms most relevant to tourism, such as Instagram, Facebook, TikTok, and Pinterest, creating engaging visual content that showcases your tours, accommodations, or experiences to potential travelers.",
      },
      {
        category: "support",
        question: "What kind of support do you provide after launching a website or app?",
        answer:
          "We provide comprehensive post-launch support including: 1) Technical maintenance and updates, 2) Security monitoring and patches, 3) Content updates as needed, 4) Performance optimization, 5) Bug fixes and issue resolution, and 6) Training for your team. All our projects come with a standard 3-month support period, and we offer extended support packages for ongoing maintenance and updates beyond that period.",
      },
      {
        category: "support",
        question: "How quickly do you respond to technical issues or emergencies?",
        answer:
          "For critical issues that affect your business operations (like website downtime or booking system failures), we guarantee a response within 2 hours and begin working on a resolution immediately. For non-critical issues, we respond within 24 hours during business days. Our support team is available 7 days a week, recognizing that tourism is a 24/7 business. We also provide emergency contact numbers for our clients to reach us outside of regular business hours.",
      },
    ],
    notFound: "No questions found. Try a different search term.",
    stillHaveQuestions: "Still have questions?",
    contactUs: "Contact us for more information or book a free consultation to discuss your specific needs.",
    contactButton: "Contact Us",
    consultationButton: "Book Free Consultation",
  },
  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدمات تكنولوجيا السياحة لدينا",
    searchPlaceholder: "ابحث عن الأسئلة...",
    categories: {
      all: "جميع الأسئلة",
      websites: "تطوير المواقع الإلكترونية",
      mobile: "تطبيقات الجوال",
      platforms: "المنصات العالمية",
      seo: "تحسين محركات البحث والتسويق",
      support: "الدعم والصيانة",
    },
    questions: [
      {
        category: "websites",
        question: "كم من الوقت يستغرق تطوير موقع سياحي؟",
        answer:
          "يختلف الجدول الزمني لتطوير الموقع حسب تعقيد ومتطلبات مشروعك. عادةً، يستغرق موقع السياحة القياسي 4-6 أسابيع من المفهوم إلى الإطلاق، بينما قد تستغرق المشاريع الأكثر تعقيدًا مع أنظمة الحجز والميزات المخصصة 8-12 أسبوعًا. نقدم جدولًا زمنيًا مفصلاً خلال استشارتنا الأولية بناءً على احتياجاتك المحددة.",
      },
      {
        category: "websites",
        question: "هل تقدمون تطوير مواقع متعددة اللغات؟",
        answer:
          "نعم، نحن متخصصون في تطوير مواقع متعددة اللغات، وهو أمر ضروري لشركات السياحة في مصر. تدعم مواقعنا اللغة العربية والإنجليزية واللغات الأخرى حسب الحاجة. نقوم بتنفيذ دعم مناسب للغات من اليمين إلى اليسار (RTL) مثل العربية واللغات الأخرى، مما يضمن تجربة سلسة لجميع المستخدمين بغض النظر عن تفضيلاتهم اللغوية.",
      },
      {
        category: "websites",
        question: "هل يمكنكم دمج أنظمة الحجز في موقعي الإلكتروني؟",
        answer:
          "نقدم تكاملًا سلسًا مع أنظمة الحجز المختلفة وبوابات الدفع. سواء كنت بحاجة إلى حل حجز مخصص أو تكامل مع المنصات الحالية مثل Booking.com أو Expedia أو TripAdvisor، يمكننا تنفيذ حل يناسب عملك. تتضمن أنظمة الحجز لدينا ميزات مثل التوفر في الوقت الفعلي والتأكيدات الفورية ومعالجة الدفع الآمنة.",
      },
      {
        category: "mobile",
        question: "هل أحتاج إلى تطبيقات iOS و Android لأعمالي السياحية؟",
        answer:
          "في حين أن وجود تطبيقات iOS و Android يزيد من وصولك، فإننا نتفهم قيود الميزانية. نوصي بالبدء بالمنصة الأكثر استخدامًا من قبل جمهورك المستهدف. بالنسبة للسياح الدوليين الذين يزورون مصر، غالبًا ما يكون لدى iOS استخدام أعلى بين المسافرين من أمريكا الشمالية وأوروبا، بينما يتمتع Android بانتشار أقوى في العديد من الأسواق الآسيوية والشرق أوسطية. يمكننا أيضًا تطوير تطبيقات عبر المنصات باستخدام تقنيات مثل React Native لتقليل التكاليف مع دعم كلا المنصتين.",
      },
      {
        category: "mobile",
        question: "هل يمكن لتطبيقات الجوال الخاصة بكم العمل دون اتصال بالإنترنت للسياح ذوي الاتصال المحدود؟",
        answer:
          "نعم، نصمم تطبيقات الجوال السياحية لدينا مع وضع وظائف عدم الاتصال في الاعتبار، مع العلم أن السياح قد يكون لديهم اتصال محدود أثناء السفر في مصر. يمكن لتطبيقاتنا تخزين المعلومات الأساسية مثل الخرائط وأدلة الجولات وجداول الرحلات للاستخدام دون اتصال. بمجرد استعادة الاتصال، يمكن للتطبيق مزامنة أي بيانات ضرورية مع خوادمك. هذا يضمن وصول السياح إلى المعلومات المهمة حتى في المواقع النائية أو المناطق ذات تغطية الإنترنت الضعيفة.",
      },
      {
        category: "platforms",
        question: "ما هي منصات السياحة العالمية التي تعملون معها؟",
        answer:
          "نعمل مع جميع منصات السياحة العالمية الرئيسية بما في ذلك Viator و TripAdvisor و GetYourGuide و Klook و Expedia و Booking.com و Airbnb Experiences والمزيد. يتمتع فريقنا بخبرة واسعة في إعداد وتحسين وإدارة القوائم على هذه المنصات لزيادة الرؤية والحجوزات لشركات السياحة في مصر.",
      },
      {
        category: "platforms",
        question: "كيف تقومون بتحسين القوائم على منصات مثل Viator و GetYourGuide؟",
        answer:
          "نقوم بتحسين قوائم المنصات من خلال عدة استراتيجيات: 1) عناوين وأوصاف جذابة غنية بالكلمات المفتاحية، 2) صور وفيديوهات احترافية عالية الجودة، 3) إدارة الأسعار والتوفر التنافسية، 4) اختيار الفئة والعلامات الاستراتيجية، 5) تحديثات منتظمة للمحتوى بناءً على الاتجاهات الموسمية، 6) إدارة استباقية للمراجعات، و 7) تعديلات قائمة على البيانات بناءً على تحليلات الأداء. نراقب الأداء باستمرار ونجري تعديلات لتحسين الرؤية ومعدلات التحويل.",
      },
      {
        category: "seo",
        question: "كم من الوقت يستغرق رؤية نتائج من جهود تحسين محركات البحث؟",
        answer:
          "تحسين محركات البحث هو استراتيجية طويلة المدى تظهر عادة نتائج ذات معنى خلال 3-6 أشهر. قد تكون التحسينات الأولية مرئية خلال الشهر الأول، ولكن تحسينات الترتيب الكبيرة وزيادة حركة المرور عادة ما تستغرق عدة أشهر من الجهد المستمر. بالنسبة لشركات السياحة في مصر، نركز على كل من تحسين محركات البحث الدولية (التي تستهدف السياح من الخارج) وتحسين محركات البحث المحلية (التي تستهدف السياح المحليين)، مع جداول زمنية مختلفة لكل منها. نقدم تقارير شهرية لتتبع التقدم وإظهار التحسينات بمرور الوقت.",
      },
      {
        category: "seo",
        question: "هل تتعاملون مع التسويق عبر وسائل التواصل الاجتماعي لشركات السياحة؟",
        answer:
          "نعم، نقدم خدمات شاملة للتسويق عبر وسائل التواصل الاجتماعي مصممة خصيصًا لشركات السياحة. يتضمن ذلك إنشاء المحتوى، وجداول النشر، وإدارة المجتمع، وحملات الإعلانات المدفوعة، والتعاون مع المؤثرين، وتحليلات الأداء. نركز على المنصات الأكثر صلة بالسياحة، مثل Instagram و Facebook و TikTok و Pinterest، وإنشاء محتوى مرئي جذاب يعرض جولاتك أو أماكن إقامتك أو تجاربك للمسافرين المحتملين.",
      },
      {
        category: "support",
        question: "ما نوع الدعم الذي تقدمونه بعد إطلاق موقع إلكتروني أو تطبيق؟",
        answer:
          "نقدم دعمًا شاملاً بعد الإطلاق بما في ذلك: 1) الصيانة الفنية والتحديثات، 2) مراقبة الأمان والتصحيحات، 3) تحديثات المحتوى حسب الحاجة، 4) تحسين الأداء، 5) إصلاح الأخطاء وحل المشكلات، و 6) تدريب فريقك. تأتي جميع مشاريعنا مع فترة دعم قياسية مدتها 3 أشهر، ونقدم حزم دعم ممتدة للصيانة المستمرة والتحديثات بعد تلك الفترة.",
      },
      {
        category: "support",
        question: "ما مدى سرعة استجابتكم للمشكلات الفنية أو حالات الطوارئ؟",
        answer:
          "بالنسبة للمشكلات الحرجة التي تؤثر على عمليات عملك (مثل توقف الموقع الإلكتروني أو فشل نظام الحجز)، نضمن الاستجابة في غضون ساعتين ونبدأ العمل على حل فوري. بالنسبة للمشكلات غير الحرجة، نستجيب في غضون 24 ساعة خلال أيام العمل. فريق الدعم لدينا متاح 7 أيام في الأسبوع، مع الاعتراف بأن السياحة هي عمل على مدار الساعة طوال أيام الأسبوع. نقدم أيضًا أرقام اتصال للطوارئ لعملائنا للوصول إلينا خارج ساعات العمل العادية.",
      },
    ],
    notFound: "لم يتم العثور على أسئلة. جرب مصطلح بحث مختلف.",
    stillHaveQuestions: "هل لا تزال لديك أسئلة؟",
    contactUs: "اتصل بنا للحصول على مزيد من المعلومات أو احجز استشارة مجانية لمناقشة احتياجاتك المحددة.",
    contactButton: "اتصل بنا",
    consultationButton: "احجز استشارة مجانية",
  },
}

export default function FAQPage() {
  const { language, direction } = useLanguage()
  const t = translations[language]
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter questions based on search query and active category
  const filteredQuestions = t.questions.filter((q) => {
    const matchesSearch =
      searchQuery === "" ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "all" || q.category === activeCategory

    return matchesSearch && matchesCategory
  })

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

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder={t.searchPlaceholder}
              className={cn("pl-10 py-6", language === "ar" ? "font-cairo text-right" : "font-poppins")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
            <TabsList className="w-full flex flex-wrap h-auto p-1 mb-8">
              <TabsTrigger value="all" className={cn("flex-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.categories.all}
              </TabsTrigger>
              <TabsTrigger value="websites" className={cn("flex-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.categories.websites}
              </TabsTrigger>
              <TabsTrigger value="mobile" className={cn("flex-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.categories.mobile}
              </TabsTrigger>
              <TabsTrigger
                value="platforms"
                className={cn("flex-1", language === "ar" ? "font-cairo" : "font-poppins")}
              >
                {t.categories.platforms}
              </TabsTrigger>
              <TabsTrigger value="seo" className={cn("flex-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.categories.seo}
              </TabsTrigger>
              <TabsTrigger value="support" className={cn("flex-1", language === "ar" ? "font-cairo" : "font-poppins")}>
                {t.categories.support}
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              {filteredQuestions.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredQuestions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger
                        className={cn(
                          "text-left text-lg font-medium py-4",
                          language === "ar" ? "font-cairo text-right" : "font-poppins",
                        )}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        className={cn(
                          "text-muted-foreground text-base leading-relaxed",
                          language === "ar" ? "font-cairo text-right" : "font-poppins",
                        )}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {t.notFound}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Still Have Questions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-muted/30 rounded-lg text-center"
          >
            <h2 className={cn("text-2xl font-bold mb-4", language === "ar" ? "font-cairo" : "font-poppins")}>
              {t.stillHaveQuestions}
            </h2>
            <p
              className={cn(
                "text-muted-foreground mb-8 max-w-2xl mx-auto",
                language === "ar" ? "font-cairo" : "font-poppins",
              )}
            >
              {t.contactUs}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">{t.contactButton}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/consultation" className="flex items-center gap-2">
                  {t.consultationButton}
                  <ArrowRight className={cn("ml-2 h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
