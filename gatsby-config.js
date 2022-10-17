require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Web Development World`,
    description: `A ecommerce website for courses`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
        secretKey: 'stripe_secret_key_here',
        downloadFiles: true,
      }
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.29",
        publicApiKey: process.env.SNIPCART_KEY, // use public api key here or in environment variable
        defaultLang: "fr",
        currency: "eur",
        openCartOnAdd: true,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          fr: {
            actions: {
              checkout: "Valider le panier",
            },
          },
        },
        templatesUrl:
          "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
      },
    },
    
    // {
		// 	resolve: 'gatsby-plugin-snipcart',
		// 	options: {
		// 		apiKey: process.env.SNIPCART_KEY,
    //     autopop: true
		// 	}
		// }
  ],
}
