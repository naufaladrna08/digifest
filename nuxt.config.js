export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'diajars',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
    ]
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/colors.scss',
    '~assets/scss/library.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
      }
    ]
    ,'@nuxtjs/auth-next'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  axios: {
    baseURL: 'http://api.diajars.online/index.php/api/',
    proxyHeaders: false,
    credentials: false
  },  

  env: {
    baseUrl: process.env.BASE_URL || 'http://api.diajars.online/index.php/api/'
  },

  auth: {
    redirect: {
      login: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 60 * 60
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: '/me', method: 'get', propertyName: 'data'
          },
          logout: {
            method: 'get',
            url: '/logout', method: 'get'
          }
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  }
}
