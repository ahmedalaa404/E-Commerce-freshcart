
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/login"
  },
  {
    "renderMode": 1,
    "route": "/register"
  },
  {
    "renderMode": 1,
    "route": "/home"
  },
  {
    "renderMode": 1,
    "route": "/categorey"
  },
  {
    "renderMode": 1,
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "route": "/product"
  },
  {
    "renderMode": 1,
    "route": "/brands"
  },
  {
    "renderMode": 1,
    "route": "/Checkout/*"
  },
  {
    "renderMode": 1,
    "route": "/product-details/*"
  },
  {
    "renderMode": 1,
    "route": "/allorders"
  },
  {
    "renderMode": 1,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7733, hash: 'b4c3b32b5f33d31763b1fb9d662336ca386eaa4305cc18441b2abf9216e9b2df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '17c17d535cefdabfe5607b51f8ec359f646f268f94ec73345014a45022a06a27', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DS3RBIU6.css': {size: 188619, hash: 'WlfmQ/eyH9o', text: () => import('./assets-chunks/styles-DS3RBIU6_css.mjs').then(m => m.default)}
  },
};
