import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  language?: string
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  className,
  titleClassName,
  subtitleClassName,
  language = "en",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          language === "ar" ? "font-cairo" : "font-poppins",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground max-w-3xl",
            center && "mx-auto",
            language === "ar" ? "font-cairo" : "font-poppins",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
