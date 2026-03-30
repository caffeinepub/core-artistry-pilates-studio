import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { mockInstructors } from "../../data/mockData";
import { ModalBackdrop } from "./ModalBackdrop";

interface BookingModalProps {
  onClose: () => void;
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const TIME_PREFS = ["Mornings", "Afternoons", "Evenings"];
const CONTACT_METHODS = ["Email", "WhatsApp", "Phone Call"];

export function BookingModal({ onClose }: BookingModalProps) {
  const [instructor, setInstructor] = useState("");
  const [timePref, setTimePref] = useState("");
  const [days, setDays] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleDay = (d: string) =>
    setDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalBackdrop onClose={onClose}>
      <motion.div
        className="bg-card border border-border rounded-2xl shadow-modal overflow-hidden max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        data-ocid="booking.modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-border">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-1">
              Reserve Your Place
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Private Session
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Close"
            data-ocid="booking.close_button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div
            className="px-8 py-12 text-center"
            data-ocid="booking.success_state"
          >
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl mb-2">Request Received</h3>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              We'll reach out to confirm your private session details shortly.
            </p>
            <Button
              onClick={onClose}
              className="bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest"
              data-ocid="booking.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-7">
            {/* Instructor */}
            <div className="space-y-3">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Preferred Instructor
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {["No Preference", ...mockInstructors.map((i) => i.name)].map(
                  (name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setInstructor(name)}
                      className={`px-3 py-2.5 rounded-lg border text-left font-sans text-xs transition-all ${
                        instructor === name
                          ? "border-foreground bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                      data-ocid="booking.radio"
                    >
                      {name}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Time Preference */}
            <div className="space-y-3">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Preferred Time
              </Label>
              <div className="flex gap-2">
                {TIME_PREFS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimePref(t)}
                    className={`flex-1 py-2.5 rounded-lg border font-sans text-xs uppercase tracking-widest transition-all ${
                      timePref === t
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-border hover:border-foreground/40"
                    }`}
                    data-ocid="booking.toggle"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Days */}
            <div className="space-y-3">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Preferred Days
              </Label>
              <div className="flex flex-wrap gap-2">
                {DAYS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDay(d)}
                    className={`px-3 py-2 rounded-lg border font-sans text-xs uppercase tracking-wider transition-all ${
                      days.includes(d)
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-border hover:border-foreground/40"
                    }`}
                    data-ocid="booking.checkbox"
                  >
                    {d.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Method */}
            <div className="space-y-3">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Preferred Contact
              </Label>
              <div className="flex gap-2">
                {CONTACT_METHODS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setContactMethod(m)}
                    className={`flex-1 py-2.5 rounded-lg border font-sans text-xs uppercase tracking-widest transition-all ${
                      contactMethod === m
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-border hover:border-foreground/40"
                    }`}
                    data-ocid="booking.radio"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest"
              data-ocid="booking.submit_button"
            >
              Request Session
            </Button>
          </form>
        )}
      </motion.div>
    </ModalBackdrop>
  );
}
