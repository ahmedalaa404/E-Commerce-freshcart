
export default {
  basePath: 'https://ahmedalaa404.github.io/E-Commerce-freshcart',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
