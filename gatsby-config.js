module.exports = {
  siteMetadata: {
    title: "Benjamin Geyer - Portfolio",
    author: "Benjamin Geyer",
    description: "Portfolio website to show off work and projects"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "benjamin-geyer-website",
        short_name: "ben-geyer-site",
        start_url: "/",
        background_color: "#007bff",
        theme_color: "#007bff",
        display: "minimal-ui",
        icon: "static/logo32.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "bengeyer.me",
        protocol: "https",
        hostname: "www.bengeyer.me",
        acl: null
      },
    },
  ],
}
