import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EquipmentCard } from "@/components/site/EquipmentCard";
import { equipment, categories, type EquipmentCategory } from "@/lib/equipment";

export const Route = createFileRoute("/sewa-alat")({
  head: () => ({
    meta: [
      { title: "Sewa Alat Survey — PT Survey Geospasial Teknologi" },
      {
        name: "description",
        content:
          "Katalog lengkap alat survey untuk disewa: Total Station Leica, GNSS RTK, Digital Level, prisma, tripod, dan rambu ukur di Sorowako.",
      },
      { property: "og:title", content: "Katalog Sewa Alat Survey" },
      {
        property: "og:description",
        content:
          "Pilih alat survey terkalibrasi sesuai kebutuhan proyek Anda—harga harian, tersedia di Sorowako.",
      },
    ],
  }),
  component: RentalPage,
});

type Filter = "Semua" | EquipmentCategory;
type PriceFilter = "all" | "low" | "mid" | "high";

function RentalPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Filter>("Semua");
  const [price, setPrice] = useState<PriceFilter>("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const filtered = useMemo(() => {
    return equipment.filter((e) => {
      if (cat !== "Semua" && e.category !== cat) return false;
      if (onlyAvailable && !e.available) return false;
      if (price === "low" && e.pricePerDay >= 250_000) return false;
      if (price === "mid" && (e.pricePerDay < 250_000 || e.pricePerDay > 1_000_000)) return false;
      if (price === "high" && e.pricePerDay <= 1_000_000) return false;
      const q = query.trim().toLowerCase();
      if (q && !`${e.name} ${e.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, cat, price, onlyAvailable]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">
            Katalog
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-ink tracking-tight max-w-[24ch] mb-6">
            Sewa alat survey untuk proyek Anda.
          </h1>
          <p className="text-base text-ink-muted max-w-[60ch]">
            Filter berdasarkan jenis alat, rentang harga, dan ketersediaan.
            Tarif tertera adalah harga harian. Diskon tersedia untuk sewa
            mingguan dan bulanan.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-ink-subtle" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari alat (mis. Total Station, GNSS)…"
                className="w-full bg-surface ring-1 ring-hairline rounded-md py-3 pl-11 pr-4 text-sm placeholder:text-ink-subtle focus:outline-none focus:ring-brand-blue"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(["Semua", ...categories] as Filter[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full ring-1 transition-colors ${
                    cat === c
                      ? "bg-brand-blue text-white ring-brand-blue"
                      : "bg-surface text-ink-muted ring-hairline hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 items-center text-sm">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-ink-muted text-xs uppercase tracking-wider">Harga:</span>
                {([
                  { id: "all", label: "Semua" },
                  { id: "low", label: "< 250rb" },
                  { id: "mid", label: "250rb–1jt" },
                  { id: "high", label: "> 1jt" },
                ] as { id: PriceFilter; label: string }[]).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPrice(p.id)}
                    className={`px-2.5 py-1 text-xs rounded ring-1 transition-colors ${
                      price === p.id
                        ? "bg-ink text-white ring-ink"
                        : "ring-hairline text-ink-muted hover:text-ink"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) => setOnlyAvailable(e.target.checked)}
                  className="size-4 accent-brand-blue"
                />
                <span className="text-xs text-ink-muted">Hanya yang tersedia</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-ink-muted mb-8">
            Menampilkan {filtered.length} dari {equipment.length} alat
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((e) => (
                <EquipmentCard key={e.id} item={e} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-ink-muted text-sm">
                Tidak ada alat yang cocok dengan filter Anda.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
