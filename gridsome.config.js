// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'NWA',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ['post', 'articel'],
      }
    }
  ],
  templates: {
    StrapiArticel: [
      {
        path: '/journal/:id',
        component: './src/templates/Articel.vue'
      }
    ],
    StrapiPost: [
      {
        path: '/projects/:id',
        component: './src/templates/Articel.vue'
      }
    ]
  }
}