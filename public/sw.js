if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4GfqaopiKfWYLCLkeDC4C/_buildManifest.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/4GfqaopiKfWYLCLkeDC4C/_ssgManifest.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/0b7b90cd.71129a5e4ef3148753a4.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/11.c91ea44af310fd4a61be.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/2dd8024639213757075864c624e37c2da904a9c5.a79bd759dd81f3d16e2c.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/commons.ec3d9cce8b2cbbb66e75.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/framework.e48280befedc86156291.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/main-ea9b7cc754ca4c9b794d.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/pages/%5Bslug%5D-c3ea56fd2a0f8957d5a0.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/pages/_app-b682ac2317f3c2b807a1.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/pages/_error-b3ccb64d8a1aec3efb8f.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/pages/index-1ad34c8840961044c2c9.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/polyfills-8a9ca68ce2f6a778e0e3.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/_next/static/chunks/webpack-b7b578d0c8903caab77c.js",revision:"4GfqaopiKfWYLCLkeDC4C"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"9d55a5d7d4c135d9a104ce91f4835a27"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
