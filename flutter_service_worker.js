'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "d26b39d3510f081f23df3dfae90aa616",
".git/index": "20afb11ee13b838b9a5480a6f7f85add",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "a5cd7006a12abb0134ccf60c184033e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/COMMIT_EDITMSG": "40993b812ce063e76fb0c35d4ad53e1d",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/7d/edfcca8c1cf4022e756a2b942b893713310c5c": "a44f70d70185e10df0e03c73b9ca69cb",
".git/objects/ad/da4ce8eed0c0c38faa4afe8214492cc1e8221e": "d69ecd6b02bb576ea9c680e8d9913372",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/d7/587f5341ec2d74a42379a82970c5b1724090d1": "84c88ce136335d7a4e29e66bc5791e62",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/73/a5346a3d8108af409f16c00396f87c71640549": "7b18918698b8f9cf4f69e6e28528ccb0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/47/3feb16266b8e811e85d145192ac427317e8c73": "0f97fc955d5393cd2f284bdc7f727e2a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/51/3812888894ff2278fceae32fbe9a1ae83ae4f3": "e6f7f061f1e54e7caa9f385dccde9885",
".git/objects/a8/96874661dc52d16cf6ee0f38eb268f5db15d27": "028eef1f2de5a521f4f171697962ced3",
".git/objects/46/def01be7378e1765dc9e932daa4b20acf74675": "d1d4fdd7465f5f11b85daeb93900a1b3",
".git/objects/48/fbf94019adf78f98a97e07c3046baa1f700db0": "69593c3dcf196fe4dd32c2d9eec8b99a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/7f/e6fef7ac1e4314b501b9daf8ca76e1e3f1443e": "29c68e37d49749296766a819842aea45",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/8d/09fb53dd42e3b39d011d1eb13d783100bcbf77": "a810f958194115625c44adb05ea423c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/1e/0788b9aa36586e2c30ec992f3835dbe4b78fa7": "fdbe6d6eedbb367de72cc605cf09521c",
".git/objects/b8/c20e14dd63c93e330ece871f9a42579c3b6a72": "feed097e7736228cf8e568cfcbe5ef5e",
".git/objects/29/c01f00b815e2de26fa52050ab5d9be76abb132": "d93917069fb17615b9370149f0cb11bd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3b/930bb8fd63cee440cafae7fec0a8da357d0a65": "fb9ad99c1778b5babff43cf19ea128db",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/39/8578c2e0e8f5ad7ae95d132b2593d53c4071ab": "281312896ca92d4bec174dfd7be00fa5",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/28/8900cfc2fd2dd39baa4b97ed67c7802004150d": "001b3e9f8755aa9c2e55da9222933fb4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/cfeafed1eedb5c9f723cab675553481bc917f1": "9b620f63ad91b4c25ee54e7665346471",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/f8/24836256bfd4d76a099a846be91d9c23faecb9": "ffe047b69321cb1be6aad683ebbcfe48",
".git/objects/da/36eb305760480367d8c5f612142f1eb666a5a0": "4f864d64b0076db753e30ab948a52d84",
".git/objects/0b/b6d20e632e976d5ec36e97a58b9bb4db959eb4": "03ec9ca45743f4e31e6b7923642f0062",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/04/f9ee683e0a1e19bde24c0b41ad457391e67b2b": "e01eedaa7937eb8d1470fc2508138f20",
".git/objects/93/115a1df867a5a55a7c8d9ac5df90464e3e8e57": "61b3ba83522aa22e90649a144b6e807a",
".git/objects/93/ac52ad83f4cb98858f0c2619d8a8bf3601ae7b": "7bc2bb36e03c2b27947b602b7d9f36d3",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/01/40963a03a2431efda2ac3dc481ecf441b18d67": "ebb2f44f2a68661fa0bc70802e98b8b2",
".git/objects/70/7b990c29249f016fe7a007ae4382f4407c9ed8": "603d1624a6a97cd907e089057cabf7bb",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/f9/2fa472e401c25da233544c91ac724bb29f8295": "6e5bb91aa63c7d6d6dcee7fbed3469d8",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/de/420512468e0d218029166e916cde0d45204658": "640dbd07d55b8d76e633851a7451b3f9",
".git/objects/0e/70caa67b783818281ab96ca1dd9ef6134adf1b": "109946df50954d7cfaf24d77aae22540",
".git/objects/f3/533c18ac3c78c524b60070dde516b62d91f64c": "75ca2e676a435538328e67ebf0b13950",
".git/objects/b2/b1a6e37ddf574b03c8b45693bfc105cc565018": "b2aeba55662e11e6e65b785b5c4b3ce4",
".git/objects/b2/0f15d56554ca047a3bd2b5c6b7a83300a722b0": "a17ebb06ddcaf4df915130a084d64df4",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/6f/bc9da31e652999fb73da6ebbaed3a0c07430a2": "f4e3e62609bfb352d5b7f785e9e72a5d",
".git/objects/72/5c88fe2caa420ac2c95527b329430e5b829c28": "cd02448d0271c48f150e5f7883a0dbe9",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/80/3f55f9b9078af9a6cd281cfc039da5c1e2797a": "1f287dc3aa8888694ea78a1f621f8f20",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/67/06034345975d17a37ad75674dcd98423b339d6": "0eec21041a1edfe174bee49918f6cc67",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/9d/e7ac559a76853ee9686134202e51afa697252e": "d2a827ef00402f4db4ece1a0c5f2bb15",
".git/objects/9d/4ed9f7694c80be3747bd42d98907a425bbaa35": "df320d4085428e1f5887991f869948b1",
".git/objects/08/2909954b0dd93c68f24535e21fb1dc5fa24de0": "c02fd576f98f6d5b450707eb81ef7240",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/bf/5aebf195771dd354256aeef7c2cc21de584dc3": "262ba7c6aa268ebb7292d1ed8354021b",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/d2/3340792d4daddca9d3fd7343111a8d8bbe657b": "ece621453ab4561555966a22b342a8ff",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/31/22c001d7d816c4be107e20ca176ae846ecd885": "c92100323ad8992079a4031a33d778a3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/83/d8088252af7bc294144609e60823ee26a380c7": "a96fba7be537c3cd3c2f900f2e566b86",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/38/50fc76c8a688dede2471b3ef9c5e22847a6941": "cf3b482ad1052c71ded85cf9a73fec25",
".git/objects/a6/03fae0638aaf8040dd3313e52cd3d607d1bc9b": "ffb323c21c83811c357a9423fc5e44c7",
".git/objects/b3/9f62694fefce9abdc611fac25692dd84fbeaa1": "c4080b79aa77823af98bb854e78bb413",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "7d55e4853ca9f9605a4c2501bcd1916b",
".git/refs/heads/main": "7d55e4853ca9f9605a4c2501bcd1916b",
".git/logs/HEAD": "c6b8a755f47faf8acb47f19f1a6031e7",
".git/logs/refs/remotes/origin/main": "e282a792fb52ecb91bf7530b5e6fc86e",
".git/logs/refs/heads/main": "d394b712f35d407973704c28dff2a573",
"assets/NOTICES": "4affc4b992ae7eb2e2ece436c4df4efe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "e03e3962242e925aea81b26449fc6ccc",
"assets/assets/abis/token_abi.json": "39dab30ec5b573b30462bf55da3e5657",
"assets/assets/abis/staking_token_abi.json": "925b122884762fb241471e52fc62c7f6",
"assets/assets/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/assets/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/assets/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/assets/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/assets/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/assets/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/assets/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/assets/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/assets/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/assets/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/assets/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/assets/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/assets/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/assets/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/assets/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/assets/images/ethereum.png": "9a2a8bda979bddbf0c0ef29554831e69",
"assets/assets/images/bitcoin.png": "6406fc981e4e7fa912304a59f0f5a964",
"assets/assets/images/litecoin.png": "c151300abac08b60725da3b4f6f11ae6",
"assets/assets/images/monero.png": "dffcbf80d3428450ea2a5e4f3559a736",
"assets/assets/images/tron.png": "3954941098bf4b0587184c5836a24bae",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "e31a5aec134fbcf84e24a9f7a5a8887f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5386a1040c9469564b67a6a98f86db9c",
"/": "5386a1040c9469564b67a6a98f86db9c",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "44f93688618791bb530666e1a49372cf",
"version.json": "4bc5650029cd764484377df1688d0afa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
