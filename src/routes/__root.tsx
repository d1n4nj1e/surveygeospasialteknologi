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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "PT Survey Geospasial Teknologi — Sewa Alat Survey Sorowako" },
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
      { name: "description", content: "Survey Gear Pro is a website for renting survey equipment and hiring professional surveyors." },
      { property: "og:description", content: "Survey Gear Pro is a website for renting survey equipment and hiring professional surveyors." },
      { name: "twitter:description", content: "Survey Gear Pro is a website for renting survey equipment and hiring professional surveyors." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/99eadedd-95be-416e-bd89-72e8112876fd/id-preview-a0ea000c--ebc4525a-e0f8-480b-a264-cac6a4151c3a.lovable.app-1779689620207.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/99eadedd-95be-416e-bd89-72e8112876fd/id-preview-a0ea000c--ebc4525a-e0f8-480b-a264-cac6a4151c3a.lovable.app-1779689620207.png" },
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

