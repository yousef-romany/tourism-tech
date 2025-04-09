"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useParams } from "next/navigation"

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPosts = {
  "1": {
    title: {
      en: "10 Tips to Optimize Your Viator Listings for Better Visibility",
      ar: "10 نصائح لتحسين قوائم Viator الخاصة بك لرؤية أفضل",
    },
    excerpt: {
      en: "Learn how to optimize your tour listings on Viator to increase visibility and bookings with these expert tips.",
      ar: "تعرف على كيفية تحسين قوائم الجولات الخاصة بك على Viator لزيادة الرؤية والحجوزات باستخدام هذه النصائح الخبيرة.",
    },
    content: {
      en: `
        <p>In today's competitive tourism market, having a presence on global platforms like Viator is essential. However, simply being listed isn't enough - you need to optimize your listings to stand out from the competition and attract more bookings.</p>
        
        <h2>Why Viator Optimization Matters</h2>
        <p>Viator is one of the world's largest online marketplaces for tours and activities, with millions of travelers searching for experiences every day. A well-optimized listing can significantly increase your visibility, click-through rates, and ultimately, your bookings.</p>
        
        <h2>1. Craft an Attention-Grabbing Title</h2>
        <p>Your title is the first thing potential customers see. Make it descriptive, include key attractions, and highlight what makes your tour unique. For example, instead of "Cairo Tour," use "Private Pyramids of Giza and Egyptian Museum Tour with Lunch."</p>
        
        <h2>2. Use High-Quality Images</h2>
        <p>Professional photos that showcase the best aspects of your tour are essential. Include images of key attractions, happy customers (with permission), and unique experiences. Ensure your main image is particularly compelling as it appears in search results.</p>
        
        <h2>3. Write Detailed Descriptions</h2>
        <p>Be comprehensive about what your tour includes. Mention specific attractions, duration, what's included (meals, transportation, etc.), and what makes your tour special. Use bullet points for easy scanning.</p>
        
        <h2>4. Highlight Unique Selling Points</h2>
        <p>What makes your tour different from competitors? Do you offer smaller groups? Special access to attractions? Local experiences that others don't provide? Make these points prominent in your description.</p>
        
        <h2>5. Optimize for Keywords</h2>
        <p>Include relevant keywords that travelers might search for, such as location names, attractions, and activities. For example: "Luxor," "Valley of the Kings," "Nile cruise," etc.</p>
        
        <h2>6. Set Competitive Pricing</h2>
        <p>Research competitor pricing and position yourself appropriately. Consider offering special rates for groups or seasonal promotions to attract more bookings during slower periods.</p>
        
        <h2>7. Encourage and Respond to Reviews</h2>
        <p>Positive reviews significantly impact booking decisions. Encourage satisfied customers to leave reviews, and always respond professionally to all feedback, both positive and negative.</p>
        
        <h2>8. Offer Flexible Booking Options</h2>
        <p>Provide different duration options, private tour alternatives, and free cancellation when possible. Flexibility is highly valued by travelers.</p>
        
        <h2>9. Update Your Calendar Regularly</h2>
        <p>Keep your availability calendar up-to-date to avoid double bookings and disappointed customers. Regular updates also signal to the Viator algorithm that your listing is active.</p>
        
        <h2>10. Analyze and Adjust</h2>
        <p>Use Viator's analytics to track which listings perform best and why. Continuously refine your approach based on this data.</p>
        
        <h2>Conclusion</h2>
        <p>Optimizing your Viator listings is an ongoing process that requires attention to detail and regular updates. By implementing these tips, you can improve your visibility, attract more customers, and increase your bookings through this powerful global platform.</p>
      `,
      ar: `
        <p>في سوق السياحة التنافسي اليوم، يعد التواجد على المنصات العالمية مثل Viator أمرًا ضروريًا. ومع ذلك، فإن مجرد الإدراج ليس كافيًا - تحتاج إلى تحسين قوائمك للتميز عن المنافسة وجذب المزيد من الحجوزات.</p>
        
        <h2>لماذا يهم تحسين Viator</h2>
        <p>Viator هي واحدة من أكبر الأسواق عبر الإنترنت للجولات والأنشطة في العالم، حيث يبحث الملايين من المسافرين عن تجارب كل يوم. يمكن أن تزيد القائمة المحسنة جيدًا بشكل كبير من ظهورك، ومعدلات النقر، وفي النهاية، حجوزاتك.</p>
        
        <h2>1. صياغة عنوان يجذب الانتباه</h2>
        <p>عنوانك هو أول شيء يراه العملاء المحتملون. اجعله وصفيًا، وقم بتضمين المعالم الرئيسية، وأبرز ما يجعل جولتك فريدة. على سبيل المثال، بدلاً من "جولة القاهرة"، استخدم "جولة خاصة لأهرامات الجيزة والمتحف المصري مع الغداء".</p>
        
        <h2>2. استخدام صور عالية الجودة</h2>
        <p>الصور الاحترافية التي تعرض أفضل جوانب جولتك ضرورية. قم بتضمين صور للمعالم الرئيسية، والعملاء السعداء (بإذن)، والتجارب الفريدة. تأكد من أن صورتك الرئيسية جذابة بشكل خاص لأنها تظهر في نتائج البحث.</p>
        
        <h2>3. كتابة أوصاف مفصلة</h2>
        <p>كن شاملاً حول ما تتضمنه جولتك. اذكر المعالم المحددة، والمدة، وما هو مشمول (الوجبات، النقل، إلخ)، وما الذي يجعل جولتك مميزة. استخدم النقاط للمسح السهل.</p>
        
        <h2>4. إبراز نقاط البيع الفريدة</h2>
        <p>ما الذي يجعل جولتك مختلفة عن المنافسين؟ هل تقدم مجموعات أصغر؟ وصول خاص إلى المعالم السياحية؟ تجارب محلية لا يقدمها الآخرون؟ اجعل هذه النقاط بارزة في وصفك.</p>
        
        <h2>5. التحسين للكلمات المفتاحية</h2>
        <p>قم بتضمين الكلمات المفتاحية ذات الصلة التي قد يبحث عنها المسافرون، مثل أسماء المواقع والمعالم والأنشطة. على سبيل المثال: "الأقصر"، "وادي الملوك"، "رحلة نيلية"، إلخ.</p>
        
        <h2>6. تحديد أسعار تنافسية</h2>
        <p>ابحث في أسعار المنافسين وضع نفسك بشكل مناسب. فكر في تقديم أسعار خاصة للمجموعات أو عروض موسمية لجذب المزيد من الحجوزات خلال الفترات الأبطأ.</p>
        
        <h2>7. تشجيع المراجعات والرد عليها</h2>
        <p>المراجعات الإيجابية تؤثر بشكل كبير على قرارات الحجز. شجع العملاء الراضين على ترك مراجعات، ودائمًا الرد بشكل احترافي على جميع الملاحظات، الإيجابية والسلبية.</p>
        
        <h2>8. تقديم خيارات حجز مرنة</h2>
        <p>قدم خيارات مدة مختلفة، وبدائل جولة خاصة، وإلغاء مجاني عندما يكون ذلك ممكنًا. المرونة مقدرة بشكل كبير من قبل المسافرين.</p>
        
        <h2>9. تحديث تقويمك بانتظام</h2>
        <p>حافظ على تحديث تقويم توفرك لتجنب الحجوزات المزدوجة والعملاء المحبطين. التحديثات المنتظمة تشير أيضًا إلى خوارزمية Viator أن قائمتك نشطة.</p>
        
        <h2>10. التحليل والتعديل</h2>
        <p>استخدم تحليلات Viator لتتبع القوائم التي تؤدي أفضل وسبب ذلك. قم بتحسين نهجك باستمرار بناءً على هذه البيانات.</p>
        
        <h2>الخلاصة</h2>
        <p>تحسين قوائم Viator الخاصة بك هي عملية مستمرة تتطلب الاهتمام بالتفاصيل والتحديثات المنتظمة. من خلال تنفيذ هذه النصائح، يمكنك تحسين ظهورك، وجذب المزيد من العملاء، وزيادة حجوزاتك من خلال هذه المنصة العالمية القوية.</p>
      `,
    },
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-10-15",
    author: {
      en: "Ahmed Ibrahim",
      ar: "أحمد إبراهيم",
    },
    category: "tips",
    tags: ["Viator", "SEO", "Tourism Marketing", "Online Bookings"],
    relatedPosts: [2, 4, 5],
  },
  "2": {
    title: {
      en: "The Rise of Experiential Tourism in Egypt: What You Need to Know",
      ar: "صعود السياحة التجريبية في مصر: ما تحتاج إلى معرفته",
    },
    excerpt: {
      en: "Explore the growing trend of experiential tourism in Egypt and how tourism businesses can adapt to meet changing traveler preferences.",
      ar: "استكشف الاتجاه المتزايد للسياحة التجريبية في مصر وكيف يمكن لشركات السياحة التكيف لتلبية تفضيلات المسافرين المتغيرة.",
    },
    content: {
      en: `
        <p>The tourism landscape in Egypt is evolving rapidly, with travelers increasingly seeking authentic, immersive experiences rather than traditional sightseeing tours. This shift towards experiential tourism presents both challenges and opportunities for tourism businesses in Egypt.</p>
        
        <h2>What is Experiential Tourism?</h2>
        <p>Experiential tourism focuses on immersing travelers in local cultures, traditions, and lifestyles. Rather than simply observing attractions, visitors participate in activities that create meaningful connections with the destination. This might include cooking classes with local chefs, homestays with Egyptian families, artisan workshops, or community-based tourism initiatives.</p>
        
        <h2>Why the Shift Towards Experiential Tourism?</h2>
        <p>Several factors are driving this trend:</p>
        <ul>
          <li>Social media influence and the desire for unique, shareable experiences</li>
          <li>Growing interest in authentic cultural exchanges</li>
          <li>Increased environmental and social consciousness among travelers</li>
          <li>Desire to "live like a local" rather than feel like a tourist</li>
          <li>Search for personal growth and transformation through travel</li>
        </ul>
        
        <h2>Opportunities for Egyptian Tourism Businesses</h2>
        <p>This shift creates numerous opportunities for tourism businesses willing to adapt:</p>
        <ul>
          <li>Higher profit margins for unique, specialized experiences</li>
          <li>Reduced seasonality by offering year-round cultural experiences</li>
          <li>Stronger differentiation from competitors</li>
          <li>More meaningful connections with guests, leading to loyalty and referrals</li>
          <li>Preservation and celebration of local traditions and heritage</li>
        </ul>
        
        <h2>Successful Experiential Tourism Examples in Egypt</h2>
        <p>Several Egyptian businesses are already successfully embracing experiential tourism:</p>
        <ul>
          <li>Cooking classes in Cairo homes, teaching traditional Egyptian recipes</li>
          <li>Nubian village homestays near Aswan</li>
          <li>Artisan workshops teaching traditional crafts in Luxor</li>
          <li>Desert camping with Bedouin guides in the Western Desert</li>
          <li>Sustainable farming experiences in the Fayoum Oasis</li>
        </ul>
        
        <h2>How to Adapt Your Tourism Business</h2>
        <p>To capitalize on this trend, consider these strategies:</p>
        <ol>
          <li><strong>Identify Authentic Local Experiences:</strong> Look for unique cultural elements, traditions, or skills in your area that could interest visitors.</li>
          <li><strong>Partner with Local Communities:</strong> Build relationships with local artisans, families, and cultural practitioners who can provide authentic experiences.</li>
          <li><strong>Develop Storytelling Skills:</strong> Experiential tourism is about the narrative. Train guides to be storytellers who can share the cultural context and significance of experiences.</li>
          <li><strong>Embrace Technology:</strong> Use digital platforms to showcase your experiential offerings through compelling videos and images.</li>
          <li><strong>Prioritize Sustainability:</strong> Ensure your experiences respect and benefit local communities and environments.</li>
        </ol>
        
        <h2>Marketing Experiential Tourism</h2>
        <p>Effectively marketing experiential tourism requires a different approach:</p>
        <ul>
          <li>Focus on emotional storytelling rather than listing attractions</li>
          <li>Use high-quality visual content showing people engaged in experiences</li>
          <li>Leverage user-generated content from past participants</li>
          <li>Highlight the unique, exclusive nature of your offerings</li>
          <li>Emphasize connections with local people and culture</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The rise of experiential tourism in Egypt represents a significant opportunity for tourism businesses willing to innovate and adapt. By focusing on authentic, immersive experiences that connect travelers with local cultures and communities, businesses can differentiate themselves in a competitive market while contributing to sustainable tourism development in Egypt.</p>
      `,
      ar: `
        <p>يتطور المشهد السياحي في مصر بسرعة، حيث يسعى المسافرون بشكل متزايد إلى تجارب أصيلة وغامرة بدلاً من جولات مشاهدة المعالم التقليدية. يقدم هذا التحول نحو السياحة التجريبية تحديات وفرصًا لشركات السياحة في مصر.</p>
        
        <h2>ما هي السياحة التجريبية؟</h2>
        <p>تركز السياحة التجريبية على غمر المسافرين في الثقافات والتقاليد وأنماط الحياة المحلية. بدلاً من مجرد مراقبة المعالم السياحية، يشارك الزوار في أنشطة تخلق روابط ذات معنى مع الوجهة. قد يشمل ذلك دروس الطبخ مع الطهاة المحليين، والإقامة مع العائلات المصرية، وورش عمل الحرفيين، أو مبادرات السياحة المجتمعية.</p>
        
        <h2>لماذا التحول نحو السياحة التجريبية؟</h2>
        <p>هناك عدة عوامل تدفع هذا الاتجاه:</p>
        <ul>
          <li>تأثير وسائل التواصل الاجتماعي والرغبة في تجارب فريدة وقابلة للمشاركة</li>
          <li>الاهتمام المتزايد بالتبادلات الثقافية الأصيلة</li>
          <li>زيادة الوعي البيئي والاجتماعي بين المسافرين</li>
          <li>الرغبة في "العيش مثل السكان المحليين" بدلاً من الشعور كسائح</li>
          <li>البحث عن النمو الشخصي والتحول من خلال السفر</li>
        </ul>
        
        <h2>فرص لشركات السياحة المصرية</h2>
        <p>يخلق هذا التحول العديد من الفرص للشركات السياحية المستعدة للتكيف:</p>
        <ul>
          <li>هوامش ربح أعلى للتجارب الفريدة والمتخصصة</li>
          <li>تقليل الموسمية من خلال تقديم تجارب ثقافية على مدار العام</li>
          <li>تمييز أقوى عن المنافسين</li>
          <li>روابط أكثر معنى مع الضيوف، مما يؤدي إلى الولاء والإحالات</li>
          <li>الحفاظ على التقاليد والتراث المحلي والاحتفال بها</li>
        </ul>
        
        <h2>أمثلة ناجحة للسياحة التجريبية في مصر</h2>
        <p>العديد من الشركات المصرية تتبنى بالفعل السياحة التجريبية بنجاح:</p>
        <ul>
          <li>دروس الطبخ في منازل القاهرة، لتعليم وصفات مصرية تقليدية</li>
          <li>الإقامة في القرى النوبية بالقرب من أسوان</li>
          <li>ورش عمل الحرفيين لتعليم الحرف التقليدية في الأقصر</li>
          <li>التخييم في الصحراء مع مرشدين بدو في الصحراء الغربية</li>
          <li>تجارب الزراعة المستدامة في واحة الفيوم</li>
        </ul>
        
        <h2>كيفية تكييف أعمالك السياحية</h2>
        <p>للاستفادة من هذا الاتجاه، ضع في اعتبارك هذه الاستراتيجيات:</p>
        <ol>
          <li><strong>تحديد التجارب المحلية الأصيلة:</strong> ابحث عن العناصر الثقافية الفريدة أو التقاليد أو المهارات في منطقتك التي قد تهم الزوار.</li>
          <li><strong>الشراكة مع المجتمعات المحلية:</strong> بناء علاقات مع الحرفيين المحليين والعائلات والممارسين الثقافيين الذين يمكنهم تقديم تجارب أصيلة.</li>
          <li><strong>تطوير مهارات سرد القصص:</strong> السياحة التجريبية تتعلق بالسرد. تدريب المرشدين ليكونوا رواة قصص يمكنهم مشاركة السياق الثقافي وأهمية التجارب.</li>
          <li><strong>تبني التكنولوجيا:</strong> استخدام المنصات الرقمية لعرض عروضك التجريبية من خلال مقاطع فيديو وصور مقنعة.</li>
          <li><strong>إعطاء الأولوية للاستدامة:</strong> ضمان احترام تجاربك للمجتمعات والبيئات المحلية وإفادتها.</li>
        </ol>
        
        <h2>تسويق السياحة التجريبية</h2>
        <p>يتطلب تسويق السياحة التجريبية بشكل فعال نهجًا مختلفًا:</p>
        <ul>
          <li>التركيز على سرد القصص العاطفية بدلاً من سرد المعالم السياحية</li>
          <li>استخدام محتوى مرئي عالي الجودة يظهر الأشخاص المشاركين في التجارب</li>
          <li>الاستفادة من المحتوى الذي ينشئه المستخدمون من المشاركين السابقين</li>
          <li>تسليط الضوء على الطبيعة الفريدة والحصرية لعروضك</li>
          <li>التأكيد على الروابط مع السكان المحليين والثقافة</li>
        </ul>
        
        <h2>الخلاصة</h2>
        <p>يمثل صعود السياحة التجريبية في مصر فرصة كبيرة للشركات السياحية المستعدة للابتكار والتكيف. من خلال التركيز على التجارب الأصيلة والغامرة التي تربط المسافرين بالثقافات والمجتمعات المحلية، يمكن للشركات أن تميز نفسها في سوق تنافسية مع المساهمة في تنمية السياحة المستدامة في مصر.</p>
      `,
    },
    image: "/placeholder.svg?height=600&width=1200",
    date: "2023-09-28",
    author: {
      en: "Laila Hassan",
      ar: "ليلى حسن",
    },
    category: "trends",
    tags: ["Experiential Tourism", "Cultural Tourism", "Tourism Trends", "Egypt Tourism"],
    relatedPosts: [1, 3, 6],
  },
}

