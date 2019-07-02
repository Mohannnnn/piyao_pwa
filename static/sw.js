/*
 * @des service-worker
 */
importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/',
    debug: false
});
workbox.precaching.precacheAndRoute([{
        "url": "css/index-d49a4d.css",
        "revision": "a2cffef5d57733c2931cbe5020ff30b2"
    },
    {
        "url": "img/articlepic-32edd6.jpg",
        "revision": "32edd6c7c8aaf1e56aba26a3e8e02bd0"
    },
    {
        "url": "img/audio_3x-8416d7.png",
        "revision": "8416d7d31bfc412908cfc40f62a2021d"
    },
    {
        "url": "img/avatar_default-de3de9.png",
        "revision": "de3de96aba55f5c4ecb92a6dd8ee4d64"
    },
    {
        "url": "img/back_03-2b1855.png",
        "revision": "2b1855c5b05b7b761118f68df51bd015"
    },
    {
        "url": "img/back_home-8dfaf7.png",
        "revision": "8dfaf7ca49f0802f0efbe0169902418f"
    },
    {
        "url": "img/banner-cef006.png",
        "revision": "cef0066fa5b6d536bab1f2f773ce57b2"
    },
    {
        "url": "img/btn_agree_2x-a6df8a.png",
        "revision": "a6df8af3da95beb397806703bbad91ea"
    },
    {
        "url": "img/btn_agree_hl-afec72.png",
        "revision": "afec7272dce3ac7915d34731b5ff27fa"
    },
    {
        "url": "img/btn_cmnt_2x-c88346.png",
        "revision": "c883464b3ff0a7b81d0ac4e848405445"
    },
    {
        "url": "img/btn_play_b-66862c.png",
        "revision": "66862c92c05f57d4c0ee7121f5ffda97"
    },
    {
        "url": "img/btn_reply_2x-3cd8cf.png",
        "revision": "3cd8cf818524cf1e02e7279a96bc8d22"
    },
    {
        "url": "img/btn_voice_play_2x-ce084b.png",
        "revision": "ce084b133a866c97a3365e4b060c7e2d"
    },
    {
        "url": "img/btn_voice_stop_2x-245390.png",
        "revision": "245390fc8c019a718b0337cefb97168b"
    },
    {
        "url": "img/btn-play-16e80a.png",
        "revision": "16e80a866fb6da3ca7ffad8539527c2e"
    },
    {
        "url": "img/comment-3cd8cf.png",
        "revision": "3cd8cf818524cf1e02e7279a96bc8d22"
    },
    {
        "url": "img/daily_58-96bccf.png",
        "revision": "96bccf9a00f0b99c42cacb13087d1371"
    },
    {
        "url": "img/daily1_2x-396f0b.png",
        "revision": "396f0b21f4de9b812c0423f88a860554"
    },
    {
        "url": "img/daily2_2x-44d260.png",
        "revision": "44d260d69fab554eb53f5f03fbef4466"
    },
    {
        "url": "img/daily3_2x-0305e3.png",
        "revision": "0305e3c5b06fb9b0e47c0bab7efd7305"
    },
    {
        "url": "img/default-avatar-6e5956.png",
        "revision": "6e5956cac1bacb1d79421ae8abbc43d2"
    },
    {
        "url": "img/dislike-5b9698.png",
        "revision": "5b969818dae934a6466b3be13f49bf5a"
    },
    {
        "url": "img/fail-bc54d1.png",
        "revision": "bc54d168c2cdd633e39124273a4174c6"
    },
    {
        "url": "img/hide-0bc4cb.png",
        "revision": "0bc4cb1e012da678351b9040d72d3f6a"
    },
    {
        "url": "img/like-dd50fb.png",
        "revision": "dd50fbf105579c43ddfac0b7afdbac37"
    },
    {
        "url": "img/likeblue-88e94b.png",
        "revision": "88e94b79b836f7ef2913b31e9bacf370"
    },
    {
        "url": "img/likegray-6f203a.png",
        "revision": "6f203a471341366e1a92781d0941c134"
    },
    {
        "url": "img/logo_02-1bb93a.png",
        "revision": "1bb93a405256a840715f153ad1ad0ac7"
    },
    {
        "url": "img/mask-avatar-db76be.png",
        "revision": "db76beb9ea6a91aa54671e7f4fa3dfaf"
    },
    {
        "url": "img/nomess_2-1de41e.jpg",
        "revision": "1de41e7a9f64531f21ae45a89f986e8f"
    },
    {
        "url": "img/noMoveBg-d568f8.jpg",
        "revision": "d568f80e6a40daadd09182e84692945d"
    },
    {
        "url": "img/normal-sprite-e6fd1f.png",
        "revision": "e6fd1f8ddada44f7d9823d5e201f99b9"
    },
    {
        "url": "img/photo_03-c35c4c.jpg",
        "revision": "c35c4c119795997ca1c7c5d54d2a5cba"
    },
    {
        "url": "img/piyao-share.png",
        "revision": "81bbc053d43d362dc826d4ac4f2d8a3a"
    },
    {
        "url": "img/platforms-819d25.png",
        "revision": "819d254d51d12733c3a69ede62b3e2d7"
    },
    {
        "url": "img/popTitleIcon-fbfc5d.png",
        "revision": "fbfc5dc062c9d175a755d10f1dc9f902"
    },
    {
        "url": "img/safari_share_04-9c8fad.png",
        "revision": "9c8fad1cc9165a892adcd391c37029ca"
    },
    {
        "url": "img/say_icon-42172a.png",
        "revision": "42172a9bd9b23dfad96982170866a671"
    },
    {
        "url": "img/sina-82d87c.png",
        "revision": "82d87c073202992fd9e39c34a933c5c0"
    },
    {
        "url": "img/success-51a584.png",
        "revision": "51a584f7a8931d6502faf47dd74ea05a"
    },
    {
        "url": "img/tip_add-f2a7b9.png",
        "revision": "f2a7b92c4d6223e8e76c9a3e8db28db5"
    },
    {
        "url": "img/user-6e5956.png",
        "revision": "6e5956cac1bacb1d79421ae8abbc43d2"
    },
    {
        "url": "img/video_3x-ee6b55.png",
        "revision": "ee6b55868343486039550b208687d3f4"
    },
    {
        "url": "img/write-1b9e09.png",
        "revision": "1b9e09756a4a88971e2a281ed23187e7"
    },
    {
        "url": "img/wxshare_02-c1e475.png",
        "revision": "c1e47591862aeb17cf9fd80d31878333"
    },
    {
        "url": "img/zan1-a6df8a.png",
        "revision": "a6df8af3da95beb397806703bbad91ea"
    },
    {
        "url": "js/index-5db8af.js",
        "revision": "7a80dc777b341922c6beea669a8522ed"
    },
    {
        "url": "js/vender-2468e5.js",
        "revision": "dd301ea024b83b7a50564c8f4acfd676"
    }
]);

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