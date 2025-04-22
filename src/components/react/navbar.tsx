import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from './link'
import ThemeToggle from './theme-toggle'
import MobileMenu from '../ui/mobile-menu'
import { NAV_LINKS, SITE } from '../../consts'
import { cn } from '@/lib/utils'
import debounce from 'lodash.debounce'
import Logo from '../ui/logo'

const Navbar = () => {
  const [scrollLevel, setScrollLevel] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    document.addEventListener('astro:before-swap', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('astro:before-swap', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 500) {
        setScrollLevel(4)
      } else if (scrollY > 300) {
        setScrollLevel(3)
      } else if (scrollY > 150) {
        setScrollLevel(2)
      } else if (scrollY > 0) {
        setScrollLevel(1)
      } else {
        setScrollLevel(0)
      }
    }

    const debouncedHandleScroll = debounce(handleScroll, 50)
    window.addEventListener('scroll', debouncedHandleScroll)
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('astro:before-swap', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('astro:before-swap', handleScroll)
    }
  }, [])

  const sizeVariants: Record<number, { width: string }> = {
    0: { width: '100%' },
    1: { width: '90%'},
    2: { width: '80%'},
    3: { width: '70%'},
    4: { width: '60%'},
  }

  return (
    <motion.header
      aria-label="Navigation"
      role="navigation"
      layout={!isMobile}
      initial={sizeVariants[0]}
      animate={isMobile ? sizeVariants[0] : sizeVariants[scrollLevel]}
      transition={{
        duration: isMobile ? 0 : scrollLevel === 1 ? 0 : 0.4,
        ease: 'easeInOut',
      }}
      className={cn(
        'fixed left-1/2 z-10 -translate-x-1/2 transform backdrop-blur-lg',
        'bg-background/80 border-0',
        'rounded-none shadow-none transition-all duration-300 ease-in-out',
        isScrolled && !isMobile && 'top-4',
        isScrolled && !isMobile && 'rounded-full',
        isScrolled && !isMobile && 'backdrop-blur-md',
        isScrolled && !isMobile && 'border-foreground/10',
        isScrolled && !isMobile && 'border',
        isScrolled && !isMobile && 'bg-background/80',
        isScrolled && !isMobile && 'backdrop-blur-md',
        isScrolled && !isMobile && 'max-w-[calc(100vw-5rem)]',
        isMobile && 'w-full',
        isMobile && 'top-0',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4">
        <Link
          href="/"
          className="font-custom flex shrink-0 items-center gap-2 text-xl font-bold"
          aria-label="Home"
          title="Home"
          navigation="true"
        >
          <Logo className="h-8 w-8" />
          {SITE.title}
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden items-center gap-4 text-sm sm:gap-6 md:flex" aria-label="Main navigation" role="navigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/60 hover:text-foreground/80 capitalize transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
