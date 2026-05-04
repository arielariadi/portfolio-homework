# Final Results — Portfolio Muhammad Ariel Ariadi

## Portfolio Info

- **Nama:** Muhammad Ariel Ariadi
- **Repository:** https://github.com/arielariadi/portfolio-homework
- **Live URL:** https://arielariadi.github.io/portfolio-homework/
- **Date:** 4 Mei 2026

---

## Screenshot: Desktop

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/desktop/1-hero-section.png)

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/desktop/2-about-section.png)

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/desktop/3-tech-stack-section.png)

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/desktop/4-project-section.png)

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/desktop/5-experience-section.png)

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/desktop/6-contact-section.png)

---

## Screenshot: Mobile

![Desktop View](https://github.com/arielariadi/portfolio-homework/blob/main/assets/screenshots/mobile/mobile-screen.png)

---

## What I Learned

1. **RTCC-O Framework**: Menggunakan kerangka kerja Role, Task, Context, Constraints, dan Output dalam memberikan prompt sangat efektif untuk mendapatkan hasil yang presisi. Seluruh pondasi project (HTML, CSS, JS) berhasil dibangun dalam satu kali iterasi besar karena instruksi yang sangat detail.

2. **Semantic HTML & Modern CSS**: Pentingnya menggunakan elemen semantik (`<main>`, `<section>`, `<article>`) bukan hanya untuk SEO, tapi juga untuk standar WCAG agar website aksesibel bagi semua orang. Penggunaan CSS Custom Properties dan Flexbox/Grid modern memungkinkan pembuatan desain premium dari scratch tanpa bantuan framework.

3. **Kolaborasi dengan AI**: AI sangat kuat dalam menghasilkan boilerplate dan logika dasar dengan cepat. Namun, peran manusia sangat krusial dalam melakukan fine-tuning, memastikan detail visual (seperti perbaikan alignment footer), dan mengintegrasikan konten personal agar portfolio terasa otentik.

---

## Challenges & Solutions

Challenge 1: **Mobile Alignment (Footer)**
Awalnya, footer tidak terlihat benar-benar berada di tengah pada ukuran layar mobile yang sangat kecil.
**How I Solved**: Melakukan iterasi pada `style.css` dengan menerapkan Flexbox secara agresif pada `.footer` dan `.container`, serta menambahkan `min-height` dan padding khusus di media query mobile untuk memastikan konten benar-benar terpusat secara visual.

Challenge 2: **Menyeimbangkan Animasi & Performa**
Ingin memberikan kesan "playful" dengan banyak animasi scroll, namun tetap menjaga website terasa ringan dan cepat.
**How I Solved**: Menggunakan `IntersectionObserver` di Vanilla JavaScript untuk memicu animasi hanya saat elemen masuk ke viewport (reveal effect). Ini menjaga performa tetap optimal dibandingkan menggunakan library berat atau listener scroll tradisional.

## Checklist

[✅] Desktop screenshot ada?
[✅] Mobile screenshot ada?
[✅] No horizontal scroll?
[✅] All sections visible?
[✅] 3+ insights documented?
[✅] Challenges solved documented?
[✅] GitHub Pages URL available?
