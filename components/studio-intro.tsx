"use client"

import { forwardRef } from "react"

export const StudioIntro = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none px-6 opacity-0"
    >
      <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Brand name */}
        <h1
          className="text-[clamp(4rem,16vw,12rem)] font-black leading-[0.9] tracking-tight uppercase"
          style={{ color: "#ffffff" }}
        >
          I DO
        </h1>

        {/* Studio descriptor */}
        <p
          className="mt-4 md:mt-6 text-sm md:text-base font-medium tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Студия маркетинга и разработки
        </p>

        {/* Subtitle */}
        <p
          className="mt-8 md:mt-10 text-base md:text-lg lg:text-xl font-medium tracking-tight text-pretty"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Для тех, кто выбирает лучшее
        </p>
      </div>
    </div>
  )
})

StudioIntro.displayName = "StudioIntro"
