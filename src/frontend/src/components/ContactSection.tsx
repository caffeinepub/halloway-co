import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { brand } from "@/config/brand";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { AlertCircle, CheckCircle, Loader2, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp / Phone",
    value: brand.phone1,
    href: `https://wa.me/${brand.phone1.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const {
    mutate: submitForm,
    isPending,
    isSuccess,
    isError,
    reset,
  } = useSubmitContactForm();

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    submitForm(formData);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setFormErrors({});
    reset();
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
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
            Reach Out
          </p>
          <h2 className="heading-display text-4xl md:text-6xl text-gold mb-6">
            Get in Touch
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cream/60 font-sans leading-relaxed mb-10">
              We're here to help. Whether you have a question about a
              collection, want to collaborate, or simply want to say hello —
              reach out and we'll be in touch.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.a
                  key={`${item.label}-${index}`}
                  href={item.href}
                  target={item.href.startsWith("https") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("https")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-ocid={`contact.item.${index + 1}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-5 group p-4 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:bg-navy-light/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <item.icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs tracking-widest uppercase font-sans mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-cream text-sm font-sans">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="mt-12 border-l-2 border-gold/40 pl-6">
              <p className="text-cream/40 text-sm font-sans italic leading-relaxed">
                "Every great collection begins with a conversation."
              </p>
              <p className="text-gold/60 text-xs tracking-widest uppercase font-sans mt-2">
                — Halloway & Co
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSuccess ? (
              <motion.div
                data-ocid="contact.success_state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="gold-frame p-12 text-center flex flex-col items-center gap-6 h-full justify-center"
                style={{ minHeight: "400px" }}
              >
                <CheckCircle size={48} className="text-gold" />
                <div>
                  <h3 className="heading-display text-2xl text-cream mb-3">
                    Message Sent
                  </h3>
                  <p className="text-cream/60 text-sm font-sans leading-relaxed">
                    Thank you for reaching out. We'll be in touch within 24
                    hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  data-ocid="contact.secondary_button"
                  className="border border-gold/40 text-gold text-xs tracking-widest uppercase font-sans px-8 py-3 hover:bg-gold/10 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-cream/60 text-xs tracking-widest uppercase font-sans block mb-2"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    data-ocid="contact.input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, name: e.target.value }));
                      if (formErrors.name)
                        setFormErrors((p) => ({ ...p, name: "" }));
                    }}
                    className="bg-navy-light border-gold/20 text-cream placeholder:text-cream/25 focus:border-gold focus-visible:ring-gold/30 font-sans"
                    aria-invalid={!!formErrors.name}
                    aria-describedby={
                      formErrors.name ? "name-error" : undefined
                    }
                  />
                  {formErrors.name && (
                    <p
                      id="name-error"
                      data-ocid="contact.name_error"
                      className="text-destructive text-xs mt-1.5 font-sans"
                    >
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-cream/60 text-xs tracking-widest uppercase font-sans block mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    data-ocid="contact.email.input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, email: e.target.value }));
                      if (formErrors.email)
                        setFormErrors((p) => ({ ...p, email: "" }));
                    }}
                    className="bg-navy-light border-gold/20 text-cream placeholder:text-cream/25 focus:border-gold focus-visible:ring-gold/30 font-sans"
                    aria-invalid={!!formErrors.email}
                    aria-describedby={
                      formErrors.email ? "email-error" : undefined
                    }
                  />
                  {formErrors.email && (
                    <p
                      id="email-error"
                      data-ocid="contact.email_error"
                      className="text-destructive text-xs mt-1.5 font-sans"
                    >
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-cream/60 text-xs tracking-widest uppercase font-sans block mb-2"
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, message: e.target.value }));
                      if (formErrors.message)
                        setFormErrors((p) => ({ ...p, message: "" }));
                    }}
                    rows={5}
                    className="bg-navy-light border-gold/20 text-cream placeholder:text-cream/25 focus:border-gold focus-visible:ring-gold/30 font-sans resize-none"
                    aria-invalid={!!formErrors.message}
                    aria-describedby={
                      formErrors.message ? "message-error" : undefined
                    }
                  />
                  {formErrors.message && (
                    <p
                      id="message-error"
                      data-ocid="contact.message_error"
                      className="text-destructive text-xs mt-1.5 font-sans"
                    >
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Error state */}
                {isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-3 p-4 border border-destructive/40 bg-destructive/10"
                  >
                    <AlertCircle
                      size={16}
                      className="text-destructive flex-shrink-0"
                    />
                    <p className="text-destructive text-sm font-sans">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full flex items-center justify-center gap-3 bg-gold text-navy font-sans text-sm tracking-[0.3em] uppercase py-4 hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
