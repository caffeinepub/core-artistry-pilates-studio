import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { mockTestimonials } from "../data/mockData";

const VISIBLE = 3;
const STARS = ["s1", "s2", "s3", "s4", "s5"];

export function Testimonials() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = mockTestimonials.length;

  const prev = () => {
    setDirection(-1);
    setStart((s) => (s - 1 + total) % total);
  };

  const next = () => {
    setDirection(1);
    setStart((s) => (s + 1) % total);
  };

  const visible = Array.from(
    { length: Math.min(VISIBLE, total) },
    (_, i) => mockTestimonials[(start + i) % total],
  );

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-3">
            Client Stories
          </p>
          <h2 className="section-heading text-xl md:text-2xl">Reflections</h2>
        </motion.div>

        <div className="relative">
          {/* Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={start}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {visible.map((t, i) => (
                  <article
                    key={t.id}
                    className="bg-card border border-border rounded-xl p-8 shadow-card"
                    data-ocid={`testimonials.item.${i + 1}`}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {STARS.map((sk, si) => (
                        <Star
                          key={sk}
                          className={`w-3.5 h-3.5 ${
                            si < Number(t.rating)
                              ? "fill-foreground/80 text-foreground/80"
                              : "fill-transparent text-foreground/20"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-base leading-relaxed text-foreground/80 mb-6">
                      &ldquo;{t.content}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="font-serif text-xs text-foreground/60">
                          {t.author.charAt(0)}
                        </span>
                      </div>
                      <span className="font-sans text-xs uppercase tracking-widest text-foreground/60">
                        {t.author}
                      </span>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Previous testimonials"
              data-ocid="testimonials.pagination_prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {mockTestimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setDirection(i > start ? 1 : -1);
                    setStart(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === start ? "bg-foreground w-4" : "bg-foreground/25"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Next testimonials"
              data-ocid="testimonials.pagination_next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
