"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-fintech-green dark:text-fintech-blue" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2], pathOffset: [0, 1, 0] }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Your Financial Future Starts Here",
  subtitle = "Expert guidance for Mutual Funds, Insurance, and Loans. Build your wealth with confidence.",
  primaryButtonText = "Start Investing Now",
  primaryButtonLink = "https://client.moneybharat.co/NewOnBoarding/SignUp",
}: {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}) {
  // Split title into two lines at first space or manually
  const splitTitle = title.split(" ");
  const line1 = splitTitle.slice(0, Math.ceil(splitTitle.length / 2)).join(" ");
  const line2 = splitTitle.slice(Math.ceil(splitTitle.length / 2)).join(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="text-sm text-primary font-semibold tracking-wide">
              ✨ Trusted by 50,000+ Investors Across India
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-primary bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up animation-delay-200"
            >
              {line1}
            </motion.h1>

            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-green-400 to-orange-300 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up animation-delay-400"
            >
              {line2}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="inline-block group relative bg-gradient-to-b from-primary/20 to-primary/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Button
                onClick={() => (window.location.href = primaryButtonLink)}
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group-hover:-translate-y-0.5 hover:shadow-lg"
                size="lg"
              >
                <span className="opacity-100 transition-opacity">{primaryButtonText}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <Button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              variant="outline"
              className="rounded-2xl px-8 py-6 text-lg font-semibold border-2 hover:bg-accent transition-all duration-300"
              size="lg"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
