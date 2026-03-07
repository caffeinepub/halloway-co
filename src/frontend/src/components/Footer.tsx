import { brand } from "@/config/brand";
import { motion } from "motion/react";
import { SiInstagram, SiX } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const handleNavClick = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    window.location.hostname,
  )}`;

  return (
    <footer className="bg-navy border-t border-gold/10">
      {/* Gold top rule */}
      <div className="gold-rule" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Logo centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            data-ocid="footer.link"
            className="inline-block"
          >
            <img
              src="/assets/generated/halloway-logo-transparent.dim_600x200.png"
              alt={brand.name}
              className="h-10 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </button>
        </motion.div>

        {/* Nav links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10"
          aria-label="Footer navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              data-ocid={`footer.${link.label.toLowerCase()}.link`}
              className="nav-link text-cream/50 hover:text-gold text-xs tracking-widest uppercase font-sans transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Gold divider */}
        <div className="gold-rule mb-10" />

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            type="button"
            aria-label="Instagram"
            data-ocid="footer.instagram.link"
            className="w-9 h-9 border border-gold/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/50 transition-all duration-200"
          >
            <SiInstagram size={14} />
          </button>
          <button
            type="button"
            aria-label="X (Twitter)"
            data-ocid="footer.twitter.link"
            className="w-9 h-9 border border-gold/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/50 transition-all duration-200"
          >
            <SiX size={14} />
          </button>
        </div>

        {/* Contact line */}
        <p className="text-center text-cream/35 text-xs font-sans tracking-wide mb-4">
          <a
            href={`mailto:${brand.email}`}
            className="hover:text-gold transition-colors"
            data-ocid="footer.email.link"
          >
            {brand.email}
          </a>
          <span className="mx-3 text-gold/30">|</span>
          <a
            href={`tel:${brand.phone1.replace(/\s/g, "")}`}
            className="hover:text-gold transition-colors"
            data-ocid="footer.phone.link"
          >
            {brand.phone1}
          </a>
        </p>

        {/* Copyright */}
        <p className="text-center text-cream/25 text-xs font-sans tracking-wide mb-3">
          © {currentYear} Halloway & Co. All rights reserved.
        </p>

        {/* Caffeine attribution */}
        <p className="text-center text-cream/20 text-xs font-sans">
          Built with <span className="text-gold/40">♥</span> using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold/60 transition-colors text-cream/30"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
