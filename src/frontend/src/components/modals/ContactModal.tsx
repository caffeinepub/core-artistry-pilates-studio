import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ModalBackdrop } from "./ModalBackdrop";

interface ContactModalProps {
  onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalBackdrop onClose={onClose}>
      <motion.div
        className="bg-card border border-border rounded-2xl shadow-modal overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        data-ocid="contact.modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-border">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-1">
              Get in Touch
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Close"
            data-ocid="contact.close_button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div
            className="px-8 py-12 text-center"
            data-ocid="contact.success_state"
          >
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-lg">✓</span>
            </div>
            <h3 className="font-serif text-xl mb-2">Thank You</h3>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              We've received your message and will be in touch shortly.
            </p>
            <Button
              onClick={onClose}
              className="bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest"
              data-ocid="contact.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                  First Name
                </Label>
                <Input
                  required
                  value={form.firstName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, firstName: e.target.value }))
                  }
                  className="font-sans text-sm border-border bg-background"
                  data-ocid="contact.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                  Last Name
                </Label>
                <Input
                  required
                  value={form.lastName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, lastName: e.target.value }))
                  }
                  className="font-sans text-sm border-border bg-background"
                  data-ocid="contact.input"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Email
              </Label>
              <Input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="font-sans text-sm border-border bg-background"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Phone
              </Label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="font-sans text-sm border-border bg-background"
                data-ocid="contact.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                Message
              </Label>
              <Textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="font-sans text-sm border-border bg-background resize-none"
                data-ocid="contact.textarea"
              />
            </div>
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest"
                data-ocid="contact.submit_button"
              >
                Send Message
              </Button>
            </div>
          </form>
        )}
      </motion.div>
    </ModalBackdrop>
  );
}
