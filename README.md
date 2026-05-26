# PT Survey Geospasial Teknologi

Platform penyediaan layanan sewa alat survey dan jasa surveyor profesional di Sorowako, Luwu Timur, Sulawesi Selatan.

## 🎯 Deskripsi

Website ini menyediakan katalog lengkap peralatan survey berkualitas tinggi (Total Station, GNSS RTK, Digital Level, dan aksesoris) yang dapat disewa harian, mingguan, atau bulanan. Selain itu, kami juga menawarkan jasa surveyor profesional dengan tim bersertifikat dan berpengalaman di bidang pertambangan dan infrastruktur.

## ✨ Fitur Utama

- **Katalog Alat Survey**: Daftar lengkap peralatan terkalibrasi dengan spesifikasi detail dan harga transparan
- **Filter Pencarian**: Filter berdasarkan kategori alat, rentang harga, dan ketersediaan
- **Jasa Surveyor**: Layanan penuh surveyor bersertifikat untuk berbagai kebutuhan pengukuran
- **Kontak Terintegrasi**: Form kontak dan WhatsApp messaging untuk komunikasi cepat dengan tim
- **Desain Responsif**: Optimal di desktop, tablet, dan mobile devices
- **SEO Optimized**: Meta tags lengkap, structured data JSON-LD, dan sitemap XML
- **Performa Tinggi**: Built dengan TanStack Start dan Cloudflare Edge Runtime

## 🛠️ Teknologi

- **Framework**: TanStack Start (React 18)
- **Router**: TanStack Router
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI dengan custom theme
- **Validasi**: Zod schema validation
- **Build & Deploy**: Vite dengan Cloudflare Wrangler
- **Package Manager**: Bun

## 📋 Instalasi & Setup Lokal

### Prerequisites

- Node.js 18+ atau Bun runtime
- Git

### Langkah-langkah

1. Clone repository

   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. Install dependencies

   ```bash
   bun install
   ```

3. Jalankan development server

   ```bash
   bun dev
   ```

   Server akan berjalan di `http://localhost:5173`

4. Build untuk production

   ```bash
   bun run build
   ```

5. Preview build

   ```bash
   bun run preview
   ```

## 📁 Struktur Proyek

```
src/
├── routes/                 # Halaman utama
│   ├── __root.tsx         # Root layout dengan meta & styling global
│   ├── index.tsx          # Halaman beranda
│   ├── sewa-alat.tsx      # Katalog penawaran alat
│   ├── jasa-surveyor.tsx  # Halaman jasa surveyor
│   ├── tentang-kami.tsx   # Tentang perusahaan
│   ├── kontak.tsx         # Form kontak
│   └── sitemap[.]xml.ts   # XML sitemap untuk SEO
├── components/
│   ├── site/              # Komponen spesifik website
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── EquipmentCard.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── WhatsAppCTA.tsx
│   └── ui/                # Radix UI component library
├── lib/
│   ├── equipment.ts       # Data katalog alat survey
│   ├── utils.ts           # Utility functions
│   └── error-page.ts      # Error handling
├── assets/                # Gambar dan media
├── styles.css             # Global styling
└── router.tsx             # Router configuration
```

## 🎨 Color System

Theme custom yang mencerminkan profesionalisme dan kepercayaan:

- **Brand Blue**: `#0066CC` - Primary actions
- **Brand Green**: `#10B981` - Accents & highlights
- **WhatsApp**: `#25D366` - Floating CTA
- **Ink**: `#1F2937` - Text utama
- **Surface**: `#F9FAFB` - Background sections

## 📱 Halaman-halaman

### 1. Beranda (`/`)
- Hero section dengan value proposition
- Featured equipment showcase
- Statistik dan social proof
- Call-to-action buttons

### 2. Katalog Sewa Alat (`/sewa-alat`)
- Daftar lengkap peralatan
- Real-time filter dan search
- Informasi pricing dan availability
- Detail spesifikasi per alat

### 3. Jasa Surveyor (`/jasa-surveyor`)
- Deskripsi layanan surveyor
- Jenis pekerjaan yang ditawarkan
- Tim dan pengalaman
- Benefit dan garansi

### 4. Tentang Kami (`/tentang-kami`)
- Sejarah dan latar belakang perusahaan
- Nilai-nilai perusahaan
- Tim dan testimonial

### 5. Kontak (`/kontak`)
- Form kontak dengan validasi
- Informasi kantor (alamat, jam operasional)
- Integrasi WhatsApp messaging
- Peta lokasi

## 🔌 API & Integrasi

### WhatsApp Integration
Semua CTA menggunakan WhatsApp Business API untuk direct messaging:

```typescript
waLink(message?) // Generates WhatsApp chat link
```

Nomor kantor terconfigurasi di: `src/components/site/WhatsAppCTA.tsx`

### Validasi Form
Form kontak menggunakan Zod untuk type-safe validation:

```typescript
const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100),
  email: z.string().trim().email("Email tidak valid").max(255),
  phone: z.string().trim().min(6, "No HP tidak valid").max(20),
  message: z.string().trim().min(5, "Pesan terlalu pendek").max(1000),
});
```

## 🚀 Deployment

### Deploy ke Cloudflare Pages

1. Pastikan memiliki Cloudflare account
2. Connect repository GitHub ke Cloudflare Pages
3. Build command: `bun run build`
4. Output directory: `dist`
5. Deploy secara otomatis pada setiap push ke main branch

### Environment Variables

Tidak ada secrets yang diperlukan. Semua konfigurasi sudah ter-embed di code.

## 🔍 SEO & Meta

- ✅ Responsive meta tags di setiap halaman
- ✅ Open Graph tags untuk social media sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ XML sitemap auto-generated
- ✅ Mobile viewport optimization
- ✅ Indonesian language markup (`lang="id"`)

## 📋 Checklist Fitur

- ✅ Homepage dengan hero dan featured items
- ✅ Katalog alat dengan filtering & search
- ✅ Form kontak dengan validasi
- ✅ WhatsApp integration untuk direct messaging
- ✅ Pages: Beranda, Katalog, Jasa, Tentang, Kontak
- ✅ Responsive design (mobile-first)
- ✅ Error pages (404, error boundaries)
- ✅ Footer dengan navigasi
- ✅ Admin-friendly product data management
- ✅ SEO optimization
- ✅ Performance optimization (edge runtime)

## 🐛 Testing Lokal

Sebelum pushing ke production, pastikan:

1. **Mobile responsiveness**: Test di berbagai ukuran layar
2. **WhatsApp links**: Klik link WhatsApp untuk verifikasi
3. **Form validation**: Submit form dengan data lengkap dan tidak lengkap
4. **Navigation**: Semua internal links berfungsi
5. **Load time**: Check performance di DevTools

## 🤝 Kontribusi

Untuk kontribusi:

1. Create branch feature (`git checkout -b feature/nama-fitur`)
2. Commit changes (`git commit -m 'Deskripsi perubahan'`)
3. Push ke branch (`git push origin feature/nama-fitur`)
4. Open Pull Request

## 📝 License

© 2026 PT Survey Geospasial Teknologi. All rights reserved.

## 📞 Support

Untuk pertanyaan atau dukungan teknis, hubungi tim kami:

- **WhatsApp**: +62 853-4270-6705
- **Email**: ruswandiyusuff@gmail.com
- **Lokasi**: Jl. Ebony Raya Blok C1/4, Sorowako, Kec. Nuha, Kabupaten Luwu Timur, Sulawesi Selatan 92983

---

**Last Updated**: 2026 | Built with ❤️ for precision surveying
