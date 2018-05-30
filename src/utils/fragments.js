const fragments = {
  '/': () => import('../pages/page-home/index.js'),
  '/design-guide': () => import('../pages/page-design-guide/index.js'),
  'no-page': () => import('../pages/page-not-found/index.js')
};
export { fragments };
