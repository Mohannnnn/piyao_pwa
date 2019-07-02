/*
 * @des service-worker
 */
importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/',
    debug: false
});
workbox.precaching.precacheAndRoute([]);

/**
 * 缓存html  使用networkFirst
 */
workbox.routing.registerRoute(
    /\.html/g,
    workbox.strategies.networkFirst({
        cacheName: 'piyao-html-cache',
        plugins: []
    })
);

/**
 * 缓存css,js  使用staleWhileRevalidate（非同源）或者cacheFirst（同源）
 */
workbox.routing.registerRoute(
    /.*\.(?:js|css)/g,
    workbox.strategies.cacheFirst({
        cacheName: 'piyao-jscss-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ]
    })
);

/**
 * 缓存image 使用staleWhileRevalidate（非同源）或者cacheFirst（同源）
 */
workbox.routing.registerRoute(
    /.*\.(?:png|gif|jpg|jpeg|svg)/g,
    workbox.strategies.cacheFirst({
        cacheName: 'piyao-image-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            //设置图像缓存过期时间
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ]
    })
);

/**
 * 缓存接口数据 使用staleWhileRevalidate（非同源）或者cacheFirst（同源）
 */
workbox.routing.registerRoute(
    ({ url, event }) => {
        const netReg = new RegExp('/api/list/group');
        if (netReg.test(url)) {
            console.log(url.href);
            return true;
        }
    },
    workbox.strategies.networkFirst({
        cacheName: 'piyao-net-cache',
        plugins: [
            //设置缓存过期时间
            new workbox.expiration.Plugin({
                maxEntries: 50,
                maxAgeSeconds: 5 * 60, // 5 minutes
            }),
        ],
    })
);

// workbox.routing.registerRoute(
//     ({url , event}) => {
//         const netReg = new RegExp('/api/list/group');
//         if(netReg.test(url)){
//             console.log(url.href);
//             return true;
//         }
//     },
//     ({url , event , params}) => {
//         console.log(event);
//         if(event.request.url.indexOf('/api/list/article') > -1) {
//             event.respondWith(
//                 caches.open('piyao-net-cache').then(function(cache) {
//                     return fetch(event.request).then(function(response){
//                         cache.put(event.request.url, response.clone());
//                         return response;
//                     });
//                 })
//             );
//         } else {
//             event.respondWith(
//                 caches.match(event.request).then(function(response) {
//                     console.log(caches);
//                     return response || fetch(event.request);
//                 })
//             );
//         }
//     }
// );