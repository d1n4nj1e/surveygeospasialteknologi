import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ShieldCheck, Truck, HardHat } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EquipmentCard } from "@/components/site/EquipmentCard";
import { WhatsAppIcon, waLink } from "@/components/site/WhatsAppCTA";
import { equipment } from "@/lib/equipment";
import heroImg from "@/assets/hero-surveyor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PT Survey Geospasial Teknologi — Sewa Alat Survey Sorowako" },
      {
        name: "description",
        content:
          "Sewa Total Station Leica, GNSS RTK, dan aksesoris survey di Sorowako. Peralatan terkalibrasi, dukungan teknis lapangan, antar-jemput area Luwu Timur.",
      },
      { property: "og:title", content: "Presisi tinggi untuk medan tangguh Sulawesi" },
      {
        property: "og:description",
        content:
          "Mitra rental alat survey profesional untuk konstruksi dan pertambangan di area Vale, Sorowako.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = equipment.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-surface py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[56ch]">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">
              Sorowako · Luwu Timur · Vale Area
            </span>
            <h1 className="text-4xl md:text-6xl font-medium text-ink tracking-tight leading-none text-balance mb-8">
              Presisi tinggi untuk medan tangguh Sulawesi.
            </h1>
            <p className="text-base md:text-lg text-ink-muted text-pretty mb-10">
              Penyedia layanan sewa alat survey profesional untuk mendukung
              operasional tambang dan infrastruktur di area Vale, Sorowako.
              Peralatan terkalibrasi dengan dukungan teknis lapangan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/sewa-alat"
                className="bg-brand-blue text-white text-sm font-medium py-2.5 pr-4 pl-3 rounded flex items-center gap-2 ring-1 ring-brand-blue transition-transform active:scale-[0.98] hover:opacity-90"
              >
                <Calendar className="size-4 shrink-0" strokeWidth={1.5} />
                Katalog Alat
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ink text-sm font-medium py-2.5 pr-4 pl-3 rounded flex items-center gap-2 ring-1 ring-hairline hover:bg-surface transition-colors"
              >
                Konsultasi Teknis
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="mt-16">
            <div className="w-full aspect-[21/9] bg-white outline-1 -outline-offset-1 outline-hairline rounded-xl overflow-hidden">
              <img
                src={heroImg}
                alt="Surveyor mengoperasikan total station di area tambang Sorowako"
                width={1920}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured equipment */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-[48ch]">
              <h2 className="text-3xl font-medium text-ink tracking-tight text-balance mb-4">
                Inventaris Alat Survey
              </h2>
              <p className="text-sm text-ink-muted text-pretty">
                Pilihan alat terbaik yang selalu dalam kondisi prima dan
                terkalibrasi secara berkala.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Total Station", "GNSS RTK", "Level"].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 bg-surface text-ink-muted text-xs font-medium rounded-full ring-1 ring-hairline"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((e) => (
              <EquipmentCard key={e.id} item={e} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/sewa-alat"
              className="text-sm font-medium text-brand-blue inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Lihat seluruh katalog
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-surface py-24 border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-ink tracking-tight text-balance mb-16 max-w-[36ch]">
            Mitra terpercaya untuk pekerjaan presisi.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Kalibrasi rutin",
                body: "Setiap unit melewati pengecekan dan kalibrasi berkala agar data lapangan selalu valid.",
              },
              {
                icon: Truck,
                title: "Antar-jemput Sorowako",
                body: "Layanan pengiriman alat langsung ke site Anda di Sorowako, Towuti, dan sekitarnya.",
              },
              {
                icon: Calendar,
                title: "Sewa fleksibel",
                body: "Sewa harian, mingguan, atau bulanan sesuai durasi proyek—tanpa biaya tersembunyi.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-xl ring-1 ring-hairline">
                <div className="size-10 rounded-md bg-brand-green/10 text-brand-green grid place-items-center mb-6">
                  <f.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-ink-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-green/10 ring-1 ring-white/10 rounded-2xl p-8 md:p-16 overflow-hidden relative">
            <div className="relative z-10 max-w-[56ch]">
              <h2 className="text-3xl font-medium text-white tracking-tight text-balance mb-6">
                Siap mendampingi proyek Anda di Luwu Timur?
              </h2>
              <p className="text-white/60 text-pretty mb-10">
                Hubungi tim teknis kami untuk ketersediaan alat dan konsultasi
                spesifikasi. Kami menyediakan layanan antar-jemput alat untuk
                area Sorowako dan sekitarnya.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white py-3 pr-6 pl-4 rounded-md font-medium text-sm transition-transform active:scale-95 hover:opacity-95"
              >
                <WhatsAppIcon />
                Chat WhatsApp Sales Teknis
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 size-80 bg-brand-blue opacity-20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
