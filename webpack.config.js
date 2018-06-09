const { resolve } = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const moduleConf = require('./webpack-module.config');
const nomoduleConf = require('./webpack-nomodule.config');
const getHtmlOptions = require('./src/utils/html-webpack/get-html-options');
const IS_DEV_SERVER = !!process.argv.find(arg => arg.includes('--mode=development'));

const copyStatics = {
  copyPolyfills: [
    {
      from: resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.js'),
      to: 'vendor/[name].[ext]'
    },
    {
      from: resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/bundles/*.js'),
      to: 'vendor/bundles/[name].[ext]'
    },
    {
      from: resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.map'),
      to: 'vendor/[name].[ext]'
    },
    {
      from: resolve(__dirname, './node_modules/es5-shim/es5-shim.min.js'),
      to: 'vendor/es5-shim.js'
    },
    {
      from: resolve(__dirname, './node_modules/es5-shim/es5-sham.min.js'),
      to: 'vendor/es5-sham.js'
    },
    {
      from: resolve(__dirname, './node_modules/es6-shim/es6-shim.min.js'),
      to: 'vendor/es6-shim.js'
    },
    {
      from: resolve(__dirname, './node_modules/es6-shim/es6-sham.min.js'),
      to: 'vendor/es6-sham.js'
    },
    {
      from: resolve(__dirname, './node_modules/es6-promise/dist/es6-promise.min.js'),
      to: 'vendor/es6-promise.js'
    },
    {
      from: resolve(__dirname, './node_modules/intersection-observer/intersection-observer.js'),
      to: 'vendor/intersection-observer.js'
    },
    {
      from: resolve(__dirname, './node_modules/@webcomponents/shadycss/scoping-shim.min.js'),
      to: 'vendor/scoping-shim.js'
    },
    {
      from: resolve(__dirname, './node_modules/whatwg-fetch/fetch.js'),
      to: 'vendor/fetch.js'
    },
    {
      from: resolve(__dirname, './node_modules/object-fit-images/dist/ofi.min.js'),
      to: 'vendor/ofi.js'
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
    new HTMLWebpackPlugin(getHtmlOptions(IS_DEV_SERVER, 'index')),
    new HTMLWebpackPlugin(getHtmlOptions(IS_DEV_SERVER, '404')),
    new CopyWebpackPlugin(copyStatics.copyPolyfills)
  ];

  return {
    entry: {
      'core': resolve(__dirname, 'src/index.js')
    },
    output: {
      path: resolve(__dirname, 'public'),
      chunkFilename: IS_MODULE_BUILD ? 'module.[chunkhash].fragment.js' : '[chunkhash].fragment.js',
      filename: IS_MODULE_BUILD ? 'module.[name].js' : '[name].js',
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
              loader: 'worker-loader'
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
