"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Modal from "@/components/modal"

interface AnimationCardProps {
  imageUrl: string
}

export default function AnimationCard({ imageUrl }: AnimationCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card
        className="flex-shrink-0 snap-center overflow-hidden cursor-pointer"
        style={{ width: "min(100%, 500px)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image src={imageUrl || "/placeholder.svg"} alt="Excerpt from animation" fill className="object-cover" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full">
              <Play className="h-8 w-8" />
            </Button>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium">Excerpt from animation</h3>
        </CardContent>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative aspect-video w-[80vw] max-w-[1200px]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Animation excerpt"
            fill
            className="object-contain pointer-events-none"
          />
        </div>
      </Modal>
    </>
  )
}

