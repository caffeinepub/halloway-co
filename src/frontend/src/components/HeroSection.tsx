import { motion } from "motion/react";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/halloway-hero.dim_1400x800.jpg"
          alt="Halloway & Co — Where Heritage Meets the Street"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/75" />
        {/* Gradient fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* EST label */}
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-6">
            Est. 2024
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="heading-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6"
        >
          Where Heritage
          <br />
          <span className="text-gold-gradient">Meets the Street</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/70 text-lg md:text-xl font-sans tracking-wide mb-12 max-w-xl mx-auto"
        >
          Halloway & Co — Redefining luxury for a new generation
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="gold-rule w-24 mx-auto mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            type="button"
            onClick={onExploreClick}
            data-ocid="hero.primary_button"
            className="group inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 px-10 py-4 text-sm tracking-[0.3em] uppercase font-sans"
          >
            Explore Collections
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs tracking-widest uppercase font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
