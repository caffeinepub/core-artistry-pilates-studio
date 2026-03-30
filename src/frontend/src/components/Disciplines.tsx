import { motion } from "motion/react";

const disciplines = [
  {
    title: "Reformer Pilates",
    subtitle: "Precision · Resistance · Elegance",
    description:
      "Our signature reformer sessions harness spring resistance and gliding carriage to sculpt and lengthen. Performed in intimate groups of three, each class is tailored to the individual within the collective.",
    detail: "55 min · Max 3 guests",
  },
  {
    title: "Mat Pilates",
    subtitle: "Breath · Core · Flow",
    description:
      "Returning to the purist origin of Joseph Pilates' method, mat classes build deep core awareness through bodyweight movement. Accessible, profound, and endlessly refined by our master instructors.",
    detail: "50 min · Max 3 guests",
  },
  {
    title: "Private Sessions",
    subtitle: "Tailored · Intimate · Transformative",
    description:
      "One-on-one sessions designed entirely around your body, goals, and rhythm. The highest expression of personalised movement — a conversation between instructor and body, session after session.",
    detail: "60 min · 1 guest",
  },
];

export function Disciplines() {
  return (
    <section id="disciplines" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-3">
            What We Offer
          </p>
          <h2 className="section-heading text-xl md:text-2xl">
            Our Pilates Disciplines
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="disciplines.list"
        >
          {disciplines.map((d, i) => (
            <motion.article
              key={d.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-modal transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              data-ocid={`disciplines.item.${i + 1}`}
            >
              <div className="w-8 h-px bg-primary/30 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {d.title}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/40 mb-4">
                {d.subtitle}
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {d.description}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/50 border-t border-border pt-4">
                {d.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
