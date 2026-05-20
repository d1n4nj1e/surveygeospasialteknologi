import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/sewa-alat", label: "Sewa Alat" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md ring-1 ring-hairline">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-brand-blue"
              activeProps={{ className: "text-sm font-medium text-ink hover:text-brand-blue" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden size-9 grid place-items-center rounded-md ring-1 ring-hairline"
        >
          <span className="flex flex-col gap-1">
            <span className="block w-4 h-px bg-ink" />
            <span className="block w-4 h-px bg-ink" />
            <span className="block w-4 h-px bg-ink" />
          </span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-hairline bg-surface">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-muted hover:text-brand-blue"
                activeProps={{ className: "text-sm font-medium text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
