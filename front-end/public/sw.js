if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/K8miobDLXrXexx1mSLaeT/_buildManifest.js",revision:"d7092da55070c82f8098f283d4109235"},{url:"/_next/static/K8miobDLXrXexx1mSLaeT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/424-1ea6634a44d70ec5.js",revision:"1ea6634a44d70ec5"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-f8696c2171c48b6c.js",revision:"f8696c2171c48b6c"},{url:"/_next/static/chunks/pages/_app-ff3f80fd0e440a3f.js",revision:"ff3f80fd0e440a3f"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/chat-002f225fa45d0954.js",revision:"002f225fa45d0954"},{url:"/_next/static/chunks/pages/chat/%5Bid%5D-d5112ec69a569c95.js",revision:"d5112ec69a569c95"},{url:"/_next/static/chunks/pages/index-fc7db1cb40dfec13.js",revision:"fc7db1cb40dfec13"},{url:"/_next/static/chunks/pages/login-f30cd3f150da85fd.js",revision:"f30cd3f150da85fd"},{url:"/_next/static/chunks/pages/profile-1de9af26e1cf8b7a.js",revision:"1de9af26e1cf8b7a"},{url:"/_next/static/chunks/pages/profile-edit-0de227e8de6167b3.js",revision:"0de227e8de6167b3"},{url:"/_next/static/chunks/pages/questionaire-7dde441420389192.js",revision:"7dde441420389192"},{url:"/_next/static/chunks/pages/questionaire-done-fb19f94e10d5ebc7.js",revision:"fb19f94e10d5ebc7"},{url:"/_next/static/chunks/pages/rewards-6908ce9f234fa98e.js",revision:"6908ce9f234fa98e"},{url:"/_next/static/chunks/pages/signup-b1c474e61fb96ee3.js",revision:"b1c474e61fb96ee3"},{url:"/_next/static/chunks/pages/tutorial-13e9f276cd15141a.js",revision:"13e9f276cd15141a"},{url:"/_next/static/chunks/pages/tutorial-done-cd6e34f6241a7105.js",revision:"cd6e34f6241a7105"},{url:"/_next/static/chunks/pages/welcome-ba0a0dac1dbd4156.js",revision:"ba0a0dac1dbd4156"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/053f3678fd46bf3e.css",revision:"053f3678fd46bf3e"},{url:"/_next/static/css/06883d8675ebf313.css",revision:"06883d8675ebf313"},{url:"/_next/static/css/17bc1ade29e0a34d.css",revision:"17bc1ade29e0a34d"},{url:"/_next/static/css/31435e235eae450c.css",revision:"31435e235eae450c"},{url:"/_next/static/css/3cce0ad120b11e6e.css",revision:"3cce0ad120b11e6e"},{url:"/_next/static/css/3f906b3f1b5a75ab.css",revision:"3f906b3f1b5a75ab"},{url:"/_next/static/css/4c27d4faf5076dab.css",revision:"4c27d4faf5076dab"},{url:"/_next/static/css/8f39046a9a950d68.css",revision:"8f39046a9a950d68"},{url:"/_next/static/css/a350604536e27a5d.css",revision:"a350604536e27a5d"},{url:"/_next/static/css/ab4651db770e4ab2.css",revision:"ab4651db770e4ab2"},{url:"/_next/static/css/beaf8110048755b3.css",revision:"beaf8110048755b3"},{url:"/_next/static/css/c600bb1e85f82621.css",revision:"c600bb1e85f82621"},{url:"/_next/static/css/cfba8ae309d9eb08.css",revision:"cfba8ae309d9eb08"},{url:"/_next/static/css/e44c4348b0537736.css",revision:"e44c4348b0537736"},{url:"/assets/apple.svg",revision:"36897a1cb7d1cfe77de1401e464c011f"},{url:"/assets/art.svg",revision:"db660f3040aa8859b09fb8238025512d"},{url:"/assets/back.svg",revision:"be2d9be039c9534ef1ccd080a3a485ed"},{url:"/assets/back_orange.svg",revision:"6244e698aa730a8b0c293532a989b40e"},{url:"/assets/basketball.svg",revision:"4a977346b8d85897793937345410474a"},{url:"/assets/buildings.svg",revision:"8473721de7337b07a1bc47efae3724b3"},{url:"/assets/complexz.svg",revision:"b683230cd7edb85c1ecdd5052bcb99be"},{url:"/assets/cross.svg",revision:"92b92209cc51c4d46ad497556b386542"},{url:"/assets/eye_closed.svg",revision:"bde9df77e0b2113f908ae9653c652d90"},{url:"/assets/eye_open.svg",revision:"1d282328cdc3c36c0050b72d436e9567"},{url:"/assets/facebook.svg",revision:"4a3c0d258862f97d3b6a90096da8163f"},{url:"/assets/female.svg",revision:"15d97fa782f3522fe453fd46acf9f7c7"},{url:"/assets/filter.svg",revision:"f0bc67cffd57813f4bf6c4f8740d7c84"},{url:"/assets/filter_orange.svg",revision:"0a1f7977623cb3cadc7ad8787d8d71f7"},{url:"/assets/food.svg",revision:"dca829fc6336f6a7df13a94b9504b672"},{url:"/assets/google.svg",revision:"fd168571ba2680e9032c7b23fc069674"},{url:"/assets/happy.svg",revision:"1d86c1b9f761e220c92bf729fad957bd"},{url:"/assets/history.svg",revision:"391394df50bd7d08d8a4c422870860f7"},{url:"/assets/house.svg",revision:"125a25e2b9e645c7d298c44798b3b173"},{url:"/assets/logo.svg",revision:"4406c9308d38376210151efbd4f65c8e"},{url:"/assets/logo_orange.svg",revision:"f1bf0777315081efb306513427b8458e"},{url:"/assets/logo_small.svg",revision:"829eac6eeddba0615179ed8f58740049"},{url:"/assets/magnifying_glass.svg",revision:"d5a02e50d7b52ae29bcf31e2463eabcb"},{url:"/assets/male.svg",revision:"f4fe8b0765fdeda2337bd625a4a9c519"},{url:"/assets/mountain.svg",revision:"45914327b5556e05f9d3d41261108d0d"},{url:"/assets/music.svg",revision:"d52a2942d8a1d0c59e3c802e8e2be5c0"},{url:"/assets/party.svg",revision:"a7f3844f0b45c8fa76a8473b5a8d98f0"},{url:"/assets/people.svg",revision:"19a9181d6d34f2af335b6770d19220d5"},{url:"/assets/plane.svg",revision:"57a658a05b98eb7544f7f10b183b37e7"},{url:"/assets/plus.svg",revision:"6cd230abd0c4237532f478e905fcf229"},{url:"/assets/profile-pic.jpeg",revision:"067cc698cb32c4aba94ed0ee78c13f88"},{url:"/assets/spiritual.svg",revision:"c6a1485789b552e90a2c1cb824e6d990"},{url:"/assets/star.svg",revision:"d672855b4d511e04381b7ef5e716e73a"},{url:"/assets/star_orange.svg",revision:"485fce42366548517c4efb5b188b9051"},{url:"/assets/trees.svg",revision:"4c5901f4fb7e57d199777aa9bcd87546"},{url:"/assets/unicorn.svg",revision:"8e98a86dd4266ee97d63c175894e0185"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));