const fs = require('fs');
const { resolve, relative } = require('path');
const watch = process.argv.find(item => item === '--watch');
const target = resolve(__dirname, 'src/utils');
const dest = resolve(__dirname, 'public');

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

const manifestBuild = () => {
  console.log('building manifest.json');
  const { app, theme } = require('./spa-lite.config.js');
  const { title: name, shortName: short_name, startUrl: start_url, display, orientation, scope } = app;
  const { icons, themeColor: theme_color, backgroundColor: background_color } = theme;
  const manifest = {
    name,
    short_name,
    icons,
    start_url,
    background_color,
    display,
    orientation,
    scope,
    theme_color
  }
  fs.writeFileSync(resolve(dest, 'manifest.json'), JSON.stringify(manifest), 'utf8');
};

const build = () => {
  fragmentBuild();
  manifestBuild();
}

build();
if (watch) fs.watch(resolve(__dirname, 'spa-lite.config.js'), {}, build);
