// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],

  pinia: {
    storesDirs: ['./store**'],
  }
})