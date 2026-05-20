import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon, waLink, WA_DISPLAY } from "@/components/site/WhatsAppCTA";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — PT Survey Geospasial Teknologi" },
      {
        name: "description",
        content:
          "Hubungi PT Survey Geospasial Teknologi di Sorowako. Form kontak, WhatsApp, dan peta lokasi kantor kami di Luwu Timur.",
      },
      { property: "og:title", content: "Hubungi Kami" },
      {
        property: "og:description",
        content: "Tim teknis kami siap membantu kebutuhan sewa alat survey Anda.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100),
  email: z.string().trim().email("Email tidak valid").max(255),
  phone: z.string().trim().min(6, "No HP tidak valid").max(20),
  message: z.string().trim().min(5, "Pesan terlalu pendek").max(1000),
});

function ContactPage() {
  const [status, setStatus] = useState<
    { type: "idle" } | { type: "error"; msg: string } | { type: "ok" }
  >({ type: "idle" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus({
        type: "error",
        msg: parsed.error.issues[0]?.message ?? "Periksa kembali isian Anda.",
      });
      return;
    }
    const { name, phone, message } = parsed.data;
    const text = `Halo, saya ${name} (${phone}).\n\n${message}`;
    window.open(waLink(text), "_blank", "noopener");
    setStatus({ type: "ok" });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">
            Kontak
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-ink tracking-tight max-w-[24ch] mb-6">
            Mari bicarakan kebutuhan proyek Anda.
          </h1>
          <p className="text-base text-ink-muted max-w-[60ch]">
            Tim kami merespons cepat via WhatsApp. Untuk pertanyaan formal,
            silakan gunakan formulir di bawah ini.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-brand-blue mb-6 font-semibold">
                Informasi Kontak
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <MapPin className="size-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1">Alamat</div>
                    <p className="text-sm text-ink-muted">
                      Jl. Magani, Sorowako, Kec. Nuha, Kabupaten Luwu Timur,
                      Sulawesi Selatan 92983
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="size-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1">Telepon / WhatsApp</div>
                    <p className="text-sm text-ink-muted">{WA_DISPLAY}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="size-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1">Email</div>
                    <p className="text-sm text-ink-muted">info@surveygeospasial.id</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="size-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1">Jam Operasional</div>
                    <p className="text-sm text-ink-muted">
                      Senin – Sabtu, 08.00 – 17.00 WITA
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white py-3 pr-6 pl-4 rounded-md font-medium text-sm hover:opacity-95 transition-opacity"
            >
              <WhatsAppIcon />
              Chat langsung via WhatsApp
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-surface ring-1 ring-hairline rounded-2xl p-6 md:p-10 space-y-5"
          >
            <h2 className="text-lg font-semibold text-ink">Kirim Pesan</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nama" name="name" required />
              <Field label="No. HP" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="text-xs font-medium text-ink-muted uppercase tracking-wider block mb-2">
                Pesan
              </label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1000}
                className="w-full bg-white ring-1 ring-hairline rounded-md p-3 text-sm focus:outline-none focus:ring-brand-blue resize-none"
                placeholder="Ceritakan kebutuhan alat dan durasi sewa…"
              />
            </div>
            {status.type === "error" && (
              <p className="text-xs text-destructive">{status.msg}</p>
            )}
            {status.type === "ok" && (
              <p className="text-xs text-brand-green">
                Membuka WhatsApp… Terima kasih, kami segera membalas.
              </p>
            )}
            <button
              type="submit"
              className="w-full md:w-auto bg-brand-blue text-white text-sm font-medium py-3 px-6 rounded-md ring-1 ring-brand-blue hover:opacity-90 transition-opacity"
            >
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="bg-surface py-16 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs uppercase tracking-widest text-brand-blue mb-6 font-semibold">
            Lokasi
          </h2>
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-hairline bg-white">
            <iframe
              title="Lokasi PT Survey Geospasial Teknologi di Sorowako"
              src="https://www.google.com/maps?q=Sorowako,+Nuha,+Luwu+Timur,+Sulawesi+Selatan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-muted uppercase tracking-wider block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="w-full bg-white ring-1 ring-hairline rounded-md p-3 text-sm focus:outline-none focus:ring-brand-blue"
      />
    </div>
  );
}
