// import { process } from "@tauri-apps/api";
import { defineNuxtConfig } from "nuxt/config";
// import { Static } from "nuxt/dist/app/compat/capi";
// import { useFetch } from "./.nuxt/imports";
// https://nuxt.com/docs/api/configuration/nuxt-config

const getBaseUrl = () => {
  const environment = process.env.APP_MODE;
  switch(environment){
    case "local":
      console.log("mode:local")
      return "/public"
    default:
      console.log("mode:production")
      return "/"
  }
}

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
    baseURL: getBaseUrl()
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
