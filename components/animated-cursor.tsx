"use client"

import { useEffect, useState } from "react"

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true)
      }
    }

    const handleLinkHoverEnd = () => {
      setLinkHovered(false)
    }

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", updatePosition)
    document.addEventListener("mouseleave", () => setHidden(true))
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleLinkHoverStart)
    document.addEventListener("mouseout", handleLinkHoverEnd)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", updatePosition)
      document.removeEventListener("mouseleave", () => setHidden(true))
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleLinkHoverStart)
      document.removeEventListener("mouseout", handleLinkHoverEnd)
    }
  }, [])

  if (typeof window === "undefined") return null

  const cursorSize = linkHovered ? 30 : 20
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    borderWidth: clicked ? "2px" : "1px",
    opacity: hidden ? 0 : 1,
    backgroundColor: linkHovered ? "rgba(0, 0, 0, 0.2)" : "transparent",
    borderColor: "black",
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
  }

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
      <div className="pointer-events-none fixed z-50 rounded-full border" style={cursorStyle} />
    </>
  )
}

