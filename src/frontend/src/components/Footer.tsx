import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-[oklch(0.155_0_0)] text-[oklch(0.965_0.01_85)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Core Artistry
            </div>
            <p className="font-sans text-[11px] uppercase tracking-widest text-[oklch(0.965_0.01_85)]/40 mb-4">
              in motion
            </p>
            <p className="font-sans text-xs text-[oklch(0.965_0.01_85)]/50 leading-relaxed">
              Exclusive boutique Pilates studio. Maximum 3 people per class.
              Artistry in every movement.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[oklch(0.965_0.01_85)]/40 mb-4">
              Studio
            </p>
            <ul className="space-y-2.5">
              {["Press", "Rewards", "FAQ", "Careers"].map((l) => (
                <li key={l}>
                  <span className="font-sans text-xs text-[oklch(0.965_0.01_85)]/60 hover:text-[oklch(0.965_0.01_85)] transition-colors uppercase tracking-wider cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[oklch(0.965_0.01_85)]/40 mb-4">
              Follow
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-xs text-[oklch(0.965_0.01_85)]/60 hover:text-[oklch(0.965_0.01_85)] transition-colors uppercase tracking-wider"
              >
                <SiInstagram className="w-3.5 h-3.5" />
                Instagram
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-xs text-[oklch(0.965_0.01_85)]/60 hover:text-[oklch(0.965_0.01_85)] transition-colors uppercase tracking-wider"
              >
                <SiWhatsapp className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[oklch(0.965_0.01_85)]/40 mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (l) => (
                  <li key={l}>
                    <span className="font-sans text-xs text-[oklch(0.965_0.01_85)]/60 hover:text-[oklch(0.965_0.01_85)] transition-colors uppercase tracking-wider cursor-pointer">
                      {l}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[oklch(0.965_0.01_85)]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[oklch(0.965_0.01_85)]/30">
            © {year} Core Artistry, in Motion. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] uppercase tracking-widest text-[oklch(0.965_0.01_85)]/30 hover:text-[oklch(0.965_0.01_85)]/60 transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
