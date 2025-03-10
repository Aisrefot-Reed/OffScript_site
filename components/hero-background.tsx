"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = clientX / window.innerWidth - 0.5
      const y = clientY / window.innerHeight - 0.5

      container.style.transform = `translate(${x * 20}px, ${y * 20}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 transition-transform duration-300 ease-out">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artwork%20%285%29-KkzQNtbiM336I3TWRjeoiRzuXcAmo4.png"
          alt="Swirling turquoise background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  )
}

