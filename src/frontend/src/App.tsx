import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Disciplines } from "./components/Disciplines";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Instructors } from "./components/Instructors";
import { Schedule } from "./components/Schedule";
import { Testimonials } from "./components/Testimonials";
import { BookingModal } from "./components/modals/BookingModal";
import { ContactModal } from "./components/modals/ContactModal";
import { CreditsModal } from "./components/modals/CreditsModal";

type Modal = "contact" | "booking" | "credits" | null;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeModal, setActiveModal] = useState<Modal>(null);
  const [hideCreditsAlert, setHideCreditsAlert] = useState(false);

  const openModal = (m: Modal) => setActiveModal(m);
  const closeModal = () => setActiveModal(null);

  const handleBook = (_classId: string) => {
    if (hideCreditsAlert) return;
    openModal("credits");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        isAuthenticated={isAuthenticated}
        onSignIn={() => setIsAuthenticated(true)}
        onSignOut={() => setIsAuthenticated(false)}
        onOpenContact={() => openModal("contact")}
        onOpenBooking={() => openModal("booking")}
      />

      <main className="pt-16 md:pt-20">
        <Hero onSignUp={() => openModal("booking")} />
        <Disciplines />
        <Schedule onBook={handleBook} />
        <Testimonials />
        <Instructors />
      </main>

      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {activeModal === "contact" && (
          <ContactModal key="contact" onClose={closeModal} />
        )}
        {activeModal === "booking" && (
          <BookingModal key="booking" onClose={closeModal} />
        )}
        {activeModal === "credits" && (
          <CreditsModal
            key="credits"
            onClose={closeModal}
            onDontShow={() => setHideCreditsAlert(true)}
          />
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
}
