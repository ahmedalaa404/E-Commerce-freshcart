
export default {
  basePath: '/E-Commerce-freshcart',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
