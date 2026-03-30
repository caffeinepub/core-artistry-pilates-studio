import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ModalBackdropProps {
  onClose: () => void;
  children: ReactNode;
}

export function ModalBackdrop({ onClose, children }: ModalBackdropProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-lg">{children}</div>
    </motion.div>
  );
}
