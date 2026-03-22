import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-extrabold text-lg mb-2">
              <Zap className="h-5 w-5 text-primary fill-primary" />
              GROUNDED
            </div>
            <p className="text-gray-500 text-sm">
              Melbourne&apos;s Northern Suburbs Sparkie
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-6 sm:justify-center">
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
            <p className="text-sm text-gray-400">
              Licensed Electrical Contractor
            </p>
            <p className="text-xs text-gray-500">
              VIC REC XXXXX · ABN: XX XXX XXX XXX
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>&copy; 2026 Grounded Electrical. All rights reserved.</span>
          <span>
            Website by{" "}
            <a
              href="https://pixelpundit.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline font-medium"
            >
              Pixel Pundit
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
