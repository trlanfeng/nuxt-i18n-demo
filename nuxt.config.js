import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  router: {
    middleware: 'i18n',
    extendRoutes(routes, resolve) {
      const defaultLangRoutes = [];
      routes.forEach(item => {
        if (item.name === 'lang' || item.name.substr(0, 5) === 'lang-') {
          const route = {};
          if (item.name.length === 4) {
            route.name = 'index';
            route.path = '/';
          } else {
            route.name = item.name.substr(5);
            route.path = '/' + route.name;
          }
          route.component = item.component;
          route.chunkName = item.chunkName;
          defaultLangRoutes.push(route);
        }
      })
      defaultLangRoutes.forEach(item => {
        routes.unshift(item);
      })   
    }
  }
}
