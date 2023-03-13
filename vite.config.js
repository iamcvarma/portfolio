import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgoConfig: {
        plugins: [{ removeViewBox: false }],
      },
      dimensions: {
        width: 30,
        height: 30,
      },
    }),
  ],
  base: "/portfolio/",
});
