import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Halaman yang Anda cari tidak ada atau telah dipindahkan. Silakan kembali ke beranda.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-blue text-white px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 active:scale-95"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-ink">
          Terjadi kesalahan
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          Terjadi masalah saat memuat halaman. Silakan coba menyegarkan atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand-blue text-white px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 active:scale-95"
          >
            Coba Lagi
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-hairline bg-white text-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Sewa Total Station Leica, GNSS RTK, level, dan aksesoris survey di Sorowako, Luwu Timur. Peralatan terkalibrasi dengan dukungan teknis lapangan.",
      },
      { name: "author", content: "PT Survey Geospasial Teknologi" },
      { property: "og:title", content: "PT Survey Geospasial Teknologi — Sewa Alat Survey Sorowako" },
      {
        property: "og:description",
        content:
          "Penyedia layanan sewa alat survey profesional untuk konstruksi dan pertambangan di area Vale, Sorowako.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PT Survey Geospasial Teknologi — Sewa Alat Survey Sorowako" },
      { name: "twitter:description", content: "Penyedia layanan sewa alat survey profesional untuk konstruksi dan pertambangan di area Vale, Sorowako." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PT Survey Geospasial Teknologi",
          description:
            "Penyedia layanan sewa alat survey dan jasa surveyor di Sorowako, Luwu Timur.",
          areaServed: "Sorowako, Luwu Timur, Sulawesi Selatan",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Magani",
            addressLocality: "Sorowako",
            addressRegion: "Sulawesi Selatan",
            postalCode: "92983",
            addressCountry: "ID",
          },
          telephone: "+6281244550000",
          openingHours: "Mo-Sa 08:00-17:00",
        }),
      },
    ],

    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}

