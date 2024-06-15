'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b4c485fa57d006c49c606a252df6e957",
"version.json": "cda7d3e22769dc46d9e4cbee717f0667",
"index.html": "54748b436fa4b9852a29b27819233e39",
"/": "54748b436fa4b9852a29b27819233e39",
"main.dart.js": "65a727ec168c142e2b971ed74d09d8d1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0bef608784e3e4a8806f6a31df153c76",
"assets/AssetManifest.json": "9c672fd6429f9922ca2255c62b2e39f0",
"assets/NOTICES": "065518e5e5d59490b355862e7b5f7cff",
"assets/FontManifest.json": "49799a3f76c3218592fb58ed61e301cf",
"assets/AssetManifest.bin.json": "be5bc9c402a6d73c643842fe929b0ef3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "11e87781463a7a0e2d823dae9cf0578f",
"assets/fonts/MaterialIcons-Regular.otf": "0e6b016990cf441cfe619c31ae763c16",
"assets/assets/images/img_1.png": "20d9c7737b446957a03a7238464c1cf2",
"assets/assets/images/img_1.jpg": "c0d3af6f4b3121da6ee9a160ab6a4b08",
"assets/assets/images/appstore.svg": "0adc0682ef3cd0acdee0c126275bbf3b",
"assets/assets/images/whatsaap_update_screen.png": "bb78257aaf13ed491c271c39fc5dc230",
"assets/assets/images/whatsapp_header_image.png": "2406bf5c8fab6d8d4061b3790927521d",
"assets/assets/images/emirates.png": "ad3d1ec171235ab9afbb1ac5d3a6209c",
"assets/assets/images/arrow_left.svg": "8c11b16e631e0b6d7fa38dae3e91479e",
"assets/assets/images/instagram.svg": "29e2295c292fb5bac96e62f137a8f540",
"assets/assets/images/whatsaap_chat_webp.webp": "bebee4496bbc89e8db44f3639b308dd9",
"assets/assets/images/map.png": "b8ef07a0dbd360df52681f4c61d9db02",
"assets/assets/images/blue_arrow.svg": "ce74a64f2f90495292101da22554958e",
"assets/assets/images/collapse.svg": "e497113e5f91bd069b26667413c2ccdb",
"assets/assets/images/arrow_right.svg": "abafb3ca45475dad3ec73705c4d8c9b1",
"assets/assets/images/whatsapp_header_image.webp": "9665527a12c8d2bf8def0a4167198b4b",
"assets/assets/images/airplane.png": "3890828a7c56bf5a3b93c1f21459fb64",
"assets/assets/images/whatsapp_phone.png": "b85d2c5c6e5c169698ed3d4ee8114351",
"assets/assets/images/facebook.svg": "6e068ceac47ec4f5eb9bbdb7011bcff7",
"assets/assets/images/indigo.jpg": "0090f1a0629f9109149eff17dc3d93b2",
"assets/assets/images/whatsapp.svg": "addc07a61d59d3ee79c0d45d4d74931e",
"assets/assets/images/profile.png": "6405f750cd73ff3dab4f30133cf96102",
"assets/assets/images/wa_screen.png": "23cbb640a310d07454e5ca082bb8ea21",
"assets/assets/images/playstore.svg": "1ed9ca8b48d1792018f200ee378a2cfa",
"assets/assets/images/whatsaap_chat.png": "1388fd3a173aac91819d91cea6a9be0c",
"assets/assets/images/qr.png": "3546adbe8cced7fea55c237cd4568d9a",
"assets/assets/images/uk.png": "f515827447851716ac625f44f5fe4aca",
"assets/assets/images/twitter.svg": "4ef6854c6930629db8468a7621477de5",
"assets/assets/images/globe.svg": "830c2787a2037622ac3ac170e05de307",
"assets/assets/images/logo.svg": "9aebc1eb039ccc94c0d1faf3469e3e1b",
"assets/assets/images/linkdin.svg": "4be7c025047c60b3921302318c203adf",
"assets/assets/images/coming_soon.png": "d9e1d0f46e1cffd825ca6c5e43135db6",
"assets/assets/fonts/UberMove-Medium.ttf": "b68d0d5b977e42a2bf3b07915b43a7d1",
"assets/assets/fonts/UberMove-Bold.ttf": "0860f52658272e1f6a6e83cb6ed135f7",
"assets/assets/fonts/UberMove-Regular.ttf": "4ead6aacd88013cbf57f08cc8fbc6d70",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
