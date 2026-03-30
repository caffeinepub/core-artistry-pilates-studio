import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface HeaderProps {
  isAuthenticated: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

export function Header({
  isAuthenticated,
  onSignIn,
  onSignOut,
  onOpenContact,
  onOpenBooking,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-xs border-b border-border"
          : "bg-background"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-serif text-sm md:text-base uppercase tracking-[0.2em] text-foreground font-semibold hover:opacity-80 transition-opacity"
          data-ocid="header.link"
        >
          Core Artistry
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {[
            { label: "Home", id: "hero" },
            { label: "About", id: "disciplines" },
            { label: "Classes", id: "schedule" },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="nav-link"
              data-ocid="header.link"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onOpenBooking}
            className="nav-link"
            data-ocid="header.link"
          >
            Book
          </button>
          <button
            type="button"
            onClick={() => scrollTo("instructors")}
            className="nav-link"
            data-ocid="header.link"
          >
            Team
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="nav-link"
            data-ocid="header.link"
          >
            Contact
          </button>
        </nav>

        {/* Auth CTA */}
        <div className="hidden md:flex items-center">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border text-foreground hover:bg-secondary font-sans text-xs uppercase tracking-widest"
                  data-ocid="header.dropdown_menu"
                >
                  <User className="w-3.5 h-3.5" />
                  My Account
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  className="font-sans text-xs uppercase tracking-wider"
                  data-ocid="header.link"
                >
                  My Account
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="font-sans text-xs uppercase tracking-wider"
                  data-ocid="header.link"
                >
                  My Packages
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="font-sans text-xs uppercase tracking-wider"
                  data-ocid="header.link"
                >
                  My Bookings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="font-sans text-xs uppercase tracking-wider"
                  data-ocid="header.link"
                >
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={onSignOut}
                  className="font-sans text-xs uppercase tracking-wider text-destructive"
                  data-ocid="header.link"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={onSignIn}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-xs uppercase tracking-widest px-5"
              data-ocid="header.primary_button"
            >
              Sign In
            </Button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="header.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {[
                { label: "Home", action: () => scrollTo("hero") },
                { label: "About", action: () => scrollTo("disciplines") },
                { label: "Classes", action: () => scrollTo("schedule") },
                {
                  label: "Book",
                  action: () => {
                    setMobileOpen(false);
                    onOpenBooking();
                  },
                },
                { label: "Team", action: () => scrollTo("instructors") },
                {
                  label: "Contact",
                  action: () => {
                    setMobileOpen(false);
                    onOpenContact();
                  },
                },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.action}
                  className="nav-link text-left py-2"
                  data-ocid="header.link"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-border">
                {isAuthenticated ? (
                  <button
                    type="button"
                    onClick={onSignOut}
                    className="nav-link py-2"
                    data-ocid="header.link"
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      onSignIn();
                    }}
                    className="nav-link py-2"
                    data-ocid="header.primary_button"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
