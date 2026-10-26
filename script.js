/* === ISI GAMBAR DI SINI ===
   Foto profil dan dokumentasi   -> folder img/
   Surat dan sertifikat (PDF)    -> folder dokumen/
   Kosongkan src ("") untuk menampilkan slot kosong. */
var FOTO = { src: "img/foto-profil.jpg", alt: "Foto Akhyar Dwi Syahputra" };
var SERTIFIKAT = [
  { src: "dokumen/surat-magang-bphl.pdf", preview: "img/surat-magang-bphl_page-0001.jpg", title: "Surat Keterangan Magang – BPHL-XIII Makassar", caption: "KKL · 28 Agustus – 23 September 2023" },
  { src: "dokumen/surat-magang-telkom.pdf", preview: "img/surat-magang-telkom_page-0001.jpg", title: "Surat Keterangan Magang – PT Telkom Selayar", caption: "2 Januari – 16 April 2019" },
  { src: "dokumen/surat-hak-cipta.pdf", preview: "img/surat-hak-cipta_page-0001.jpg", title: "Surat Pencatatan Hak Cipta", caption: "Aplikasi UMKM GO DIGITAL · Program Kampus Merdeka" }
];
var DOKUMENTASI = [
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.18.jpeg", title: "Dokumentasi 1", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.19.jpeg", title: "Dokumentasi 2", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.20.jpeg", title: "Dokumentasi 3", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.21.jpeg", title: "Dokumentasi 4", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.22.jpeg", title: "Dokumentasi 5", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.23.jpeg", title: "Dokumentasi 6", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.24.jpeg", title: "Dokumentasi 7", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.25.jpeg", title: "Dokumentasi 8", caption: "" },
  { src: "img/WhatsApp Image 2026-10-26 at 15.41.26.jpeg", title: "Dokumentasi 9", caption: "" }
];
 
var lb = document.getElementById('lightbox');
function buatGaleri(id, data, rasio, warna) {
  var ul = document.getElementById(id);
  data.forEach(function (d) {
    var li = document.createElement('li');
    var dalam = d.src
      ? '<button type="button" class="group block w-full overflow-hidden"><img src="' + d.src + '" alt="' + d.title + '" loading="lazy" class="' + rasio + ' w-full object-cover transition group-hover:scale-105"></button>'
      : '<div class="slot ' + rasio + ' flex items-center justify-center p-4 text-center text-sm text-muted">Foto belum ditambahkan</div>';
    li.innerHTML = '<div class="border ' + warna + ' bg-panel p-1.5">' + dalam + '</div><p class="mt-2 text-sm font-semibold">' + d.title + '</p>' + (d.caption ? '<p class="text-sm text-muted">' + d.caption + '</p>' : '');
    var b = li.querySelector('button');
    if (b) b.addEventListener('click', function () {
      document.getElementById('lb-img').src = d.src;
      document.getElementById('lb-img').alt = d.title;
      document.getElementById('lb-cap').textContent = d.title + (d.caption ? ' – ' + d.caption : '');
      lb.showModal();
    });
    ul.appendChild(li);
  });
}
function buatDokumenPdf(id, data) {
  var ul = document.getElementById(id);
  data.forEach(function (d) {
    var li = document.createElement('li'), dalam;
    if (d.preview) {
      var img = '<img src="' + d.preview + '" alt="Halaman ' + d.title + '" loading="lazy" class="block aspect-[4/5] w-full bg-bg object-contain">';
      dalam = d.src ? '<a href="' + d.src + '" target="_blank" rel="noopener" class="block hover:opacity-90">' + img + '</a>' : img;
    } else if (d.src) {
      dalam = '<a href="' + d.src + '" target="_blank" rel="noopener" class="aspect-[4/5] flex flex-col items-center justify-center gap-1 bg-bg text-center hover:text-yel"><span class="font-display text-3xl font-extrabold text-yel neon">PDF</span><span class="text-sm">Buka dokumen</span></a>';
    } else {
      dalam = '<div class="slot aspect-[4/5] flex items-center justify-center p-4 text-center text-sm text-muted">Berkas PDF belum ditambahkan</div>';
    }
    li.innerHTML = '<div class="border border-yel bg-panel p-1.5">' + dalam + '</div><p class="mt-2 text-sm font-semibold">' + d.title + '</p><p class="text-sm text-muted">' + d.caption + '</p>'
      + (d.src ? '<a href="' + d.src + '" download class="text-sm text-cyan underline underline-offset-4 hover:text-yel">Unduh PDF</a>' : '');
    ul.appendChild(li);
  });
}
buatDokumenPdf('galeri-sertifikat', SERTIFIKAT);
buatGaleri('galeri-dokumentasi', DOKUMENTASI, 'aspect-square', 'border-line hover:border-pink');
document.getElementById('lb-tutup').addEventListener('click', function () { lb.close(); });
lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

document.getElementById('foto').innerHTML = FOTO.src
  ? '<img src="' + FOTO.src + '" alt="' + FOTO.alt + '" class="h-full w-full object-cover">'
  : '<div class="slot flex h-full flex-col items-center justify-center gap-1 text-center"><span class="font-display text-6xl font-extrabold text-pink neon">AD</span><span class="text-sm text-muted">Foto profil belum ditambahkan</span></div>';

(function () {
  var teks = 'teknisi perangkat · admin data · web front-end', el = document.getElementById('ketik');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = '> ' + teks; return; }
  var i = 0, awal = '> ';
  (function ketik() { el.textContent = awal + teks.slice(0, i++); if (i <= teks.length) setTimeout(ketik, 55); })();
})();

document.getElementById('salin').addEventListener('click', function () {
  var st = document.getElementById('status-salin'), em = 'akhyarsyahputra07@gmail.com';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(em).then(function () { st.textContent = 'Email disalin.'; }, function () { st.textContent = 'Gagal menyalin. Salin manual: ' + em; });
  } else { st.textContent = 'Salin manual: ' + em; }
});
document.getElementById('tahun').textContent = new Date().getFullYear();