"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface FeaturesCardsProps {
  features: Feature[]
  title?: string
  subtitle?: string
}

export default function FeaturesCards({ 
  features, 
  title = "Powerful Features",
  subtitle = "Everything you need to create stunning visual experiences"
}: FeaturesCardsProps) {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(158, 64%, 52%)", "hsl(158, 84%, 42%)", "hsl(158, 74%, 62%)", "hsl(158, 54%, 72%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(24, 95%, 53%)", "hsl(24, 100%, 63%)", "hsl(24, 90%, 43%)", "hsl(24, 85%, 73%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(262, 83%, 58%)", "hsl(262, 93%, 48%)", "hsl(262, 73%, 68%)", "hsl(262, 63%, 78%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "edge" as const,
        shapeScale: 0.09,
        colors: ["hsl(158, 64%, 52%)", "hsl(158, 84%, 42%)", "hsl(158, 74%, 62%)", "hsl(158, 54%, 72%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(24, 95%, 53%)", "hsl(24, 100%, 63%)", "hsl(24, 90%, 43%)", "hsl(24, 85%, 73%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "stripes" as const,
        shapeScale: 0.13,
        colors: ["hsl(262, 83%, 58%)", "hsl(262, 93%, 48%)", "hsl(262, 73%, 68%)", "hsl(262, 63%, 78%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-80">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/80 border border-white/20 dark:border-white/10 backdrop-blur-sm">
                  <div className="mb-6 filter drop-shadow-lg">{feature.icon}</div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>

                  <p className="leading-relaxed flex-grow text-gray-100 font-medium">{feature.description}</p>

                  <div className="mt-6 flex items-center text-sm font-bold text-gray-200 hover:text-white transition-colors cursor-pointer">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
