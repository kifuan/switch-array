// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/switch-array/',
    head: {
      title: 'SwitchArray',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/switch-array/icon.svg' },
      ],
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    viewer: false,
  },
})
