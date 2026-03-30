import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface HeroProps {
  onSignUp: () => void;
}

const publications = [
  "Vogue",
  "TimeOut",
  "Expat Living",
  "Harper's Bazaar",
  "Condé Nast",
];

export function Hero({ onSignUp }: HeroProps) {
  return (
    <section id="hero" className="relative">
      {/* Hero Image */}
      <div
        className="relative w-full h-[520px] md:h-[640px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-pilates.dim_1920x1080.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
            <motion.div
              className="max-w-[520px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              <motion.p
                className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Max. 3 people per class
              </motion.p>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-foreground mb-6">
                Refine.
                <br />
                Align.
                <br />
                Transform.
              </h1>

              <p className="font-sans text-sm text-foreground/60 tracking-wide mb-8 max-w-[340px] leading-relaxed">
                Exclusive boutique Pilates studio offering deeply personalised
                sessions for those who seek artistry in motion.
              </p>

              <Button
                onClick={onSignUp}
                className="bg-primary text-primary-foreground hover:bg-primary/85 font-sans text-xs uppercase tracking-widest px-8 py-5 rounded-sm"
                data-ocid="hero.primary_button"
              >
                Sign Up Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured In Strip */}
      <motion.div
        className="border-y border-border bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:mr-10 shrink-0">
              Featured In
            </span>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-10 gap-y-2">
              {publications.map((pub) => (
                <span
                  key={pub}
                  className="font-serif text-sm md:text-base font-medium tracking-wider text-foreground/40 hover:text-foreground/70 transition-colors cursor-default"
                >
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
