import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - qboard',
    title: 'qboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    //'@nuxtjs/dotenv',
    [
      '@nuxtjs/firebase',
      {
        config: {
            apiKey: "AIzaSyCXT-ib_BFvRb0bOKgl2zKxBQx2Szfn6Ds",
            authDomain: "aki-qboard-scsk2021.firebaseapp.com",
            projectId: "aki-qboard-scsk2021",
            storageBucket: "aki-qboard-scsk2021.appspot.com",
            messagingSenderId: "931061747914",
            appId: "1:931061747914:web:5e25bd1904124380432433",
            measurementId: "G-CE8JL52M2Q"
        },
        services: {
          auth: {
            emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined
          },
          firestore: {
            emulatorPort: process.env.NODE_ENV === 'development' ? 8080 : undefined
          },
          functions: {
            location: 'asia-northeast1',
            emulatorPort: process.env.NODE_ENV === 'development' ? 5001 : undefined
          },
          storage: true,
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    dir: '../dist'
  },
}
