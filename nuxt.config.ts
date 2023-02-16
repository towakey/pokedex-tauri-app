import { defineNuxtConfig } from "nuxt/config";
import { Static } from "nuxt/dist/app/compat/capi";
import { useFetch } from "./.nuxt/imports";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  srcDir: "src/",
  ssr: true,
  prerender: true,
  app: {
    // baseURL: '/public'
  },
})
