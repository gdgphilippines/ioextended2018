const { resolve } = require('path');
const fs = require('fs');

module.exports = (dev, isModule, file) => {
  const minify = !dev
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
  const preload = [];

  if (!dev && isModule) {
    const public = fs.readdirSync(resolve(__dirname, '../../../public'));
    for (let file of public) {
      if (file.indexOf('worker') >= 0) {
        preload.push(file);
      }
    }
  }

  return {
    template: resolve(__dirname, '../../index.ejs'),
    inject: false,
    filename: `${file}.html`,
    minify,
    preload,
    dev
  };
};
