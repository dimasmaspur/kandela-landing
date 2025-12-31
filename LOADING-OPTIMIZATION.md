# Optimasi Loading Website

## Perubahan yang Dilakukan

### 1. **Loading Screen Global**
- Menambahkan loading screen di level Layout yang muncul saat halaman pertama kali dibuka
- Loading screen akan otomatis hilang setelah halaman selesai dimuat
- Fallback timeout 5 detik untuk memastikan loading screen tidak stuck

### 2. **Skeleton Loader di Hero Section**
- Menambahkan skeleton loader yang menampilkan placeholder konten
- Memberikan feedback visual yang lebih baik kepada user
- Konten akan muncul dengan smooth fade-in setelah siap

### 3. **Lazy Loading Optimization**
- Mengubah semua `client:load` menjadi:
  - `client:idle` untuk Hero section (load saat browser idle)
  - `client:visible` untuk section lainnya (load saat terlihat di viewport)
- Mengurangi JavaScript yang di-load saat initial page load

### 4. **Component Optimization**
Komponen yang dioptimasi:
- ✅ Hero.astro - `client:idle` + skeleton loader
- ✅ Service.astro - `client:visible`
- ✅ Portfolio.astro - `client:visible`
- ✅ About.astro - `client:visible`
- ✅ Footer.astro - `client:visible`

### 5. **Build Optimization**
- Menambahkan manual chunks untuk vendor libraries (React, Three.js)
- Mengoptimasi inline stylesheets
- Menambahkan preload untuk resource penting

## Cara Kerja

### Loading Flow:
1. **Page Load** → Global loader muncul
2. **Critical Resources Loading** → Skeleton loader muncul di Hero
3. **Hero Components Ready** → Hero content fade-in, skeleton hilang
4. **User Scrolls** → Section lain lazy-load saat terlihat
5. **All Loaded** → Global loader hilang

## Testing

### Test di Browser:
```bash
npm run build
npm run preview
```

### Test Loading Performance:
1. Buka Chrome DevTools
2. Network tab → Throttling → Slow 3G
3. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
4. Perhatikan loading screen dan skeleton loader

### Test di Device Lambat:
1. Chrome DevTools → Performance
2. CPU throttling → 6x slowdown
3. Reload page
4. Verifikasi loading screen muncul dan hilang dengan baik

## Manfaat

✅ **User Experience Lebih Baik**
- User tidak melihat blank screen
- Feedback visual yang jelas saat loading
- Smooth transition saat konten muncul

✅ **Performance Lebih Cepat**
- Initial page load lebih ringan
- JavaScript di-load secara bertahap
- Mengurangi blocking resources

✅ **Mobile Friendly**
- Optimasi khusus untuk device lambat
- Skeleton loader responsive
- Lazy loading menghemat bandwidth

## Catatan Teknis

### Timeout Settings:
- Hero section: 3 detik fallback
- Global loader: 5 detik fallback
- Fade transition: 700ms

### Browser Support:
- IntersectionObserver untuk lazy loading
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation untuk browser lama

## Troubleshooting

### Jika Loading Screen Tidak Hilang:
1. Check console untuk error
2. Pastikan JavaScript enabled
3. Clear cache dan reload

### Jika Konten Muncul Terlalu Cepat:
- Adjust delay di script (saat ini 300ms-500ms)
- Sesuaikan dengan kebutuhan

### Jika Konten Muncul Terlalu Lambat:
- Check fallback timeout (saat ini 3-5 detik)
- Kurangi timeout jika perlu

