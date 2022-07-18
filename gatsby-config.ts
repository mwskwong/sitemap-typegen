import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sitemap-typegen`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          query Sitemap {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }        
        `,
      }
    }
  ]
};

export default config;
