"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

const translations = {
  en: {
    placeholder: "Search for services, projects, blog posts...",
    noResults: "No results found",
    categories: {
      services: "Services",
      projects: "Projects",
      blog: "Blog Posts",
    },
  },
  ar: {
    placeholder: "ابحث عن الخدمات والمشاريع ومنشورات المدونة...",
    noResults: "لم يتم العثور على نتائج",
    categories: {
      services: "الخدمات",
      projects: "المشاريع",
      blog: "منشورات المدونة",
    },
  },
}

// Mock search data - in a real app, this would come from an API
const searchData = {
  services: [
    {
      id: "website-dev",
      title: {
        en: "Website Development",
        ar: "تطوير المواقع الإلكترونية",
      },
      url: "/services#website-development",
      keywords: ["website", "web development", "tourism website", "responsive", "multilingual"],
    },
    {
      id: "mobile-app",
      title: {
        en: "Mobile App Development",
        ar: "تطوير تطبيقات الجوال",
      },
      url: "/services#mobile-app-development",
      keywords: ["mobile", "app", "ios", "android", "offline", "tourism app"],
    },
    {
      id: "platform-management",
      title: {
        en: "Global Platform Management",
        ar: "إدارة المنصات العالمية",
      },
      url: "/services#platform-management",
      keywords: ["viator", "tripadvisor", "getyourguide", "booking", "platforms", "listings"],
    },
  ],
  projects: [
    {
      id: "cairo-excursions",
      title: {
        en: "Cairo Excursions Website",
        ar: "موقع رحلات القاهرة",
      },
      url: "/portfolio#cairo-excursions",
      keywords: ["cairo", "tours", "website", "booking system", "multilingual"],
    },
    {
      id: "red-sea-app",
      title: {
        en: "Red Sea Adventures Mobile App",
        ar: "تطبيق مغامرات البحر الأحمر",
      },
      url: "/portfolio#red-sea-adventures",
      keywords: ["red sea", "diving", "mobile app", "offline", "booking"],
    },
  ],
  blog: [
    {
      id: "1",
      title: {
        en: "10 Tips to Optimize Your Viator Listings",
        ar: "10 نصائح لتحسين قوائم Viator الخاصة بك",
      },
      url: "/blog/1",
      keywords: ["viator", "optimization", "listings", "tourism marketing", "seo"],
    },
    {
      id: "2",
      title: {
        en: "The Rise of Experiential Tourism in Egypt",
        ar: "صعود السياحة التجريبية في مصر",
      },
      url: "/blog/2",
      keywords: ["experiential tourism", "egypt", "trends", "tourism marketing"],
    },
  ],
}

export default function SearchBar() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any>({
    services: [],
    projects: [],
    blog: [],
  })

  useEffect(() => {
    if (query.length < 2) {
      setResults({
        services: [],
        projects: [],
        blog: [],
      })
      return
    }

    const lowerQuery = query.toLowerCase()

    // Search through each category
    const filteredServices = searchData.services.filter(
      (service) =>
        service.title[language].toLowerCase().includes(lowerQuery) ||
        service.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)),
    )

    const filteredProjects = searchData.projects.filter(
      (project) =>
        project.title[language].toLowerCase().includes(lowerQuery) ||
        project.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)),
    )

    const filteredBlog = searchData.blog.filter(
      (post) =>
        post.title[language].toLowerCase().includes(lowerQuery) ||
        post.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)),
    )

    setResults({
      services: filteredServices,
      projects: filteredProjects,
      blog: filteredBlog,
    })
  }, [query, language])

  const hasResults = results.services.length > 0 || results.projects.length > 0 || results.blog.length > 0

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setIsOpen(true)}
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="bg-background border border-border rounded-lg shadow-lg w-full max-w-2xl overflow-hidden"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder={t.placeholder}
                  className={cn(
                    "pl-12 pr-12 py-6 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0",
                    language === "ar" ? "font-cairo text-right" : "font-poppins",
                  )}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4">
                {query.length >= 2 && !hasResults && (
                  <div className="text-center py-8">
                    <p className={cn("text-muted-foreground", language === "ar" ? "font-cairo" : "font-poppins")}>
                      {t.noResults}
                    </p>
                  </div>
                )}

                {results.services.length > 0 && (
                  <div className="mb-6">
                    <h3
                      className={cn(
                        "text-sm font-medium text-muted-foreground mb-2",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.categories.services}
                    </h3>
                    <ul className="space-y-2">
                      {results.services.map((service: any) => (
                        <li key={service.id}>
                          <Link
                            href={service.url}
                            className="block p-2 hover:bg-muted rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className={cn("font-medium", language === "ar" ? "font-cairo" : "font-poppins")}>
                              {service.title[language]}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {results.projects.length > 0 && (
                  <div className="mb-6">
                    <h3
                      className={cn(
                        "text-sm font-medium text-muted-foreground mb-2",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.categories.projects}
                    </h3>
                    <ul className="space-y-2">
                      {results.projects.map((project: any) => (
                        <li key={project.id}>
                          <Link
                            href={project.url}
                            className="block p-2 hover:bg-muted rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className={cn("font-medium", language === "ar" ? "font-cairo" : "font-poppins")}>
                              {project.title[language]}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {results.blog.length > 0 && (
                  <div>
                    <h3
                      className={cn(
                        "text-sm font-medium text-muted-foreground mb-2",
                        language === "ar" ? "font-cairo" : "font-poppins",
                      )}
                    >
                      {t.categories.blog}
                    </h3>
                    <ul className="space-y-2">
                      {results.blog.map((post: any) => (
                        <li key={post.id}>
                          <Link
                            href={post.url}
                            className="block p-2 hover:bg-muted rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className={cn("font-medium", language === "ar" ? "font-cairo" : "font-poppins")}>
                              {post.title[language]}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
