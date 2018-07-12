const webpack = require('webpack');
require('dotenv').config();
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withFonts(withImages(withCSS({
    distDir: '../functions/next',
    webpack: (cfg) => {
      cfg.plugins.push(
        new webpack.DefinePlugin({
          'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
          'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
          'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
          'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
          'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
          'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
        })
      );
      return cfg;
    },
})));