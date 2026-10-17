import nusaPenidaImg from "@/assets/Nusa_Penida.jpg";
import ulunDanuImg from "@/assets/Pura_Ulun_Danu_Bratan.jpg";
import kecakImg from "@/assets/Tari_Kecak_Uluwatu.jpg";
import penglipuranImg from "@/assets/Desa_Panglipuran.jpg";

export type TourPackage = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { time: string; activity: string }[];
  notes: string[];
};

export const PICKUP_AREAS = [
  "Denpasar",
  "Sanur",
  "Kuta",
  "Seminyak",
  "Canggu",
  "Nusa Dua",
  "Jimbaran",
  "Ubud",
];

export const formatPrice = (price: number) =>
  `Rp ${price.toLocaleString("id-ID")}`;

export const packages: TourPackage[] = [
  {
    id: "nusa-penida",
    name: "Nusa Penida Island Tour",
    tagline: "Pantai tebing, laut biru, dan spot foto paling terkenal di Bali.",
    image: nusaPenidaImg,
    price: 550000,
    duration: "±12 jam (estimasi)",
    location: "Nusa Penida, Klungkung",
    highlights: [
      "Kelingking Beach",
      "Broken Beach",
      "Angel's Billabong",
      "Crystal Bay",
    ],
    included: [
      "Speedboat pulang pergi",
      "Transport selama tour",
      "Guide",
      "Tiket masuk destinasi",
    ],
    excluded: ["Makan", "Pengeluaran pribadi"],
    itinerary: [
      { time: "07.00", activity: "Jemput di hotel" },
      { time: "08.00", activity: "Berangkat dengan speedboat" },
      { time: "09.30", activity: "Kelingking Beach" },
      { time: "11.00", activity: "Broken Beach dan Angel's Billabong" },
      { time: "13.00", activity: "Makan siang (tidak termasuk)" },
      { time: "14.30", activity: "Crystal Bay" },
      { time: "16.00", activity: "Kembali ke Bali dengan speedboat" },
      { time: "18.00", activity: "Diantar kembali ke hotel" },
    ],
    notes: [
      "Angel's Billabong tergantung kondisi ombak dan pasang surut.",
      "Jalur turun di Kelingking cukup curam, pakai alas kaki yang nyaman.",
      "Jadwal bisa menyesuaikan cuaca dan kondisi laut.",
    ],
  },
  {
    id: "ulun-danu-bratan",
    name: "Pura Ulun Danu Bratan",
    tagline: "Pura di tepi danau dengan udara sejuk khas Bedugul.",
    image: ulunDanuImg,
    price: 350000,
    duration: "±10 jam (estimasi)",
    location: "Bedugul, Tabanan",
    highlights: [
      "Pura Ulun Danu Bratan",
      "Danau Bratan",
      "Taman di area pura",
      "Pasar Candikuning",
    ],
    included: ["Transport selama tour", "Guide", "Tiket masuk"],
    excluded: ["Makan", "Pengeluaran pribadi"],
    itinerary: [
      { time: "08.00", activity: "Jemput di hotel" },
      {
        time: "10.00",
        activity: "Tiba di Bedugul, keliling Pura Ulun Danu Bratan",
      },
      {
        time: "12.00",
        activity: "Makan siang (tidak termasuk) dan mampir ke Pasar Candikuning",
      },
      { time: "14.00", activity: "Perjalanan kembali" },
      { time: "16.30", activity: "Diantar kembali ke hotel" },
    ],
    notes: [
      "Udara di Bedugul sejuk, bawa jaket tipis.",
      "Pagi hari biasanya lebih sepi dan cerah.",
    ],
  },
  {
    id: "kecak-uluwatu",
    name: "Tari Kecak Uluwatu",
    tagline: "Nonton tari Kecak dengan latar sunset di tebing Uluwatu.",
    image: kecakImg,
    price: 400000,
    duration: "±6 jam, berangkat sore (estimasi)",
    location: "Uluwatu, Badung",
    highlights: [
      "Pura Luhur Uluwatu",
      "Tebing Uluwatu",
      "Pertunjukan Tari Kecak saat sunset",
    ],
    included: [
      "Transport selama tour",
      "Guide",
      "Tiket masuk pura",
      "Tiket pertunjukan Tari Kecak",
    ],
    excluded: ["Makan malam", "Pengeluaran pribadi"],
    itinerary: [
      { time: "15.00", activity: "Jemput di hotel" },
      { time: "16.30", activity: "Tiba di Uluwatu, jalan santai di area tebing" },
      { time: "18.00", activity: "Pertunjukan Tari Kecak (sekitar 1 jam)" },
      {
        time: "19.15",
        activity: "Selesai, bisa mampir makan malam (tidak termasuk)",
      },
      { time: "21.00", activity: "Diantar kembali ke hotel" },
    ],
    notes: [
      "Monyet di area Uluwatu suka mengambil barang, simpan kacamata dan HP dengan aman.",
      "Pakai pakaian sopan, sarung biasanya disediakan di pintu masuk pura.",
      "Jam pertunjukan mengikuti jadwal resmi.",
    ],
  },
  {
    id: "penglipuran",
    name: "Desa Penglipuran",
    tagline: "Desa adat yang rapi dan asri dengan rumah tradisional Bali.",
    image: penglipuranImg,
    price: 300000,
    duration: "±6 jam (estimasi)",
    location: "Bangli",
    highlights: [
      "Jalan utama Desa Penglipuran",
      "Rumah adat Bali",
      "Hutan Bambu Penglipuran",
      "Loloh cemcem (minuman tradisional)",
    ],
    included: ["Transport selama tour", "Guide", "Tiket masuk"],
    excluded: ["Makan", "Jajan", "Pengeluaran pribadi"],
    itinerary: [
      { time: "08.00", activity: "Jemput di hotel" },
      { time: "09.30", activity: "Tiba di desa, jalan di jalan utama" },
      { time: "11.00", activity: "Hutan Bambu Penglipuran" },
      {
        time: "12.00",
        activity: "Cicip loloh cemcem dan jajan lokal (tidak termasuk)",
      },
      { time: "13.30", activity: "Perjalanan kembali" },
      { time: "14.30", activity: "Diantar kembali ke hotel" },
    ],
    notes: [
      "Penglipuran adalah desa adat yang masih dihuni warga. Jaga sopan santun dan jangan masuk ke rumah tanpa izin.",
    ],
  },
];
