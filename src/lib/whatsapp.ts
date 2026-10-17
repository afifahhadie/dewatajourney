export const WA_NUMBER = "6285875030915";
export const WA_DISPLAY = "+62 858-7503-0915";

export const buildWaLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const packageMessage = (name: string) =>
  `Halo Dewata Journey, saya mau pesan paket ${name}.\nTanggal:\nJumlah orang:\nArea jemput:\nTerima kasih!`;

export const generalMessage =
  "Halo Dewata Journey, saya mau tanya soal paket wisata di Bali.";
