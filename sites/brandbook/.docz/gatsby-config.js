const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Brandbook',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Brandbook',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/yeehaa/Documents/lefthoek/sites/brandbook',
          templates:
            '/Users/yeehaa/Documents/lefthoek/node_modules/docz-core/dist/templates',
          docz: '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz',
          cache:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/.cache',
          app: '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/app',
          appPackageJson:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/package.json',
          appTsConfig:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/tsconfig.json',
          gatsbyConfig:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/gatsby-config.js',
          gatsbyBrowser:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/gatsby-browser.js',
          gatsbyNode:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/gatsby-node.js',
          gatsbySSR:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/gatsby-ssr.js',
          importsJs:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/app/imports.js',
          rootJs:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/app/root.jsx',
          indexJs:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/app/index.jsx',
          indexHtml:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/app/index.html',
          db:
            '/Users/yeehaa/Documents/lefthoek/sites/brandbook/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
