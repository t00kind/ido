"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { StudioIntro } from "./studio-intro"

gsap.registerPlugin(ScrollTrigger)

const phrases = ["ПО КРАСОТЕ", "ОТ ДУШИ", "ЛУЧШЕ ВСЕХ"]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const logoTextRef = useRef<HTMLSpanElement>(null)
  const navBgRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const phraseRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const heroContentRef = useRef<HTMLDivElement>(null)
  const darkOverlayRef = useRef<HTMLDivElement>(null)
  const studioTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      })

      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      })

      // Logo movement: left to center
      gsap.to(logoRef.current, {
        left: "50%",
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top",
          scrub: true
        }
      })

      // Nav background appearance
      gsap.to(navBgRef.current, {
        opacity: 1,
        borderRadius: 24,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "15% top",
          end: "35% top",
          scrub: true
        }
      })

      // Image scale
      gsap.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "35% top",
          scrub: true
        }
      })

      // Phrase 1: visible at start, fades out
      gsap.fromTo(phraseRefs.current[0], 
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "10% top",
            end: "18% top",
            scrub: true
          }
        }
      )

      // Phrase 2: fades in then out
      gsap.fromTo(phraseRefs.current[1],
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "15% top",
            end: "22% top",
            scrub: true
          }
        }
      )
      gsap.to(phraseRefs.current[1], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "26% top",
          end: "32% top",
          scrub: true
        }
      })

      // Phrase 3: fades in and stays
      gsap.fromTo(phraseRefs.current[2],
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "30% top",
            end: "38% top",
            scrub: true
          }
        }
      )

      // Dark overlay fades in
      gsap.to(darkOverlayRef.current, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "45% top",
          end: "60% top",
          scrub: true
        }
      })

      // Hero content fades out as dark overlay appears
      gsap.to(heroContentRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "45% top",
          end: "58% top",
          scrub: true
        }
      })

      // Logo text turns white on dark background
      gsap.to(logoTextRef.current, {
        color: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "50% top",
          end: "60% top",
          scrub: true
        }
      })

      // Nav background switches to dark variant
      gsap.to(navBgRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "50% top",
          end: "60% top",
          scrub: true
        }
      })

      // Studio text fades in
      gsap.fromTo(studioTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "60% top",
            end: "75% top",
            scrub: true
          }
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-[500vh]">
      {/* Dark overlay - covers everything when scrolled */}
      <div
        ref={darkOverlayRef}
        className="fixed inset-0 z-30 pointer-events-none opacity-0"
        style={{ backgroundColor: "#0a0a0a" }}
      />

      {/* Fixed Navigation - Logo starts at left, moves to center */}
      <nav className="fixed top-6 z-50 px-6 py-3 left-8" ref={logoRef}>
        <div 
          ref={navBgRef}
          className="absolute inset-0 bg-background/70 backdrop-blur-xl border border-border/50 opacity-0"
          style={{ borderRadius: 0 }}
        />
        <span 
          ref={logoTextRef}
          className="relative text-xl font-bold tracking-tight text-foreground"
        >
          I DO
        </span>
      </nav>

      {/* Fixed Hero Content */}
      <div 
        ref={heroContentRef}
        className="fixed inset-0 flex items-start justify-center pointer-events-none pt-32 md:pt-40 z-20"
      >
        <div className="relative w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            {/* ЕСЛИ УЖ НАЧАЛ */}
            <h1 className="hero-title text-[clamp(2rem,8vw,5rem)] font-black leading-[0.9] tracking-tight text-foreground uppercase">
              ЕСЛИ УЖ НАЧАЛ
            </h1>
            
            {/* ТО ДЕЛАЙ */}
            <h2 className="hero-title text-[clamp(2rem,8vw,5rem)] font-black leading-[0.9] tracking-tight text-foreground uppercase">
              ТО ДЕЛАЙ
            </h2>

            {/* Photo Container */}
            <div 
              ref={imageRef}
              className="relative my-4 md:my-6 overflow-hidden"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Animated Phrases */}
            <div className="relative h-16 md:h-24 mt-2 w-full flex items-center justify-center">
              {phrases.map((phrase, index) => (
                <p
                  key={phrase}
                  ref={(el) => { phraseRefs.current[index] = el }}
                  className="absolute text-[clamp(2rem,8vw,5rem)] font-black leading-[0.9] tracking-tight text-foreground uppercase"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  {phrase}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Studio Intro - appears on dark background */}
      <StudioIntro ref={studioTextRef} />
    </div>
  )
}
