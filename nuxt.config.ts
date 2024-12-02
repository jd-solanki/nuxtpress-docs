// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // [process.env.NODE_ENV === "development" ? '../content-app/' : 'github:jd-solanki/nuxtpress', { install: true }]
    '../content-app/',
  ],
  future: {
    compatibilityVersion: 4,
  },
  // extends: [
  //   ['github:jd-solanki/nuxtpress', { install: true }]
  // ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
