const fs = require('fs');
const { resolve, relative } = require('path');
const watch = process.argv.find(item => item === '--watch');
const target = resolve(__dirname, 'src/utils');

const fragmentBuild = () => {
  console.log('building fragments');
  const { fragments, routes } = require('./spa-lite.config.js');
  const lazyLoad = [];
  routes.forEach(route => {
    lazyLoad.push(`'${route.route}': () => import('${relative(target, resolve(__dirname, fragments[route.page]))}')`);
  });
  const string = `const fragments = {\n  ${lazyLoad.join(',\n  ')}\n};\nexport { fragments };`;
  fs.writeFileSync(resolve(target, 'fragments.js'), string.trim() + '\n', 'utf-8');
};
fragmentBuild();
if (watch) {
  fs.watch(resolve(__dirname, 'spa-lite.config.js'), {}, fragmentBuild);
}
