import { brand } from "@/config/brand";
import { motion } from "motion/react";

const stats = [
  { label: "Established", value: `Est. ${brand.established}` },
  { label: "Origin", value: "Mumbai, India" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.025 245) 0%, oklch(0.21 0.03 245) 50%, oklch(0.18 0.025 245) 100%)",
      }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.72 0.14 80) 0px, oklch(0.72 0.14 80) 1px, transparent 1px, transparent 40px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              Our Story
            </p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-tight">
              The Legacy
              <br />
              <span className="text-gold">Redefined</span>
            </h2>
            <div
              className="gold-rule w-16 mb-8"
              style={{ margin: "0 0 2rem 0" }}
            />

            <p className="text-cream/70 text-base md:text-lg font-sans leading-relaxed mb-8">
              {brand.story}
            </p>

            <p className="text-cream/60 text-sm font-sans leading-relaxed mb-12 italic">
              "We believe style is an inheritance — and we're here to pass it
              on."
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-8 border-t border-gold/20 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p className="heading-display text-2xl md:text-3xl text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream/50 text-xs tracking-widest uppercase font-sans">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Outer frame */}
              <div className="gold-frame p-10 relative">
                {/* Inner frame */}
                <div
                  className="border border-gold/20 p-8 text-center relative"
                  style={{ minHeight: "320px" }}
                >
                  {/* Corner ornaments */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/60" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/60" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/60" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/60" />

                  <div className="flex flex-col items-center justify-center h-full gap-6 py-8">
                    {/* Top decorative line */}
                    <div className="gold-rule w-16" />

                    <div>
                      <p className="text-gold/50 text-xs tracking-[0.5em] uppercase font-sans mb-4">
                        House of
                      </p>
                      <h3 className="heading-display text-4xl text-cream mb-2">
                        Halloway
                      </h3>
                      <p className="heading-display text-2xl text-gold/80">
                        &amp; Co
                      </p>
                    </div>

                    {/* EST. 2024 badge */}
                    <div className="text-center">
                      <div className="border border-gold/40 px-6 py-3 inline-block">
                        <p className="text-gold text-xs tracking-[0.6em] uppercase font-sans">
                          Est. 2024
                        </p>
                      </div>
                    </div>

                    <p className="text-cream/40 text-xs tracking-widest uppercase font-sans">
                      Mumbai, India
                    </p>

                    {/* Bottom decorative line */}
                    <div className="gold-rule w-16" />
                  </div>
                </div>
              </div>

              {/* Shadow offset */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 -z-10"
                style={{ top: "12px", left: "12px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
