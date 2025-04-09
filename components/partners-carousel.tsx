"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Viator", logo: "/placeholder-logo.svg" },
  { name: "TripAdvisor", logo: "/placeholder-logo.svg" },
  { name: "GetYourGuide", logo: "/placeholder-logo.svg" },
  { name: "Klook", logo: "/placeholder-logo.svg" },
  { name: "TourHQ", logo: "/placeholder-logo.svg" },
  { name: "Cairo Tours", logo: "/placeholder-logo.svg" },
  { name: "Alexandria Travel", logo: "/placeholder-logo.svg" },
  { name: "Red Sea Adventures", logo: "/placeholder-logo.svg" },
]

export default function PartnersCarousel() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev - 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Create a duplicated array for infinite scrolling effect
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-8 items-center"
        style={{
          x: position % (partners.length * 200), // Adjust based on logo width + gap
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] h-[80px] bg-muted/30 rounded-lg flex items-center justify-center p-4 hover:bg-muted/50 transition-colors"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
