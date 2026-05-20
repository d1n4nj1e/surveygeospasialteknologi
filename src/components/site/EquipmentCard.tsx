import { Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { type Equipment, formatIDR } from "@/lib/equipment";
import { waLink } from "./WhatsAppCTA";

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <div className="group bg-surface ring-1 ring-hairline rounded-xl p-4 flex flex-col">
      <div className="w-full aspect-square bg-white outline-1 -outline-offset-1 outline-hairline rounded-[12px] overflow-hidden mb-6">
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
          <span
            className={`text-xs font-medium shrink-0 ${
              item.available ? "text-brand-green" : "text-ink-subtle"
            }`}
          >
            {item.available ? "Tersedia" : "Tersewa"}
          </span>
        </div>
        <p className="text-xs text-ink-muted mb-4 flex-1">{item.description}</p>
        <div className="pt-4 border-t border-hairline flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-ink-subtle block">
              Mulai dari
            </span>
            <span className="text-sm font-semibold text-ink">
              {formatIDR(item.pricePerDay)}{" "}
              <span className="text-[10px] font-normal text-ink-subtle">/ hari</span>
            </span>
          </div>
          {item.available ? (
            <a
              href={waLink(`Halo, saya ingin menyewa ${item.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sewa ${item.name}`}
              className="size-8 bg-brand-blue text-white rounded-md grid place-items-center ring-1 ring-brand-blue transition-transform active:scale-90 hover:opacity-90"
            >
              <Plus className="size-4" strokeWidth={2} />
            </a>
          ) : (
            <button
              disabled
              className="size-8 bg-ink/10 text-ink-subtle rounded-md grid place-items-center ring-1 ring-hairline cursor-not-allowed"
            >
              <Plus className="size-4" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
      <Link
        to="/sewa-alat"
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        Detail
      </Link>
    </div>
  );
}
