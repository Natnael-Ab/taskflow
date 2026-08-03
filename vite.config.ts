import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const developmentPort = 5173;
const previewPort = 4173;

export default defineConfig({
  appType: "spa",
  clearScreen: false,
  envPrefix: "VITE_",
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: "0.0.0.0",
    port: developmentPort,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: previewPort,
    strictPort: true,
  },
  build: {
    target: "baseline-widely-available",
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
    reportCompressedSize: true,
  },
});
