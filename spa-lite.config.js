const app = {
  title: 'Google I/O Extended Roadshow 2019 Philippines',
  shortName: 'I/O 19 PH', // 12 characters max
  description: 'Google I/O is an annual software developer-focused conference which features a keynote on the latest updates and announcements by Google. The conference hosts in-depth sessions focused on building web, mobile, and enterprise applications.',
  sentry: 'https://c330f89cdbf7417baf2524b458312070@sentry.io/1221172',
  baseHref: '/',
  startUrl: '/',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  twitter: '@gdgphilippines',
  twitterCreator: '@tjmonsi',
  image: 'https://ioextended.gdgph.org/data/images/landing-large.jpg',
  gaId: 'UA-121115629-1'
};

const theme = {
  themeColor: '#5b73fd',
  backgroundColor: '#5b73fd',
  favicon: '/assets/manifest/favicon.ico',
  webApp: {
    capable: 'yes',
    statusBarStyle: 'black-translucent',
    tapHighlight: 'no'
  },
  icons: [
    {
      src: '/assets/manifest/48x48.png',
      type: 'image/png',
      sizes: '48x48'
    },
    {
      src: '/assets/manifest/72x72.png',
      type: 'image/png',
      sizes: '72x72'
    },
    {
      src: '/assets/manifest/96x96.png',
      type: 'image/png',
      sizes: '96x96'
    },
    {
      src: '/assets/manifest/144x144.png',
      type: 'image/png',
      sizes: '144x144'
    },
    {
      src: '/assets/manifest/168x168.png',
      type: 'image/png',
      sizes: '168x168'
    },
    {
      src: '/assets/manifest/192x192.png',
      type: 'image/png',
      sizes: '192x192'
    },
    {
      src: '/assets/manifest/512x512.png',
      type: 'image/png',
      sizes: '512x512'
    }
  ]
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
