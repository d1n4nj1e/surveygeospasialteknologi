import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-hairline pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-ink grid place-items-center rounded-sm">
                <div className="size-3 border border-white/30 rounded-full" />
              </div>
              <span className="text-xs font-semibold tracking-tight text-ink uppercase">
                Survey Geospasial
              </span>
            </div>
            <p className="text-sm text-ink-muted max-w-[32ch] leading-relaxed">
              Jl. Magani, Sorowako, Kec. Nuha, Kabupaten Luwu Timur,
              Sulawesi Selatan 92983.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h4 className="text-xs font-semibold text-ink uppercase tracking-wider mb-6">
              Navigasi
            </h4>
            <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
              <Link to="/sewa-alat" className="text-sm text-ink-muted hover:text-brand-blue">Sewa Alat</Link>
              <Link to="/jasa-surveyor" className="text-sm text-ink-muted hover:text-brand-blue">Jasa Surveyor</Link>
              <Link to="/tentang-kami" className="text-sm text-ink-muted hover:text-brand-blue">Tentang Kami</Link>
              <Link to="/kontak" className="text-sm text-ink-muted hover:text-brand-blue">Kontak</Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-ink-subtle">
            © {new Date().getFullYear()} PT Survey Geospasial Teknologi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-medium text-ink-subtle px-2 py-0.5 ring-1 ring-hairline rounded uppercase">
              Kalibrasi Berkala
            </span>
            <span className="text-[10px] font-medium text-ink-subtle px-2 py-0.5 ring-1 ring-hairline rounded uppercase">
              K3 Pro-Level
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
