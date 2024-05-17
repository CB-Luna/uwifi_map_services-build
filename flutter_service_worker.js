'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c4834bbbf195e9d2e7036b31f2d62606",
"version.json": "a5240a140e9e69a7541ed693929ad3bc",
"index.html": "e74bf904ad79ec2952c62422cd69ff3b",
"/": "e74bf904ad79ec2952c62422cd69ff3b",
"main.dart.js": "d8a72492280669ec6386e082b4fbf913",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "0e52b4b64df1270a4262f2442c2f3ae2",
"icons/Icon-192.png": "09738b0248dd5c2a5fde3ad6b8ed3fca",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "7913dae9ea22ef3634ba896c90eec885",
"manifest.json": "259a3176034f70d65ba05f76b20b8562",
"assets/AssetManifest.json": "4f6f4b203ec93c1af2c2fb8df5c320bf",
"assets/NOTICES": "71568fabb91c310f64b7b339ce3121de",
"assets/FontManifest.json": "5a6a30c8cb3fa852d30c1c06d95cf676",
"assets/AssetManifest.bin.json": "08719807197110950505090f0a681e30",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d6d5a38d71b47930e50ecb3e3635488c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/gigFastInternet.png": "b73458bddd9b16b90078753eff25bb51",
"assets/assets/images/blue_bg_image.jpg": "2ac63345908b3b6d83b21c333b8df16b",
"assets/assets/images/fees.png": "85c6e427e4b7baf64859526b2851bf0d",
"assets/assets/images/icon_gigFastTV.png": "7e80ebec3f6abb5850285ff16e4b8055",
"assets/assets/images/swipes.png": "a46565f1d25162a21fc561721455cab4",
"assets/assets/images/tvicon.png": "7e80ebec3f6abb5850285ff16e4b8055",
"assets/assets/images/location_pin_mini.png": "7a42879d3d869b88a8be06a1c3d1209c",
"assets/assets/images/instagram.png": "5a28e34e9f5b0a3675fd33b12200c35d",
"assets/assets/images/referral.png": "debd4888774e9e555d86505396c25fe4",
"assets/assets/images/you-pointer.png": "bee16341fc503475ede90c731c34d6ab",
"assets/assets/images/bg_image.png": "f1bdad01fb0b6f8cb0defc0bd28ad848",
"assets/assets/images/bundle.png": "3035b4730c4d4127ff48fb9f05ce3be6",
"assets/assets/images/gigFastVoice.png": "a3f77afe20fae41a4280a3d7bee92f85",
"assets/assets/images/pointer.png": "d461e06941c51be6fed903838e24f9f5",
"assets/assets/images/loading.gif": "7774d51fc737ace7f8fb6a35684bfa74",
"assets/assets/images/new_service_request.png": "10abe1fb238a7406b79b8c2d59d0496a",
"assets/assets/images/icon_gigFastVoice.png": "090de74b904e52f118bab810ac4ade03",
"assets/assets/images/lanscape.jpg": "2e99fbf18fa78227ff0f3c5532480a48",
"assets/assets/images/gigFastTV.png": "b70f875e6e82f57fd7aac7ee98926982",
"assets/assets/images/ATA.png": "ccef139169d23c424271f544c6ac6c84",
"assets/assets/images/twitter.png": "400dc88500c0bc5e11f6c953dedcc7ab",
"assets/assets/images/starzlogo.jpeg": "63a2a4146730dc5016efb921487d2f31",
"assets/assets/images/bouncy_down.gif": "ba83008f6168d2cb3bf5c692cc7f693d",
"assets/assets/images/phone.png": "b74034de2116b9542ea0291a6f297329",
"assets/assets/images/router.png": "b03b839e6e31cdc5b41835978387d8d5",
"assets/assets/images/youtube.png": "b0dbc67fd7b037e10ae99b8c68dbaa9f",
"assets/assets/images/sideCircles.png": "6f464533d0828361745cce74b60de084",
"assets/assets/images/uwifi.png": "01a0c0979e2f2cd5e9ae9851f1f7d192",
"assets/assets/images/bg_gradient.png": "0d7e10afabe75ad3bbb4b0c44bc30be6",
"assets/assets/images/google.png": "02e7940cbff63de74bb261800a859dce",
"assets/assets/images/voice.png": "122d246597bba0d1ad732310d443718b",
"assets/assets/images/facebook.png": "fe57c5ef69a566e3a9b18b7c298fa534",
"assets/assets/images/icon_gigFastInternet.png": "28388129133f1ba2b374f83ce0e6101d",
"assets/assets/images/tv_popup_bg.png": "e918a2520440e9113a27f6a8cec6134e",
"assets/assets/images/voice1.png": "b595967b08f53b78d9d3e59f3ca6ae55",
"assets/assets/images/rtastb.png": "9c4daaedb4886529a0bddf68d56b6c03",
"assets/assets/images/rta_logo.png": "c9cd0e20d12d5cde57955f6f0363ed7a",
"assets/assets/logos/fxm.png": "fc8922b439460c6a217efdb5135da517",
"assets/assets/logos/starz.png": "de5bf7820dc06419b3e6e9de4c2afadb",
"assets/assets/logos/hbo.png": "4fa09001fda396151ff9914382e1b4f6",
"assets/assets/logos/cinemax.png": "8bc210e6ccf2a1775d88d5e0a0f0b99e",
"assets/assets/logos/boom.png": "5ebf95430682dca793421bd096e89340",
"assets/assets/logos/showtime.png": "90cfacdaebcb29f74b302aa2d29f7a21",
"assets/assets/logos/espn.png": "35aafe43301379f4b1c3de43ba8e6a75",
"assets/assets/MyFlutterApp.ttf": "219268b18ca149122fd6229e1a92e328",
"assets/assets/documents/RTAPhoneLOA.pdf": "5724bdfd0569921273ff24730a5c4267",
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