export default function BlogPostPage() {
  const { language, direction } = useLanguage()
  const params = useParams()
  const postId = params.id as string

  // Get the post data based on the ID
  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 container">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Button asChild className="mt-4">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className={cn("h-4 w-4", direction === "rtl" ? "rotate-180" : "")} />
                <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                  {language === "en" ? "Back to Blog" : "العودة إلى المدونة"}
                </span>
              </Link>
            </Button>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title[language]}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{tag}</span>
                </div>
              ))}
            </div>

            <h1
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
                language === "ar" ? "font-cairo" : "font-poppins",
              )}
            >
              {post.title[language]}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{post.author[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>{formatDate(post.date)}</span>
              </div>
            </div>

            <div
              className={cn(
                "prose dark:prose-invert max-w-none mb-12",
                language === "ar" ? "font-cairo text-right" : "font-poppins",
              )}
              dangerouslySetInnerHTML={{ __html: post.content[language] }}
            />

            <div className="border-t border-border pt-8 mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className={cn("font-bold mb-2", language === "ar" ? "font-cairo" : "font-poppins")}>
                    {language === "en" ? "Share this article" : "شارك هذا المقال"}
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/consultation" className="flex items-center gap-2">
                    <span className={cn(language === "ar" ? "font-cairo" : "font-poppins")}>
                      {language === "en" ? "Book a Free Consultation" : "احجز استشارة مجانية"}
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className={cn("text-2xl font-bold mb-8", language === "ar" ? "font-cairo" : "font-poppins")}>
                {language === "en" ? "Related Articles" : "مقالات ذات صلة"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedId) => {
                  const relatedPost = blogPosts[relatedId as keyof typeof blogPosts]
                  if (!relatedPost) return null

                  return (
                    <Card
                      key={relatedId}
                      className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title[language]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3
                          className={cn(
                            "font-bold mb-2 line-clamp-2",
                            language === "ar" ? "font-cairo" : "font-poppins",
                          )}
                        >
                          {relatedPost.title[language]}
                        </h3>
                        <Button asChild variant="link" className="p-0">
                          <Link href={`/blog/${relatedId}`}>{language === "en" ? "Read More" : "اقرأ المزيد"}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
