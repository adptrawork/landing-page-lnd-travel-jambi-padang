export const business = {
  name: 'LND Travel Jambi–Padang',
  slug: 'lnd-travel-jambi-padang',
  category: 'Travel Jambi–Padang',
  city: 'Kota Jambi',
  rating: 4.6,
  reviewCount: 140,
  phone: '6281381182008',
  phoneDisplay: '0813-8118-2008',
  phoneAlt: '',
  mapsUrl: 'https://maps.google.com/?q=LND+Travel+Jl+TP+Sriwijaya+Rawasari+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=Jl+TP+Sriwijaya+Rawasari+Kota+Baru+Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Jl. TP. Sriwijaya, Kel. Rawasari, Kec. Kota Baru, Kota Jambi',
  hours: 'Booking 24 jam, Senin–Minggu',
  website: 'https://traveljambipadang.web.id',
  schemaType: 'TravelAgency',
  ctaLabel: 'Pesan Kursi via WA',
  ctaUrl: 'https://wa.me/6281381182008',
  title: 'LND Travel Jambi–Padang Rp280rb — Booking 24 Jam',
  description: 'LND Lintas Nusa Damai Jambi–Padang Rp280rb berangkat 16.00, booking 24 jam 0813-8118-2008. Asuransi, AC dingin, driver bersertifikat.',
  canonicalPath: '/',
  ogImage: '/images/lnd-layanan-1.jpg',
};

export const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/jadwal', label: 'Rute & Tarif' },
  { href: '/armada', label: 'Armada' },
  { href: '/pesan', label: 'Pesan Kursi' },
  { href: '/kontak', label: 'Kontak' },
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const routes = [
  { name: 'Jambi – Padang', price: 'Rp280.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
  { name: 'Padang – Jambi', price: 'Rp280.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
  { name: 'Jambi – Pekanbaru', price: 'Rp250.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 10.00 / 14.00 / 20.00 WIB.' },
  { name: 'Pekanbaru – Jambi', price: 'Rp250.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 10.00 / 14.00 / 20.00 WIB.' },
  { name: 'Pariaman – Jambi', price: 'Rp320.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
  { name: 'Padang – Palembang', price: 'Rp480.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
  { name: 'Padang – Pekanbaru', price: 'Rp220.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
  { name: 'Padang – Muaro Bungo', price: 'Rp200.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
  { name: 'Padang – Lampung', price: 'Rp700.000', status: 'Terverifikasi situs resmi', desc: 'Berangkat 16.00 WIB.' },
];

export const fleet = [
  { name: 'Armada Hiace', desc: 'Kapasitas rombongan dengan AC sehat dan dingin, interior bersih wangi.', img: 'duo' },
  { name: 'Armada Innova', desc: 'MPV nyaman untuk rute menengah dengan driver bersertifikat.', img: 'duo' },
  { name: 'Paket Kilat', desc: 'Layanan paket kilat sehari sampai antar kota.', img: 'poster' },
  { name: 'Rental & Carter', desc: 'Sewa mobil harian dengan armada terbaru.', img: 'poster' },
];

export const faqs = [
  { q: 'Jam berapa berangkat Jambi–Padang?', a: 'Pukul 16.00 WIB sesuai jadwal situs resmi. Pesan kursi lebih awal via WA.' },
  { q: 'Apakah ada asuransi?', a: 'Ya, LND menyediakan asuransi perjalanan bagi penumpang.' },
  { q: 'Bisa pilih tempat duduk?', a: 'Bisa. Konsultasikan rute dan pilihan kursi via WA sebelum berangkat.' },
  { q: 'Apakah melayani paket kilat?', a: 'Ya, paket kilat sehari sampai tersedia untuk rute-rute travel.' },
  { q: 'Bagaimana refund pembatalan?', a: 'Ketentuan refund tidak dipublikasikan — tanyakan via WA sebelum membayar.' },
];

export const notes: string[] = [
  'Seluruh tarif dan jam di halaman ini terverifikasi dari situs resmi traveljambipadang.web.id (diakses Oktober 2026).',
  'Booking dilayani 24 jam di 0813-8118-2008.',
];
