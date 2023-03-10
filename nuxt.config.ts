// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [    
    '@pinegrow/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.cjs',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  }
})
