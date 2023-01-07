import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  srcDir: "src/",
  ssr: false,
});
