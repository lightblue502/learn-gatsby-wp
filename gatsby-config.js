module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    subtitle: `hello wordpress.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'localhost:8001',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      },
    },
  ],
}
