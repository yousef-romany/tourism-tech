"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Globe, Menu, ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SearchBar from "@/components/search-bar";

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/portfolio", key: "nav.portfolio" },
  { href: "/clients", key: "nav.clients" },
  { href: "/blog", key: "nav.blog" },
  { href: "/contact", key: "nav.contact" },
  { href: "/faq", key: "nav.faq" },
];

export default function Navbar() {
  const { language, direction, toggleLanguage, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="bg-primary text-primary-foreground rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="24px"
              viewBox="0 0 20 24"
              version="1.1"
            >
              <g id="surface1">
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(89.803922%,62.7451%,17.254902%)",
                    fillOpacity: 1,
                  }}
                  d="M 15.046875 1.84375 C 16.570312 3.160156 17.671875 4.921875 17.8125 6.949219 C 17.964844 9.84375 16.605469 12.175781 15.046875 14.527344 C 15.011719 14.582031 14.976562 14.632812 14.9375 14.691406 C 14.5625 15.257812 14.5625 15.257812 14.402344 15.429688 C 14.3125 15.429688 14.222656 15.429688 14.128906 15.429688 C 13.953125 15.246094 13.953125 15.246094 13.753906 14.996094 C 13.464844 14.628906 13.164062 14.28125 12.84375 13.941406 C 12.460938 13.53125 12.101562 13.109375 11.746094 12.679688 C 11.582031 12.476562 11.410156 12.28125 11.234375 12.085938 C 11.007812 11.820312 11.007812 11.820312 11.007812 11.640625 C 11.066406 11.621094 11.125 11.597656 11.183594 11.578125 C 11.753906 11.371094 12.203125 11.125 12.660156 10.738281 C 12.714844 10.691406 12.773438 10.644531 12.828125 10.601562 C 13.566406 9.949219 13.976562 8.992188 14.058594 8.035156 C 14.101562 6.960938 13.796875 6.074219 13.121094 5.234375 C 13.078125 5.179688 13.035156 5.125 12.992188 5.066406 C 12.320312 4.304688 11.1875 3.847656 10.1875 3.769531 C 8.960938 3.738281 7.980469 4.058594 7.0625 4.871094 C 6.175781 5.8125 5.898438 6.90625 5.929688 8.15625 C 5.992188 9.246094 6.574219 10.117188 7.363281 10.851562 C 7.835938 11.226562 8.417969 11.449219 8.992188 11.640625 C 8.851562 11.949219 8.667969 12.164062 8.433594 12.410156 C 8.140625 12.726562 7.859375 13.046875 7.585938 13.382812 C 6.96875 14.132812 6.296875 14.839844 5.597656 15.519531 C 1.578125 9.683594 1.578125 9.683594 2.214844 6.125 C 2.59375 4.21875 3.785156 2.570312 5.378906 1.453125 C 8.398438 -0.40625 12.214844 -0.339844 15.046875 1.84375 Z M 15.046875 1.84375 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(82.745099%,52.156866%,9.411765%)",
                    fillOpacity: 1,
                  }}
                  d="M 9.910156 12.992188 C 10.671875 13.597656 11.296875 14.332031 11.941406 15.058594 C 12.148438 15.289062 12.359375 15.515625 12.570312 15.746094 C 12.882812 16.082031 13.195312 16.425781 13.5 16.773438 C 13.707031 17.003906 13.917969 17.230469 14.128906 17.457031 C 14.445312 17.800781 14.757812 18.144531 15.066406 18.492188 C 15.257812 18.707031 15.449219 18.917969 15.640625 19.128906 C 15.941406 19.453125 16.238281 19.785156 16.53125 20.113281 C 16.722656 20.328125 16.914062 20.539062 17.109375 20.75 C 17.410156 21.078125 17.707031 21.40625 18 21.738281 C 18.191406 21.953125 18.382812 22.164062 18.578125 22.375 C 18.714844 22.527344 18.851562 22.675781 18.992188 22.828125 C 19.050781 22.894531 19.113281 22.960938 19.175781 23.027344 C 19.261719 23.121094 19.261719 23.121094 19.347656 23.214844 C 19.394531 23.269531 19.445312 23.324219 19.496094 23.378906 C 19.632812 23.550781 19.632812 23.550781 19.910156 24 C 13.339844 24 6.769531 24 0 24 C 0.617188 23.1875 0.617188 23.1875 0.871094 22.925781 C 0.953125 22.84375 0.953125 22.84375 1.039062 22.753906 C 1.09375 22.699219 1.148438 22.644531 1.203125 22.585938 C 1.316406 22.46875 1.425781 22.355469 1.539062 22.238281 C 1.585938 22.191406 1.632812 22.140625 1.683594 22.089844 C 1.847656 21.925781 1.847656 21.925781 1.964844 21.691406 C 2.34375 21.34375 2.738281 21.414062 3.238281 21.421875 C 3.34375 21.421875 3.449219 21.421875 3.558594 21.421875 C 3.90625 21.421875 4.257812 21.425781 4.605469 21.429688 C 4.847656 21.429688 5.089844 21.429688 5.332031 21.429688 C 5.90625 21.433594 6.476562 21.4375 7.050781 21.441406 C 7.703125 21.445312 8.355469 21.449219 9.003906 21.449219 C 10.347656 21.457031 11.6875 21.464844 13.027344 21.472656 C 13.027344 21.058594 13.027344 20.640625 13.027344 20.210938 C 9.878906 20.210938 6.730469 20.210938 3.484375 20.210938 C 3.753906 19.816406 4.011719 19.480469 4.339844 19.140625 C 4.425781 19.050781 4.507812 18.964844 4.59375 18.875 C 4.632812 18.832031 4.675781 18.789062 4.71875 18.746094 C 4.867188 18.589844 4.867188 18.589844 4.988281 18.402344 C 5.210938 18.09375 5.378906 17.894531 5.765625 17.800781 C 6.082031 17.78125 6.390625 17.785156 6.710938 17.792969 C 6.828125 17.796875 6.941406 17.796875 7.058594 17.796875 C 7.363281 17.800781 7.667969 17.808594 7.972656 17.816406 C 8.285156 17.824219 8.59375 17.824219 8.90625 17.828125 C 9.515625 17.835938 10.125 17.851562 10.734375 17.863281 C 10.734375 17.417969 10.734375 16.972656 10.734375 16.511719 C 9.433594 16.511719 8.128906 16.511719 6.789062 16.511719 C 7.144531 16.046875 7.480469 15.621094 7.882812 15.203125 C 7.980469 15.101562 8.078125 15 8.175781 14.898438 C 8.222656 14.847656 8.265625 14.800781 8.3125 14.75 C 8.523438 14.527344 8.722656 14.300781 8.921875 14.074219 C 9.246094 13.710938 9.578125 13.351562 9.910156 12.992188 Z M 9.910156 12.992188 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(90.980393%,65.490198%,17.254902%)",
                    fillOpacity: 1,
                  }}
                  d="M 2.652344 21.519531 C 2.722656 21.519531 2.796875 21.523438 2.875 21.523438 C 2.992188 21.523438 2.992188 21.523438 3.109375 21.523438 C 3.367188 21.523438 3.625 21.527344 3.882812 21.527344 C 4.0625 21.53125 4.238281 21.53125 4.417969 21.53125 C 4.890625 21.53125 5.359375 21.535156 5.828125 21.539062 C 6.308594 21.542969 6.789062 21.542969 7.269531 21.546875 C 8.210938 21.550781 9.152344 21.554688 10.089844 21.5625 C 10.089844 22.308594 10.089844 23.050781 10.089844 23.820312 C 13 23.847656 15.90625 23.878906 18.898438 23.910156 C 18.898438 23.941406 18.898438 23.96875 18.898438 24 C 12.664062 24 6.425781 24 0 24 C 0.617188 23.1875 0.617188 23.1875 0.875 22.925781 C 0.929688 22.867188 0.984375 22.808594 1.042969 22.75 C 1.097656 22.695312 1.152344 22.636719 1.210938 22.578125 C 1.320312 22.464844 1.433594 22.347656 1.546875 22.230469 C 1.59375 22.179688 1.644531 22.128906 1.695312 22.078125 C 1.84375 21.929688 1.84375 21.929688 1.933594 21.738281 C 2.160156 21.511719 2.335938 21.519531 2.652344 21.519531 Z M 2.652344 21.519531 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(90.588236%,64.705884%,17.647059%)",
                    fillOpacity: 1,
                  }}
                  d="M 6.570312 17.792969 C 6.671875 17.796875 6.773438 17.796875 6.875 17.796875 C 7.199219 17.800781 7.519531 17.808594 7.839844 17.820312 C 8.054688 17.824219 8.273438 17.828125 8.492188 17.828125 C 9.027344 17.835938 9.558594 17.851562 10.089844 17.863281 C 10.089844 18.609375 10.089844 19.351562 10.089844 20.121094 C 11.089844 20.121094 12.089844 20.121094 13.121094 20.121094 C 13.121094 20.148438 13.121094 20.179688 13.121094 20.210938 C 9.941406 20.210938 6.761719 20.210938 3.484375 20.210938 C 3.753906 19.816406 4.011719 19.480469 4.339844 19.140625 C 4.425781 19.050781 4.507812 18.964844 4.59375 18.875 C 4.632812 18.832031 4.675781 18.789062 4.71875 18.746094 C 4.867188 18.585938 4.867188 18.585938 4.992188 18.402344 C 5.445312 17.792969 5.832031 17.765625 6.570312 17.792969 Z M 6.570312 17.792969 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(90.980393%,64.705884%,17.647059%)",
                    fillOpacity: 1,
                  }}
                  d="M 9.910156 12.992188 C 9.96875 13.023438 10.03125 13.050781 10.089844 13.082031 C 10.089844 14.183594 10.089844 15.285156 10.089844 16.421875 C 10.304688 16.421875 10.515625 16.421875 10.734375 16.421875 C 10.734375 16.449219 10.734375 16.480469 10.734375 16.511719 C 9.433594 16.511719 8.128906 16.511719 6.789062 16.511719 C 7.144531 16.046875 7.480469 15.621094 7.882812 15.203125 C 7.980469 15.101562 8.078125 15 8.175781 14.898438 C 8.222656 14.847656 8.265625 14.800781 8.3125 14.75 C 8.523438 14.527344 8.722656 14.300781 8.921875 14.074219 C 9.246094 13.710938 9.578125 13.351562 9.910156 12.992188 Z M 9.910156 12.992188 "
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(93.725491%,72.941178%,18.431373%)",
                    fillOpacity: 1,
                  }}
                  d="M 4.3125 13.445312 C 4.648438 13.738281 4.867188 14.078125 5.105469 14.453125 C 5.144531 14.507812 5.1875 14.558594 5.230469 14.617188 C 5.289062 14.617188 5.351562 14.617188 5.414062 14.617188 C 5.441406 14.824219 5.472656 15.035156 5.503906 15.25 C 5.171875 14.949219 4.941406 14.617188 4.703125 14.246094 C 4.664062 14.1875 4.625 14.128906 4.585938 14.070312 C 4.3125 13.648438 4.3125 13.648438 4.3125 13.445312 Z M 4.3125 13.445312 "
                />
              </g>
            </svg>
          </motion.div>
          <span
            className={cn(
              "font-bold text-xl",
              language === "ar" ? "font-cairo" : "font-poppins"
            )}
          >
            TripLaunch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-medium text-sm transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground",
                language === "ar" ? "font-cairo" : "font-poppins"
              )}
            >
              {t(link.key)}
              {pathname === link.href && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SearchBar />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="gap-1"
                aria-label="Select language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs font-bold">
                  {language.toUpperCase()}
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className="gap-2"
              >
                <Image
                  src="/placeholder.svg?height=20&width=30"
                  alt="English"
                  width={20}
                  height={15}
                  className="rounded-sm"
                />
                <span>English</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("ar")}
                className="gap-2"
              >
                <Image
                  src="/placeholder.svg?height=20&width=30"
                  alt="Arabic"
                  width={20}
                  height={15}
                  className="rounded-sm"
                />
                <span>العربية</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>

          <Button asChild size="sm" className="hidden md:flex gap-1">
            <Link href="/consultation">
              <Calendar className="h-4 w-4 mr-1" />
              {t("nav.consultation")}
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === "ar" ? "right" : "left"}>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground",
                      language === "ar" ? "font-cairo" : "font-poppins"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                ))}
                <Button asChild className="mt-4 gap-1">
                  <Link href="/consultation">
                    <Calendar className="h-4 w-4 mr-1" />
                    {t("nav.consultation")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
