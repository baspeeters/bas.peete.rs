// https://nuxt.com/docs/api/configuration/nuxt-config
import person from "./lib/person";

export default defineNuxtConfig({
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      script: [{
        type: "application/ld+json",
        innerHTML: person,
      }],
    },
  },
});
