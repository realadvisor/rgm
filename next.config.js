// @flow

const path = require('path');

if (process.env.GOOGLE_API_KEY == null) {
  throw new Error(`
You must have GOOGLE_API_KEY environment variable defined
Get your api key at https://developers.google.com/maps/documentation/javascript/get-api-key
Then
GOOGLE_API_KEY={YOUR_API_KEY_HERE} yarn dev
  `);
}

module.exports = {
  assetPrefix: process.env.DOCUMENTATION === 'true' ? '/rgm' : '',
  experimental: {
    basePath: process.env.DOCUMENTATION === 'true' ? '/rgm' : '',
  },
  // static, won't work at runtime, use publicRuntimeConfig for runtime
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    DOCUMENTATION: process.env.DOCUMENTATION,
  },

  webpack: (
    config /*:: : {| resolve: {| alias: { [string]: string } |} |} */,
  ) => {
    config.resolve.alias['rgm'] = path.resolve('./src/rgm.js');
    return config;
  },
};
