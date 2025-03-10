"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface CharacterCardProps {
  name: string
  description: string
  imageUrl: string
}

export default function CharacterCard({ name, description, imageUrl }: CharacterCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full max-w-[250px] mx-auto"
    >
      <Card
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </motion.div>
        </div>
        <CardContent className="p-4">
          <motion.h3
            className="mb-1 text-lg font-bold"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

