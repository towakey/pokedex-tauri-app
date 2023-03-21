import { defineNuxtConfig } from "nuxt/config";
// import { Static } from "nuxt/dist/app/compat/capi";
// import { useFetch } from "./.nuxt/imports";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  app: {
    head: {
      title: "Pokedex Online",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ]
    },
    // baseURL: '/public'
  },
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  srcDir: "src/",
  prerender: true,
  import: {
    dirs: [
      'composables/**',
    ],
  },
})
