import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AGENT_URL =
  "https://agent.jotform.com/019cd2966a3a7256879676c0d7386e09623e";

export function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-ocid="aiagent.panel"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="
              relative flex flex-col
              w-[calc(100vw-3rem)] max-w-[380px]
              h-[520px]
              rounded-sm
              overflow-hidden
              shadow-2xl
            "
            style={{
              border: "1px solid oklch(0.72 0.14 80 / 0.55)",
              background: "oklch(0.18 0.025 245)",
            }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{
                background: "oklch(0.21 0.028 245)",
                borderBottom: "1px solid oklch(0.72 0.14 80 / 0.35)",
              }}
            >
              <div className="flex items-center gap-2.5">
                {/* Gold dot indicator */}
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: "oklch(0.72 0.14 80)" }}
                />
                <div>
                  <p
                    className="heading-display text-sm leading-tight"
                    style={{ color: "oklch(0.94 0.025 85)" }}
                  >
                    Halloway & Co
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "oklch(0.72 0.14 80)", fontSize: "0.6rem" }}
                  >
                    Style Concierge
                  </p>
                </div>
              </div>

              <button
                type="button"
                data-ocid="aiagent.close_button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="
                  flex items-center justify-center
                  w-7 h-7 rounded-sm
                  transition-colors duration-200
                  hover:bg-white/10
                  focus-visible:outline-none focus-visible:ring-1
                "
                style={{
                  color: "oklch(0.72 0.02 85)",
                }}
              >
                <X size={15} strokeWidth={1.8} />
              </button>
            </div>

            {/* iframe */}
            <iframe
              src={AGENT_URL}
              title="Halloway & Co Style Concierge"
              className="w-full flex-1 border-0"
              allow="microphone"
              loading="lazy"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        type="button"
        data-ocid="aiagent.toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close style concierge" : "Open style concierge"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="
          group relative flex items-center gap-2.5
          pl-4 pr-5 py-3
          rounded-sm
          shadow-xl
          overflow-hidden
          focus-visible:outline-none focus-visible:ring-2
        "
        style={{
          background: "oklch(0.18 0.025 245)",
          border: "1px solid oklch(0.72 0.14 80 / 0.65)",
          color: "oklch(0.94 0.025 85)",
          boxShadow:
            "0 8px 32px oklch(0.08 0.02 245 / 0.7), 0 0 0 1px oklch(0.72 0.14 80 / 0.2)",
        }}
      >
        {/* Subtle gold sheen on hover */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.14 80 / 0.10) 0%, transparent 60%)",
          }}
        />

        <span
          className="relative flex items-center justify-center w-6 h-6 rounded-sm"
          style={{ background: "oklch(0.72 0.14 80 / 0.15)" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                <X
                  size={13}
                  strokeWidth={2}
                  style={{ color: "oklch(0.72 0.14 80)" }}
                />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                <MessageCircle
                  size={13}
                  strokeWidth={2}
                  style={{ color: "oklch(0.72 0.14 80)" }}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        <span className="relative flex flex-col items-start">
          <span
            className="heading-display text-sm leading-none tracking-wide"
            style={{ color: "oklch(0.94 0.025 85)" }}
          >
            Ask Us
          </span>
          <span
            className="text-xs tracking-widest uppercase mt-0.5"
            style={{ color: "oklch(0.72 0.14 80)", fontSize: "0.58rem" }}
          >
            Style Concierge
          </span>
        </span>
      </motion.button>
    </div>
  );
}
