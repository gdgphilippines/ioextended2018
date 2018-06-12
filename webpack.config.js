const { resolve } = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const moduleConf = require('./webpack-module.config');
const nomoduleConf = require('./webpack-nomodule.config');
const getHtmlOptions = require('./src/utils/html-webpack/get-html-options');
const package = require('./package.json');
const IS_DEV_SERVER = !!process.argv.find(arg => arg.includes('--mode=development'));

const copyStatics = {
  copyPolyfills: [
    {
      from: resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/bundles/*.js'),
      to: 'vendor/bundles/[name].' + package.version + '.[ext]'
    },
    {
      from: resolve(__dirname, './node_modules/es5-shim/es5-shim.min.js'),
      to: 'vendor/es5-shim.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/es5-shim/es5-sham.min.js'),
      to: 'vendor/es5-sham.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/es6-shim/es6-shim.min.js'),
      to: 'vendor/es6-shim.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/es6-shim/es6-sham.min.js'),
      to: 'vendor/es6-sham.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/weakmap-polyfill/weakmap-polyfill.min.js'),
      to: 'vendor/weakmap-polyfill.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/es6-promise/dist/es6-promise.min.js'),
      to: 'vendor/es6-promise.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/intersection-observer/intersection-observer.js'),
      to: 'vendor/intersection-observer.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/@webcomponents/shadycss/scoping-shim.min.js'),
      to: 'vendor/scoping-shim.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/whatwg-fetch/fetch.js'),
      to: 'vendor/fetch.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/object-fit-images/dist/ofi.min.js'),
      to: 'vendor/ofi.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './node_modules/raven-js/dist/raven.min.js'),
      to: 'vendor/raven.' + package.version + '.js'
    },
    {
      from: resolve(__dirname, './src/assets'),
      to: 'assets'
    },
    {
      from: resolve(__dirname, './data'),
      to: 'data'
    }
  ]
};

if (IS_DEV_SERVER) {
  copyStatics.copyPolyfills.push({
    from: resolve(__dirname, './src/service-worker.js'),
    to: 'service-worker.js'
  });
}

const shared = env => {
  const IS_MODULE_BUILD = env.BROWSERS === 'module';

  const plugins = [
    new HTMLWebpackPlugin(getHtmlOptions(IS_DEV_SERVER, IS_MODULE_BUILD, 'index')),
    new HTMLWebpackPlugin(getHtmlOptions(IS_DEV_SERVER, IS_MODULE_BUILD, '404')),
    new CopyWebpackPlugin(copyStatics.copyPolyfills)
  ];

  return {
    entry: {
      'core': resolve(__dirname, 'src/index.js')
    },
    output: {
      path: resolve(__dirname, 'public'),
      chunkFilename: IS_MODULE_BUILD ? 'module.[chunkhash].fragment.' + package.version + '.js' : '[chunkhash].fragment.' + package.version + '.js',
      filename: IS_MODULE_BUILD ? 'module.[name].' + package.version + '.js' : '[name].' + package.version + '.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.styl']
    },
    module: {
      rules: [
        {
          // If you see a file that ends in .html, send it to these loaders.
          test: /\.html$/,
          use: [
            'text-loader'
          ]
        },
        {
          test: /\.worker\.js$/,
          use: [

            {
              loader: 'worker-loader',
              options: {
                name: IS_MODULE_BUILD ? 'module.[hash].worker.' + package.version + '.js' : '[hash].worker.' + package.version + '.js'
              }
            },
            {
              loader: 'babel-loader',
              options: {
                presets: [[
                  'env'
                ]],
                plugins: [
                  'babel-plugin-syntax-dynamic-import',
                  ['transform-runtime', {
                    'helpers': false,
                    'polyfill': false,
                    'regenerator': true
                  }],
                  ['transform-object-rest-spread', {useBuiltIns: true}]
                ]
              }
            }
          ]
        },
        {
          test: /\.styl$/,
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }
      ]
    },
    plugins
  };
};

module.exports = (env = {}) => merge(env.BROWSERS === 'module' ? moduleConf(IS_DEV_SERVER) : nomoduleConf(IS_DEV_SERVER), shared(env));
