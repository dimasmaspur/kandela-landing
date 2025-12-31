# Sitemap Troubleshooting Guide - Kandela Technology

## ✅ Sitemap Sudah Dikonfigurasi

Sitemap sekarang di-generate otomatis menggunakan `@astrojs/sitemap` integration.

### File Sitemap yang Ter-generate:
- **sitemap-index.xml** - Index utama sitemap
- **sitemap-0.xml** - Daftar semua URL

### URLs yang Ter-include:
1. https://kandela.tech/ (Homepage)
2. https://kandela.tech/career (Career page)
3. https://kandela.tech/projects (Projects page)

---

## 🔧 Troubleshooting "Couldn't Fetch" di Google Search Console

### Kemungkinan Penyebab & Solusi:

#### 1. **Website Belum Live/Deployed**
**Problem**: Sitemap hanya ada di local, belum di production server.

**Solusi**:
```bash
# Deploy website ke production
npm run build
# Upload folder dist/ ke hosting
```

**Cek**: Buka browser dan akses:
- https://kandela.tech/sitemap-index.xml
- https://kandela.tech/sitemap-0.xml

Jika tidak bisa diakses, berarti website belum di-deploy.

---

#### 2. **Robots.txt Memblokir Sitemap**
**Problem**: robots.txt salah konfigurasi.

**Solusi**: Pastikan `public/robots.txt` berisi:
```txt
User-agent: *
Allow: /

Sitemap: https://kandela.tech/sitemap-index.xml
```

**Cek**: Akses https://kandela.tech/robots.txt

---

#### 3. **URL Sitemap Salah di Google Search Console**
**Problem**: Submit URL yang salah.

**Solusi**: Submit URL yang benar:
```
https://kandela.tech/sitemap-index.xml
```

**BUKAN**:
- ❌ https://kandela.tech/sitemap.xml
- ❌ http://kandela.tech/sitemap-index.xml (tanpa https)
- ❌ kandela.tech/sitemap-index.xml (tanpa protocol)

---

#### 4. **SSL/HTTPS Issue**
**Problem**: Certificate SSL tidak valid atau expired.

**Solusi**:
- Pastikan SSL certificate valid
- Redirect HTTP ke HTTPS
- Test dengan: https://www.ssllabs.com/ssltest/

---

#### 5. **Server Response Error**
**Problem**: Server return error 404, 500, atau timeout.

**Solusi**:
```bash
# Test sitemap accessibility
curl -I https://kandela.tech/sitemap-index.xml

# Should return: HTTP/2 200
```

---

#### 6. **Firewall/CDN Blocking Google Bot**
**Problem**: Cloudflare atau firewall memblokir Google crawler.

**Solusi**:
- Whitelist Google bot IP addresses
- Disable "Under Attack Mode" di Cloudflare
- Check firewall rules

---

## 📝 Step-by-Step Submission ke Google Search Console

### 1. Pastikan Website Sudah Live
```bash
# Test sitemap
curl https://kandela.tech/sitemap-index.xml

# Should return XML content
```

### 2. Login ke Google Search Console
- URL: https://search.google.com/search-console
- Pilih property: kandela.tech

### 3. Submit Sitemap
1. Klik "Sitemaps" di sidebar kiri
2. Di field "Add a new sitemap", masukkan:
   ```
   sitemap-index.xml
   ```
3. Klik "Submit"

### 4. Tunggu Proses (24-48 jam)
Google akan:
- Fetch sitemap
- Validate format
- Crawl URLs
- Index pages

### 5. Monitor Status
- Status "Success" = Sitemap berhasil di-fetch
- Status "Couldn't fetch" = Ada masalah (lihat troubleshooting di atas)

---

## 🧪 Testing Sitemap

### Test 1: Validate Format
```bash
# Online validator
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

### Test 2: Check Accessibility
```bash
# Command line
curl -I https://kandela.tech/sitemap-index.xml

# Expected output:
HTTP/2 200
content-type: application/xml
```

### Test 3: Google's Testing Tool
```
https://search.google.com/test/rich-results
```

---

## 🔄 Update Sitemap Setelah Perubahan

Setiap kali ada perubahan (tambah/hapus page):

```bash
# 1. Build ulang
npm run build

# 2. Deploy folder dist/ ke hosting

# 3. Google akan auto-detect perubahan dalam 24-48 jam
# ATAU manually request re-crawl di Google Search Console
```

---

## 📊 Expected Timeline

| Waktu | Status |
|-------|--------|
| 0-1 jam | Sitemap submitted |
| 1-24 jam | Google fetch sitemap |
| 1-7 hari | Google crawl pages |
| 7-30 hari | Pages mulai appear di search results |

---

## 🆘 Masih Bermasalah?

### Quick Checklist:
- [ ] Website sudah live di https://kandela.tech
- [ ] Sitemap bisa diakses di browser
- [ ] robots.txt sudah benar
- [ ] SSL certificate valid
- [ ] Submit URL yang benar: `sitemap-index.xml`
- [ ] Tunggu minimal 24 jam

### Jika Masih Error:
1. Screenshot error message dari Google Search Console
2. Test dengan curl: `curl -v https://kandela.tech/sitemap-index.xml`
3. Check server logs untuk error
4. Verify domain ownership di Google Search Console

---

## 📞 Support

Jika masih ada masalah, hubungi:
- Email: hello@kandela.tech
- Check logs di hosting provider

---

**Last Updated**: January 1, 2025

