const app = {
  title: 'Google I/O Extended Roadshow 2018 Philippines',
  shortName: 'I/O Extended Roadshow 2018',
  description: 'Google I/O is an annual software developer-focused conference which features a keynote on the latest updates and announcements by Google. The conference hosts in-depth sessions focused on building web, mobile, and enterprise applications.'
};

const theme = {
  webApp: {}
};

const fragments = {
  'page-home': 'src/pages/page-home/index.js',
  'page-location': 'src/pages/page-location/index.js',
  'page-design-guide': 'src/pages/page-design-guide/index.js',
  'page-not-found': 'src/pages/page-not-found/index.js'
};

const routes = [
  {
    route: '/',
    page: 'page-home'
  },
  {
    route: '/design-guide',
    page: 'page-design-guide'
  },
  {
    route: '/location/:id',
    page: 'page-location'
  },
  {
    route: 'no-page',
    page: 'page-not-found'
  }
];

module.exports = { app, theme, fragments, routes };
