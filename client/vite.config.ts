import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      __API__: JSON.stringify(
        mode === "development" ? "http://localhost:7000/api" : "/api"
      ),
    },
  };
});
