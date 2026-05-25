import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Ruler, Mountain, Building2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon, waLink } from "@/components/site/WhatsAppCTA";

export const Route = createFileRoute("/jasa-surveyor")({
  head: () => ({
    meta: [
      { title: "Jasa Surveyor — PT Survey Geospasial Teknologi" },
      {
        name: "description",
        content:
          "Sewa jasa surveyor profesional di Sorowako: pengukuran topografi, stake-out konstruksi, GNSS RTK, dan monitoring tambang area Vale & Luwu Timur.",
      },
      { property: "og:title", content: "Jasa Surveyor Profesional Sorowako" },
      {
        property: "og:description",
        content:
          "Tim surveyor berpengalaman siap mendukung proyek konstruksi dan pertambangan Anda.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Ruler,
    title: "Pengukuran Topografi",
    body: "Pemetaan situasi lahan, kontur, dan profil melintang untuk perencanaan proyek konstruksi maupun tambang.",
  },
  {
    icon: Building2,
    title: "Stake-Out Konstruksi",
    body: "Pemasangan titik bantu, as bangunan, dan elevasi sesuai gambar kerja dengan akurasi milimeter.",
  },
  {
    icon: MapPin,
    title: "Survey GNSS / RTK",
    body: "Pengukuran posisi presisi sentimeter berbasis CORS, ideal untuk kavling, batas lahan, dan kontrol horizontal.",
  },
  {
    icon: Mountain,
    title: "Monitoring Tambang",
    body: "Survey progress tambang, perhitungan volume galian/timbunan, dan monitoring deformasi lereng.",
  },
];

const includes = [
  "Surveyor bersertifikat & berpengalaman lapangan",
  "Alat ukur lengkap & terkalibrasi",
  "Pengolahan data & laporan (PDF/DWG/CSV)",
  "Mobilisasi cepat area Sorowako & Luwu Timur",
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">
            Jasa Surveyor
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-ink tracking-tight max-w-[26ch] mb-6 text-balance">
            Butuh tukang ukur? Tim surveyor kami siap turun lapangan.
          </h1>
          <p className="text-base md:text-lg text-ink-muted max-w-[60ch] text-pretty mb-10">
            Selain menyewakan alat, kami juga menyediakan jasa surveyor
            profesional. Cocok untuk kontraktor yang butuh tim ukur sementara
            atau owner proyek yang ingin hasil pengukuran siap pakai.
          </p>
          <a
            href={waLink("Halo, saya ingin menanyakan jasa surveyor untuk proyek saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-white py-2.5 pr-5 pl-4 rounded-md font-medium text-sm transition-transform active:scale-95 hover:opacity-95"
          >
            <WhatsAppIcon className="size-4" />
            Konsultasi Kebutuhan Survey
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium text-ink tracking-tight text-balance mb-12 max-w-[36ch]">
            Layanan survey yang kami tangani.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-surface p-6 rounded-xl ring-1 ring-hairline">
                <div className="size-10 rounded-md bg-brand-blue/10 text-brand-blue grid place-items-center mb-6">
                  <s.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-brand-blue mb-4 font-semibold">
              Sudah termasuk
            </h2>
            <h3 className="text-2xl font-medium text-ink mb-6 text-balance">
              Paket jasa surveyor end-to-end.
            </h3>
            <p className="text-sm text-ink-muted">
              Anda fokus pada proyek, biarkan tim kami yang mengurus pengukuran
              hingga laporan akhir.
            </p>
          </div>
          <ul className="space-y-4">
            {includes.map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand-green shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-sm text-ink">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-green/10 ring-1 ring-white/10 rounded-2xl p-8 md:p-16">
            <h2 className="text-3xl font-medium text-white tracking-tight text-balance mb-6 max-w-[40ch]">
              Diskusikan kebutuhan survey proyek Anda.
            </h2>
            <p className="text-white/60 text-pretty mb-10 max-w-[56ch]">
              Kirimkan lokasi, lingkup pekerjaan, dan target waktu—tim teknis
              kami akan menyiapkan penawaran beserta rencana mobilisasi.
            </p>
            <a
              href={waLink("Halo, saya ingin menanyakan jasa surveyor untuk proyek saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white py-3 pr-6 pl-4 rounded-md font-medium text-sm transition-transform active:scale-95 hover:opacity-95"
            >
              <WhatsAppIcon />
              Minta Penawaran via WhatsApp
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
