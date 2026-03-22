import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                GROUNDED
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Melbourne&apos;s Northern Suburbs Sparkie.
              <br />
              Trusted by 500+ homeowners.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col sm:items-center gap-3">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Quick Links</div>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Licence */}
          <div className="sm:text-right">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Legal</div>
            <p className="text-sm text-gray-400">
              Licensed Electrical Contractor
            </p>
            <p className="text-xs text-gray-500 mt-1">
              VIC REC XXXXX
            </p>
            <p className="text-xs text-gray-500">
              ABN: XX XXX XXX XXX
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>&copy; 2026 Grounded Electrical. All rights reserved.</span>
          <span>
            Website by{" "}
            <a
              href="https://pixelpundit.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:text-accent font-semibold transition-colors"
            >
              Pixel Pundit
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
