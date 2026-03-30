import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ClassStatus, ClassType } from "../backend.d";
import { mockClasses } from "../data/mockData";

interface ScheduleProps {
  onBook: (classId: string) => void;
}

const statusConfig: Record<ClassStatus, { label: string; className: string }> =
  {
    [ClassStatus.booked]: { label: "Available", className: "status-booked" },
    [ClassStatus.waitlisted]: {
      label: "Waitlisted",
      className: "status-waitlisted",
    },
    [ClassStatus.bookingClosed]: {
      label: "Booking Closed",
      className: "status-closed",
    },
    [ClassStatus.fullyBooked]: {
      label: "Fully Booked",
      className: "status-full",
    },
  };

const classTypeLabel: Record<ClassType, string> = {
  [ClassType.mat]: "Mat Pilates",
  [ClassType.refomer]: "Reformer Pilates",
  [ClassType.privateSession]: "Private Session",
};

function formatTime(ns: bigint): string {
  const ms = Number(ns / BigInt(1000000));
  return new Date(ms).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDay(ns: bigint): string {
  const ms = Number(ns / BigInt(1000000));
  return new Date(ms).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function Schedule({ onBook }: ScheduleProps) {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-3">
            This Week
          </p>
          <h2 className="section-heading text-xl md:text-2xl">
            This Week's Schedule
          </h2>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          className="hidden md:block bg-card rounded-xl border border-border shadow-card overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          data-ocid="schedule.table"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {[
                  "Day & Time",
                  "Class Type",
                  "Instructor",
                  "Duration",
                  "Spots",
                  "Status",
                  "",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-left font-sans text-[10px] uppercase tracking-widest text-foreground/40"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockClasses.map((cls, i) => (
                <motion.tr
                  key={cls.id}
                  className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  data-ocid={`schedule.row.${i + 1}`}
                >
                  <td className="px-6 py-4">
                    <div className="font-sans text-xs font-medium text-foreground">
                      {formatTime(cls.startTime)}
                    </div>
                    <div className="font-sans text-[10px] text-foreground/50 mt-0.5">
                      {formatDay(cls.startTime)}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-serif text-sm text-foreground">
                    {classTypeLabel[cls.classType]}
                  </td>
                  <td className="px-6 py-4 font-sans text-sm text-foreground/70">
                    {cls.instructor}
                  </td>
                  <td className="px-6 py-4 font-sans text-sm text-foreground/70">
                    {cls.durationMinutes.toString()} min
                  </td>
                  <td className="px-6 py-4 font-sans text-sm text-foreground/70">
                    {cls.spotsLeft.toString()} / {cls.capacity.toString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-wider font-medium ${statusConfig[cls.status].className}`}
                    >
                      {statusConfig[cls.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onBook(cls.id)}
                      className="font-sans text-[10px] uppercase tracking-widest border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      data-ocid={`schedule.button.${i + 1}`}
                    >
                      Book
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div
          className="md:hidden flex flex-col gap-4"
          data-ocid="schedule.list"
        >
          {mockClasses.map((cls, i) => (
            <motion.div
              key={cls.id}
              className="bg-card border border-border rounded-xl p-5 shadow-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              data-ocid={`schedule.item.${i + 1}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-serif text-base text-foreground">
                    {classTypeLabel[cls.classType]}
                  </div>
                  <div className="font-sans text-xs text-foreground/50 mt-0.5">
                    {formatDay(cls.startTime)} · {formatTime(cls.startTime)}
                  </div>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-wider font-medium ${statusConfig[cls.status].className}`}
                >
                  {statusConfig[cls.status].label}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-sans text-foreground/60 mb-4">
                <span>{cls.instructor}</span>
                <span>·</span>
                <span>{cls.durationMinutes.toString()} min</span>
                <span>·</span>
                <span>
                  {cls.spotsLeft.toString()}/{cls.capacity.toString()} spots
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onBook(cls.id)}
                className="w-full font-sans text-[10px] uppercase tracking-widest border-border"
                data-ocid={`schedule.button.${i + 1}`}
              >
                Book
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
