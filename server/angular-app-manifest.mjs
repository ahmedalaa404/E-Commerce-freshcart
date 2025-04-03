
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ahmedalaa404.github.io/E-Commerce-freshcart/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/login"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/register"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/home"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/categorey"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/cart"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/product"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/brands"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/Checkout/*"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/product-details/*"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/allorders"
  },
  {
    "renderMode": 1,
    "route": "/E-Commerce-freshcart/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7862, hash: '0acc00d344e37ab60a8240c209f0d4269dc49ae956f8694af3e92a6d9713bb5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: '2782554b10f4c2b7bcd3dfaa2fd19f8dac60404969a0d190ad3eeadcad2498a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QRPGMA6X.css': {size: 189958, hash: 'dUfflsV+Ayg', text: () => import('./assets-chunks/styles-QRPGMA6X_css.mjs').then(m => m.default)}
  },
};
