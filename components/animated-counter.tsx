"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
