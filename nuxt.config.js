export default {
  // Configuration de base
  target: 'server',
  ssr: true,
  
  // En-tête HTML
  head: {
    title: 'GitHub Organization Invitation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Invitation tool for GitHub organizations' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: process.env.FAVICON_URL }
    ]
  },

  // CSS global
  css: [],

  // Plugins
  plugins: [],

  // Composants Auto-import
  components: true,

  // Modules de développement
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules
  modules: [
    '@nuxt/http'
  ],

  // Configuration HTTP
  http: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Middleware serveur
  serverMiddleware: [
    { path: '/api', handler: '~/server/api/index.js' }
  ],

  // Configuration Tailwind
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            background: process.env.BACKGROUND_COLOR || '#0f172a',
            accent: process.env.ACCENT_COLOR || '#3b82f6'
          }
        }
      }
    }
  },

  // Configuration de build
  build: {
    transpile: [
      '@octokit/rest'
    ]
  },

  // Variables d'environnement publiques
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    orgName: process.env.ORG_NAME,
    teamName: process.env.TEAM_NAME,
    faviconURL: process.env.FAVICON_URL
  },

  // Variables d'environnement privées
  privateRuntimeConfig: {
    githubToken: process.env.GITHUB_ACCESS_TOKEN
  }
}