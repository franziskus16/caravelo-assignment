import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const tenant = env.VITE_TENANT || "";
  const theme = env.VITE_THEME || "light";
  const themePath = env.VITE_THEME_PATH || "src/core/styles/themes";

  return {
    plugins: [vue()],
    test: {
      globals: true,
      environment: "jsdom",
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@theme": path.resolve(__dirname, themePath),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/core/styles/themes/config" with ($THEME: "${theme}");`,
          charset: false,
        },
      },
    },
    define: {
      __TENANT__: JSON.stringify(tenant),
      __THEME__: JSON.stringify(theme),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("/src/tenants/")) {
              return "tenant-components";
            }
            if (id.includes("/src/components/")) {
              return "shared-components";
            }
          },
        },
      },
    },
  };
});
