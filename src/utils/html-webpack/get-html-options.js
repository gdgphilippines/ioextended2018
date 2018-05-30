const { resolve } = require('path');

module.exports = (env, file) => {
  const minify = !env
    ? {
      caseSensitive: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      minifyJS: true,
      preserveLineBreaks: true,
      removeComments: true
    }
    : false;

  return {
    template: resolve(__dirname, '../../index.ejs'),
    inject: false,
    filename: `${file}.html`,
    minify,
    env
  };
};
