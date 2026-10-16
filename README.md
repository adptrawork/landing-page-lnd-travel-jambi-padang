# LND Travel (Lintas Nusa Damai) Jambi–Padang — Landing Page Astro

## Jalankan lokal
```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # output dist/
npm run preview
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro · Build Output: `dist/`
- Cloudflare Pages → Connect to Git → Custom Domain + SSL.

## Data real (terverifikasi Oktober 2026)
- Seluruh rute+tarif+jam terverifikasi traveljambipadang.web.id: Jambi–Padang Rp280rb 16.00, Jambi–Pekanbaru Rp250rb (10/14/20), dst. (9 rute).
- Alamat Jl. TP. Sriwijaya, Rawasari, Kota Baru; WA 0813-8118-2008; booking 24 jam.
- Fasilitas: asuransi, AC sehat/dingin, driver bersertifikat, paket kilat, rental/carter.

## Sumber gambar (`public/images/`, semua < 100 KB, lokal)
| File | Sumber | Alt |
|---|---|---|
| `lnd-layanan-1.jpg` | traveljambipadang.web.id poster resmi | Poster layanan + Hiace putih |
| `lnd-rute-1.jpg` | traveljambipadang.web.id grafis resmi | Ilustrasi Hiace dan Innova |

## Catatan & batasan
- `pdg.png` situs hanya 360px (elemen header, bukan foto) — tidak dipakai di halaman.
- Tipe armada pasti tidak dipublikasikan situs — kartu armada memakai ilustrasi resmi + desc fasilitas tekstual.
- Harga/menu/jadwal dapat berubah — konfirmasi via kontak resmi sebelum membayar.
- JANGAN push ke remote sebelum instruksi.
