import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — PT Survey Geospasial Teknologi" },
      {
        name: "description",
        content:
          "PT Survey Geospasial Teknologi adalah penyedia layanan sewa alat survey di Sorowako, melayani kontraktor konstruksi dan surveyor di area Vale dan Luwu Timur.",
      },
      { property: "og:title", content: "Tentang PT Survey Geospasial Teknologi" },
      {
        property: "og:description",
        content: "Pengalaman lapangan di pertambangan dan konstruksi Sulawesi Selatan.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-ink tracking-tight max-w-[24ch] mb-6">
            Mendukung pekerjaan presisi di Sulawesi Selatan.
          </h1>
          <p className="text-base md:text-lg text-ink-muted max-w-[60ch] text-pretty">
            PT Survey Geospasial Teknologi adalah perusahaan lokal yang fokus
            pada penyediaan alat survey berkualitas untuk kontraktor
            konstruksi, surveyor independen, serta mitra pertambangan di area
            Vale, Sorowako, dan sekitarnya.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-brand-blue mb-4 font-semibold">
              Cerita Kami
            </h2>
            <h3 className="text-2xl font-medium text-ink mb-6 text-balance">
              Lahir dari kebutuhan lapangan, tumbuh bersama industri.
            </h3>
            <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
              <p>
                Berbasis di Sorowako, kami memahami betul kebutuhan presisi
                untuk pekerjaan di medan tambang nikel dan proyek
                infrastruktur sekitar. Mulai dari satu unit total station,
                kini kami melayani puluhan proyek setiap bulannya.
              </p>
              <p>
                Tim kami terdiri dari surveyor berpengalaman yang siap
                memberikan dukungan teknis—bukan sekadar menyewakan alat,
                tetapi memastikan alat tersebut bekerja optimal di lokasi
                Anda.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-brand-blue mb-4 font-semibold">
              Nilai Kami
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Presisi tanpa kompromi",
                  body: "Setiap alat dikalibrasi dan diperiksa sebelum diserahkan ke klien.",
                },
                {
                  title: "Cepat tanggap",
                  body: "Lokasi kami di Sorowako memungkinkan mobilisasi cepat ke site Anda.",
                },
                {
                  title: "Transparan",
                  body: "Tarif jelas, tanpa biaya tersembunyi, dengan kontrak sewa yang adil.",
                },
                {
                  title: "Dukungan teknis",
                  body: "Tim kami siap membantu via WhatsApp atau kunjungan lapangan bila perlu.",
                },
              ].map((v) => (
                <li key={v.title} className="border-l-2 border-brand-green pl-4">
                  <h4 className="text-sm font-semibold text-ink mb-1">{v.title}</h4>
                  <p className="text-sm text-ink-muted">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "5+", v: "Tahun pengalaman" },
            { k: "50+", v: "Proyek per tahun" },
            { k: "24/7", v: "Dukungan WhatsApp" },
            { k: "100%", v: "Alat terkalibrasi" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-3xl md:text-4xl font-medium text-ink tracking-tight mb-2">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-wider text-ink-muted">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
