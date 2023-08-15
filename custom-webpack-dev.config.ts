const ExtensionReloader = require('webpack-extension-reloader');
import type { Configuration } from 'webpack';

const options = {
  reloadPage: true,
  entries: {
    background: 'background',
  },
};

module.exports = {
  mode: 'development',
  plugins: [new ExtensionReloader(options)],
} as Configuration
