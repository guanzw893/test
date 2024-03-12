// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/stylelint-module'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/_colors.scss" as *;'
        }
      }
    }
  },
  // @ts-ignore
  stylelint: {
    lintOnStart: false,
    chokidar: true
  }
})
