import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AlertTriangle, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ModalBackdrop } from "./ModalBackdrop";

interface CreditsModalProps {
  onClose: () => void;
  onDontShow: () => void;
}

export function CreditsModal({ onClose, onDontShow }: CreditsModalProps) {
  const [dontShow, setDontShow] = useState(false);

  const handleDismiss = () => {
    if (dontShow) onDontShow();
    onClose();
  };

  return (
    <ModalBackdrop onClose={onClose}>
      <motion.div
        className="bg-card border border-border rounded-2xl shadow-modal overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        data-ocid="credits.modal"
      >
        <div className="px-8 pt-8 pb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-foreground/60" />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Close"
              data-ocid="credits.close_button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
            Credits Required
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
            Credits are required to book a class. Please purchase a package
            first to access the full schedule and reserve your place.
          </p>

          <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-muted border border-border">
            <Switch
              id="dont-show"
              checked={dontShow}
              onCheckedChange={setDontShow}
              data-ocid="credits.switch"
            />
            <Label
              htmlFor="dont-show"
              className="font-sans text-xs uppercase tracking-widest text-foreground/60 cursor-pointer"
            >
              Don&apos;t show this message again
            </Label>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border font-sans text-xs uppercase tracking-widest"
              data-ocid="credits.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleDismiss}
              className="flex-1 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest"
              data-ocid="credits.primary_button"
            >
              View Packages
            </Button>
          </div>
        </div>
      </motion.div>
    </ModalBackdrop>
  );
}
