import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig(() => {
  const publicDir = fs.existsSync(path.resolve(__dirname, "Public"))
    ? "Public"
    : "public";
  return {
    publicDir,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
