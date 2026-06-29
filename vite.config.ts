import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    proxy: {
      "/adsb": {
        target: "https://api.airplanes.live",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/adsb/, ""),
      },
    },
  },
});
