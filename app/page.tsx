"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AnimatedCursor from "@/components/animated-cursor"
import HeroBackground from "@/components/hero-background"
import CharacterCard from "@/components/character-card"
import AnimationCard from "@/components/animation-card"
import YoutubeEmbed from "@/components/youtube-embed"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedCursor />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">OFF SCRIPT</h1>
          <p className="mb-8 max-w-md text-xl text-muted-foreground md:text-2xl">Animation that breaks the rules</p>
          <Button
            size="lg"
            className="group"
            onClick={() => {
              document.getElementById("animations")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            View Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Animation Showcase */}
      <section id="animations" className="py-24">
        <div className="container px-4">
          <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">Featured Animations</h2>
          <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
            {[1, 2, 3, 4].map((item) => (
              <AnimationCard
                key={item}
                imageUrl={
                  item === 1
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artwork%20%285%29-KkzQNtbiM336I3TWRjeoiRzuXcAmo4.png"
                    : `/placeholder.svg?height=400&width=600`
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Character Showcase */}
      <section id="characters" className="bg-muted py-24">
        <div className="container px-4">
          <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">Character Gallery</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <CharacterCard
              name="Void"
              description="A judgmental feline with ancient wisdom"
              imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-03-10%20140852-RLNDu3YG6wvLLtOCIjyKkOyQ6argHq.png"
            />
            <CharacterCard
              name="Whimsy"
              description="The dreamer with a mysterious past"
              imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avtor-UZxdlAHCNEo9IAm3M0TgvP52Ywiuiq.png"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-03-10%20140633-e4po4be6K1STZJtelKqw7kvYz4ryqb.png"
                  alt="Animator portrait"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About the Artist</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                I'm a passionate animator focused on creating unique characters and stories that challenge conventional
                narratives. With over 5 years of experience in digital animation, I bring characters to life through
                fluid motion and expressive design.
              </p>
              <p className="text-lg text-muted-foreground">
                My work has been featured in various online galleries and independent animation festivals. I specialize
                in character-driven narratives with a distinctive minimalist style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Integration */}
      <section id="youtube" className="bg-muted py-24">
        <div className="container px-4">
          <div className="mb-12 flex items-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Latest Videos</h2>
            <Youtube className="ml-4 h-8 w-8 text-red-600" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <YoutubeEmbed videoId="dQw4w9WgXcQ" title="Featured Animation" />
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="flex overflow-hidden">
                  <div className="relative h-24 w-32 flex-shrink-0">
                    <Image
                      src={`/placeholder.svg?height=96&width=128`}
                      alt={`Video thumbnail ${item}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Animation Short #{item}</h3>
                    <p className="text-sm text-muted-foreground">1.2K views • 2 weeks ago</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">
              Subscribe to Channel
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} OFF SCRIPT. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

