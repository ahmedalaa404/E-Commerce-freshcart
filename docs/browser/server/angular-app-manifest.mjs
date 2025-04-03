
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-Commerce-freshcart/',
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
    'index.csr.html': {size: 7832, hash: '6f6194ada161a79ae0812be3242b6b21d0a92068191fb47d22101aab1984d77b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1079, hash: 'f30846f15dcad2d1cd66963c7fd61a0aaa9d6092bf1cf35f993b14254219365f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QRPGMA6X.css': {size: 189958, hash: 'dUfflsV+Ayg', text: () => import('./assets-chunks/styles-QRPGMA6X_css.mjs').then(m => m.default)}
  },
};
