import { motion } from "motion/react";
import { ClassType } from "../backend.d";
import { mockInstructors } from "../data/mockData";

const classTypeLabel: Record<ClassType, string> = {
  [ClassType.mat]: "Mat",
  [ClassType.refomer]: "Reformer",
  [ClassType.privateSession]: "Private",
};

export function Instructors() {
  return (
    <section id="instructors" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-3">
            The Team
          </p>
          <h2 className="section-heading text-xl md:text-2xl">
            Meet Your Instructors
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="instructors.list"
        >
          {mockInstructors.map((instructor, i) => (
            <motion.article
              key={instructor.id}
              className="group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-ocid={`instructors.item.${i + 1}`}
            >
              <div className="relative overflow-hidden rounded-xl mb-5 aspect-[4/5]">
                <motion.img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {instructor.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {instructor.specialties.map((s) => (
                  <span
                    key={s}
                    className="font-sans text-[9px] uppercase tracking-widest text-foreground/50 border border-border px-2 py-0.5 rounded-sm"
                  >
                    {classTypeLabel[s]}
                  </span>
                ))}
              </div>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {instructor.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
