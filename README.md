# Kandela Prod

Project Astro modern yang dibangun dengan Tailwind CSS dan TypeScript untuk performa optimal dan pengalaman developer yang luar biasa.

## 🚀 Tech Stack

- **Astro** - Framework web modern untuk static site generation
- **Tailwind CSS** - Framework CSS utility-first untuk styling
- **TypeScript** - Superset JavaScript dengan type safety
- **Vite** - Build tool modern untuk development yang cepat

## 📦 Fitur

- ✅ Static Site Generation (SSG)
- ✅ TypeScript support dengan strict mode
- ✅ Tailwind CSS v4 dengan konfigurasi optimal
- ✅ Responsive design
- ✅ Modern UI/UX
- ✅ SEO optimized
- ✅ Fast development dengan hot reload
- ✅ Component-based architecture

## 🛠️ Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd kandela-prod
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan kunjungi `http://localhost:4321`

## 📁 Struktur Project

```
kandela-prod/
├── src/
│   ├── components/     # Komponen Astro dan TypeScript
│   ├── layouts/        # Layout templates
│   ├── pages/          # Halaman website
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions dan types
├── public/             # Static assets
├── astro.config.mjs    # Konfigurasi Astro
├── package.json        # Dependencies dan scripts
└── tsconfig.json       # Konfigurasi TypeScript
```

## 🎯 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build project untuk production
- `npm run preview` - Preview build production
- `npm run astro` - Menjalankan Astro CLI

## 🎨 Komponen

Project ini menggunakan komponen yang dapat digunakan kembali:

- `Layout.astro` - Layout utama dengan TypeScript interface
- `FeatureCard.astro` - Komponen card untuk fitur
- Utility functions dengan type safety

## 📝 TypeScript

Project ini menggunakan TypeScript dengan konfigurasi strict mode. Beberapa type definitions yang tersedia:

- `MetaData` - Interface untuk metadata halaman
- `NavigationItem` - Interface untuk item navigasi
- `ApiResponse` - Interface untuk response API
- `FormField` - Interface untuk form fields

## 🎨 Styling

Styling menggunakan Tailwind CSS v4 dengan fitur:

- Utility-first approach
- Responsive design
- Custom color palette
- Hover effects dan transitions
- Modern UI components

## 🚀 Deployment

Project ini dapat di-deploy ke berbagai platform:

- **Vercel** - `vercel --prod`
- **Netlify** - `netlify deploy --prod`
- **GitHub Pages** - Otomatis via GitHub Actions
- **Cloudflare Pages** - Connect repository

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk diskusi.

## 📞 Kontak

Untuk pertanyaan atau dukungan, silakan hubungi tim development.

---

Dibuat dengan ❤️ menggunakan Astro, Tailwind CSS, dan TypeScript

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
