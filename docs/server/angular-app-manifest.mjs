
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
    'index.csr.html': {size: 7755, hash: 'f32a4a76bc0985521cd536abfa68d23b124e1ea1231c694e1c8b9967fad132b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1079, hash: 'a173f9abb356caed5f5cad33a8fbd66f3e853aa31431e86caf92c4f4a577d90d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DS3RBIU6.css': {size: 188619, hash: 'WlfmQ/eyH9o', text: () => import('./assets-chunks/styles-DS3RBIU6_css.mjs').then(m => m.default)}
  },
};
