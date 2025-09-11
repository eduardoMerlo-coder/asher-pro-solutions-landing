// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://asherpro-solutions.com", // URL de producción
  output: "static", // o 'hybrid' si necesitas SSR
  compressHTML: true,
  build: {
    assets: "assets",
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            swiper: ["swiper"],
          },
        },
      },
    },
  },
});
