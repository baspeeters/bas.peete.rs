// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=UA-38936174-1",
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'GTM-WXZM4SW3');`,
        },
      ],
    },
  },
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  ssr: false,
});
