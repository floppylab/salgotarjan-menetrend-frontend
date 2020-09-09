
export default {
  mode: 'universal',
  debug: true,
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'hu'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '~assets/styles.scss',
    // '@fortawesome/fontawesome-free/css/fontawesome.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuelidate.js', ssr: true },
    { src: '~/plugins/vuelayers.js', ssr: false },
    { src: '~plugins/datepicker.js', ssr: false },
    { src: '~plugins/vue-notification.js', ssr: false },
    // { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/axios.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap' // should always be the last in the list
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'https://guide-kmk-backend-prod.herokuapp.com/api',
    baseURL: process.env.API_BASE_URL || 'http://localhost:8098/api',
    timeout: 10000
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faInstagram', 'faFacebook']
      }
    ],
  },
  moment: {
    locales: ['hu']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vuelayers'],
    extend (config, ctx) {
    }
  }
}
