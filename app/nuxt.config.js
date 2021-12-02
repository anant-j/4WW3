export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  telemetry: false,
  head: {
    title: 'OuseMouse',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'OuseMouse is a web application that enables users to search and add reviews for restaurants. What distinguishes us over other similar platforms is the ability for our users to add restaurants they wish to see on the platform.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],
  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  // ],

  css: [
    { src: '~/assets/bootstrap/main.scss', lang: 'scss' },
    '~/assets/css/main.css',
  ],
  script: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/assets/bootstrap/main.js', mode: 'client' },
    { src: '~/plugins/google-maps', ssr: true },
    '~/plugins/api-client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/dotenv'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far'],
          },
        ],
      },
    ],
    [
      'vue-toastification/nuxt',
      {
        position: 'top-center',
        timeout: 3500,
        closeOnClick: false,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
  },

  server: {
    host: '0.0.0.0',
    port: 8080,
  },
}
