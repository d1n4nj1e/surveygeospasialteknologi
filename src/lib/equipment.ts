import totalStation from "@/assets/eq-total-station.jpg";
import gnssRtk from "@/assets/eq-gnss-rtk.jpg";
import digitalLevel from "@/assets/eq-digital-level.jpg";
import prism from "@/assets/eq-prism.jpg";
import tripod from "@/assets/eq-tripod.jpg";
import rod from "@/assets/eq-rod.jpg";

export type EquipmentCategory =
  | "Total Station"
  | "GNSS RTK"
  | "Level"
  | "Aksesoris";

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  description: string;
  specs: { label: string; value: string }[];
  pricePerDay: number;
  available: boolean;
  image: string;
}

export const equipment: Equipment[] = [
  {
    id: "leica-ts06-plus",
    name: "Leica Total Station TS06 Plus",
    category: "Total Station",
    description:
      "Akurasi sudut 2\" dengan jangkauan prism hingga 3.500 m. Ideal untuk pekerjaan stake-out konstruksi presisi tinggi.",
    specs: [
      { label: "Akurasi", value: "2\"" },
      { label: "Jangkauan Prism", value: "3.500 m" },
      { label: "Tampilan", value: "QVGA color" },
    ],
    pricePerDay: 1250000,
    available: true,
    image: totalStation,
  },
  {
    id: "hi-target-v30",
    name: "GNSS RTK Hi-Target V30",
    category: "GNSS RTK",
    description:
      "220 channel, dual frequency, mendukung CORS. Survei topografi dan stake-out cepat dengan akurasi sentimeter.",
    specs: [
      { label: "Channel", value: "220" },
      { label: "Frekuensi", value: "Dual L1/L2" },
      { label: "Akurasi RTK", value: "8 mm + 1 ppm" },
    ],
    pricePerDay: 1500000,
    available: true,
    image: gnssRtk,
  },
  {
    id: "leica-ls10",
    name: "Digital Level Leica LS10",
    category: "Level",
    description:
      "Akurasi 0,3 mm untuk leveling presisi tinggi pada struktur kritis dan deformasi monitoring.",
    specs: [
      { label: "Akurasi", value: "0,3 mm / km" },
      { label: "Pembesaran", value: "32×" },
      { label: "Memori", value: "Internal" },
    ],
    pricePerDay: 950000,
    available: false,
    image: digitalLevel,
  },
  {
    id: "prism-set",
    name: "Prisma Reflektor + Holder",
    category: "Aksesoris",
    description:
      "Set prisma sirkular dengan holder dan target plate. Konstanta 0 mm, cocok untuk semua merek total station.",
    specs: [
      { label: "Konstanta", value: "0 mm" },
      { label: "Centering", value: "1,0 mm" },
      { label: "Kelengkapan", value: "Holder + target" },
    ],
    pricePerDay: 150000,
    available: true,
    image: prism,
  },
  {
    id: "tripod-heavy",
    name: "Tripod Aluminium Heavy Duty",
    category: "Aksesoris",
    description:
      "Tripod aluminium dengan kepala datar untuk total station dan level. Stabil untuk medan tambang dan konstruksi berat.",
    specs: [
      { label: "Material", value: "Aluminium" },
      { label: "Kepala", value: "Flat 5/8\"" },
      { label: "Tinggi", value: "1,05–1,70 m" },
    ],
    pricePerDay: 100000,
    available: true,
    image: tripod,
  },
  {
    id: "telescopic-rod",
    name: "Rambu Ukur Teleskopik 5 m",
    category: "Aksesoris",
    description:
      "Rambu ukur teleskopik 5 meter dengan skala E-pattern jelas, tahan banting untuk pemakaian lapangan.",
    specs: [
      { label: "Panjang", value: "5 m" },
      { label: "Material", value: "Aluminium" },
      { label: "Skala", value: "E-pattern" },
    ],
    pricePerDay: 75000,
    available: true,
    image: rod,
  },
];

export const categories: EquipmentCategory[] = [
  "Total Station",
  "GNSS RTK",
  "Level",
  "Aksesoris",
];

export function formatIDR(n: number): string {
  return "IDR " + n.toLocaleString("id-ID");
}
