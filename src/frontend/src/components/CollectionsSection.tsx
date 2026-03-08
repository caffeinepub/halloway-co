import { brand } from "@/config/brand";
import { collections } from "@/config/collections";
import { motion } from "motion/react";

const categoryColors: Record<string, string> = {
  "Old Money": "border-gold/60 text-gold",
  Streetwear: "border-cream/40 text-cream/80",
  Collab: "border-gold/40 text-gold/80",
};

export function CollectionsSection() {
  return (
    <section
      id="collections"
      data-ocid="collections.section"
      className="py-32 bg-navy grain-overlay relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Halloway & Co
          </p>
          <h2 className="heading-display text-4xl md:text-6xl text-cream mb-6">
            Our Collections
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Collection cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              data-ocid={`collections.item.${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="collection-card group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="card-overlay absolute inset-0 bg-navy/40 opacity-0 transition-opacity duration-400" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block border px-3 py-1 text-xs tracking-widest uppercase font-sans bg-navy/60 backdrop-blur-sm ${
                      categoryColors[collection.category] ||
                      "border-gold/60 text-gold"
                    }`}
                  >
                    {collection.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="space-y-3">
                <h3 className="heading-display text-2xl md:text-3xl text-cream">
                  {collection.name}
                </h3>
                <p className="text-cream/55 text-sm font-sans leading-relaxed">
                  {collection.description}
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${brand.phone1.replace(/\D/g, "")}?text=${encodeURIComponent(collection.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`collections.view.button.${index + 1}`}
                    className="group/link inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase font-sans hover:gap-3 transition-all duration-200"
                  >
                    Contact us for info
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
