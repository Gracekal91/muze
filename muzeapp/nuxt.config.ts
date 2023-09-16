// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  //Setup vuetify
  css: [
      'vuetify/lib/styles/main.sass',
      '@mdi/font/css/materialdesignicons.min.css',
      '@/assets/scss/main.scss'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@nuxtjs/color-mode'],

  devtools: { enabled: true }

});
