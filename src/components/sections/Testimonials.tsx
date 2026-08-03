import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { asset } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-bloom-cream-dark/50 py-16 lg:py-20">
      <div className="px-8 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            Patient Stories
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-bloom-gold/50" />
        </motion.div>

        {/* Award plaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-6 rounded-2xl bg-bloom-cream-light p-6 text-center shadow-sm sm:flex-row sm:gap-8 sm:p-8 sm:text-left"
        >
          <img
            src={asset("award-businessrate-2026.jpeg")}
            alt="BusinessRate Ranked #1 Award Winner plaque, June 2026 — Bloomfield Acupuncture, Hyde Park, Chicago"
            className="w-32 shrink-0 rounded-md shadow-md sm:w-36"
          />
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
              Award Winner
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-wide text-bloom-brown">
              Ranked #1 Acupuncture Clinic in Hyde Park
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bloom-brown-light">
              Recognized by BusinessRate in June 2026, based on verified Google Reviews from our
              patients.
            </p>
          </div>
        </motion.div>

        {/* Grid layout instead of horizontal scroll */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex flex-col rounded-2xl bg-bloom-cream-light p-6 shadow-sm"
            >
              <Quote className="size-7 text-bloom-gold/30" />
              <p className="mt-3 text-sm leading-relaxed text-bloom-brown-light italic">
                "{t.quote}"
              </p>
              <div className="mt-auto border-t border-bloom-gold/10 pt-3">
                <p className="font-display text-base font-semibold text-bloom-brown">{t.name}</p>
                <p className="text-xs tracking-wide text-bloom-sage">{t.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
