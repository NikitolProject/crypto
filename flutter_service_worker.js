'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "57b0be82e00d1a6c5995c45e9e8409fa",
".git/index": "b22d61ec049dace89469c53f278ec2c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "a5cd7006a12abb0134ccf60c184033e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b88b435a7ecac7667872ac1efd2b39ae",
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
".git/objects/49/8cbd69bf8e65c5ca7961b1e83f4609b6c3799b": "7b53a8eea95b7fa90223d89b120731e6",
".git/objects/6d/15b7ef7241aabcd8c16fb3681480def0879fe9": "4a4c60b1fd84b66bc8b9b03466d76f39",
".git/objects/27/1be04b8183fe12d6a69703a37292b329a3d31b": "36ac372a01cf9efcb8702715bbf3666e",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/7d/edfcca8c1cf4022e756a2b942b893713310c5c": "a44f70d70185e10df0e03c73b9ca69cb",
".git/objects/e3/fad2dd6545c4627e88caefc23fcaed67c46251": "06e0800db34f212ce12803abb1bbc0c1",
".git/objects/96/a716f4b71186ab47a828a788269ab80fd80700": "72af846cace4fb118d7b3136947a65bb",
".git/objects/ad/da4ce8eed0c0c38faa4afe8214492cc1e8221e": "d69ecd6b02bb576ea9c680e8d9913372",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/d7/1d61d61be3b6b6d554b7921cb2d24e440de338": "f9fa0ff1138f08b345ddd54a6ab18ca1",
".git/objects/d7/587f5341ec2d74a42379a82970c5b1724090d1": "84c88ce136335d7a4e29e66bc5791e62",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/1e7e9581202d2434f7b89207deab493a2c00eb": "b262c1037d7d7837da81eb8da96b3de1",
".git/objects/73/a5346a3d8108af409f16c00396f87c71640549": "7b18918698b8f9cf4f69e6e28528ccb0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/47/3feb16266b8e811e85d145192ac427317e8c73": "0f97fc955d5393cd2f284bdc7f727e2a",
".git/objects/f7/5f8b1defabd80ca2744b0b26db3a6b9db8554a": "5f7c224e52d388bc23139299e4e00c54",
".git/objects/b0/ec3c9ba709299e823df9e14107070bb1916125": "15dedd8d3198672f9cd80ac828932a9b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/51/3812888894ff2278fceae32fbe9a1ae83ae4f3": "e6f7f061f1e54e7caa9f385dccde9885",
".git/objects/a8/96874661dc52d16cf6ee0f38eb268f5db15d27": "028eef1f2de5a521f4f171697962ced3",
".git/objects/46/def01be7378e1765dc9e932daa4b20acf74675": "d1d4fdd7465f5f11b85daeb93900a1b3",
".git/objects/48/a06761bc0510d65c4038c51b1bacebf1d3575d": "919a2633893f3538f4b58420f631236f",
".git/objects/48/fbf94019adf78f98a97e07c3046baa1f700db0": "69593c3dcf196fe4dd32c2d9eec8b99a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/7f/e6fef7ac1e4314b501b9daf8ca76e1e3f1443e": "29c68e37d49749296766a819842aea45",
".git/objects/35/b52a04119d143179a25a11f2fed552df937c4b": "dd15958ddd8e64bdafdd733ddd52b8d8",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/b30873915ab42f1c9ee221ad260e270d1c8993": "cb7d29440a39448fce9fed96af5c67c4",
".git/objects/8d/09fb53dd42e3b39d011d1eb13d783100bcbf77": "a810f958194115625c44adb05ea423c8",
".git/objects/8d/e6d056c176a3a695bdfecc456a5ea6bd665a1d": "fedb7fcf7e5a978b2d1ad144d235a716",
".git/objects/8b/abb27a9cabe827a610efc873abdd9e6d3f5db8": "021aab5dca95bf83dffd711a279dd780",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/1e/0788b9aa36586e2c30ec992f3835dbe4b78fa7": "fdbe6d6eedbb367de72cc605cf09521c",
".git/objects/b8/c20e14dd63c93e330ece871f9a42579c3b6a72": "feed097e7736228cf8e568cfcbe5ef5e",
".git/objects/29/c01f00b815e2de26fa52050ab5d9be76abb132": "d93917069fb17615b9370149f0cb11bd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/885020a80590161090c3d7e8c116a09c35745d": "81f71bc20c7432e1fa6fd61b76c074cb",
".git/objects/3b/930bb8fd63cee440cafae7fec0a8da357d0a65": "fb9ad99c1778b5babff43cf19ea128db",
".git/objects/3b/b504adbe5278a5358a3dbbd8a3776b57be3f07": "a139a52c19edbec4c4a267259248c397",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/f2/c16e27f6b1a1ef6f27f42bb7ec2a77ea91db26": "7b1d47d1fb533af66adecae063527f94",
".git/objects/39/6c115c27cf4f06d8c06429266964592ebe0f49": "f1d92afb6fc708a0ffbc408e5923a363",
".git/objects/39/8578c2e0e8f5ad7ae95d132b2593d53c4071ab": "281312896ca92d4bec174dfd7be00fa5",
".git/objects/2a/083c376cb910f095c19ff3876da1c22feb4388": "1c5e0fe34b5aa2b88e35fdc1180e014a",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/28/8900cfc2fd2dd39baa4b97ed67c7802004150d": "001b3e9f8755aa9c2e55da9222933fb4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/9c/b92fff87af30d06e55efdc9337653c1bb08c33": "cf7bd14de50e03ca52d7b2bbb9488d41",
".git/objects/3c/cfeafed1eedb5c9f723cab675553481bc917f1": "9b620f63ad91b4c25ee54e7665346471",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/f8/24836256bfd4d76a099a846be91d9c23faecb9": "ffe047b69321cb1be6aad683ebbcfe48",
".git/objects/61/0688e925f5083d60efb7266abb425032fe1aba": "516557d9f1d29b84daa58a622c082f03",
".git/objects/da/36eb305760480367d8c5f612142f1eb666a5a0": "4f864d64b0076db753e30ab948a52d84",
".git/objects/fd/522b0939cbdc31879f1a56847da162819de172": "410a61aa1c4500a060ce450a26b3215e",
".git/objects/0b/b6d20e632e976d5ec36e97a58b9bb4db959eb4": "03ec9ca45743f4e31e6b7923642f0062",
".git/objects/2e/15b69ebd25fd7e1536deac56786d9eb1111601": "e658464ab3645924f439f0a32a9d8e09",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/c2ac687fc7819fd252efa0f3c332710b44f008": "4fcd62cf8fccc5c3b6066d655ed5c55b",
".git/objects/71/7792c571029d4d45be6b1934376709a7a12bf5": "f425c5b69ff75ef834b32ac132d287b0",
".git/objects/d1/761a37f0101201812004e759f4c72cc5740b39": "b72e025a6b727e257111356781092dff",
".git/objects/4a/3397c2f2c4d5e08cdbd772f49f0d2789005584": "a89ccd001c4a4d05178cb598f33d98fc",
".git/objects/04/f9ee683e0a1e19bde24c0b41ad457391e67b2b": "e01eedaa7937eb8d1470fc2508138f20",
".git/objects/93/115a1df867a5a55a7c8d9ac5df90464e3e8e57": "61b3ba83522aa22e90649a144b6e807a",
".git/objects/93/ac52ad83f4cb98858f0c2619d8a8bf3601ae7b": "7bc2bb36e03c2b27947b602b7d9f36d3",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/ae/d829e567ea78b0eab177a51f7e7f49df71e3d5": "bfe625e5e07855bcb8b3f4edacea53e0",
".git/objects/af/5c64cbc90e8ee31e4bcc660295d0c67cea0b82": "8e1fb6c47ca6602c6a26ca0c7191ee2c",
".git/objects/01/40963a03a2431efda2ac3dc481ecf441b18d67": "ebb2f44f2a68661fa0bc70802e98b8b2",
".git/objects/70/7b990c29249f016fe7a007ae4382f4407c9ed8": "603d1624a6a97cd907e089057cabf7bb",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/f9/2fa472e401c25da233544c91ac724bb29f8295": "6e5bb91aa63c7d6d6dcee7fbed3469d8",
".git/objects/f9/69c54fd75c1550bb7690998d50f3243b953e17": "78813b392b84003bbf1eab674a6ae54b",
".git/objects/7e/953140f053cc0bf5f0b2da0b762b99dc8811e2": "7f4500ceb9c9b196b744dd1fd9f3f89c",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/3f/9727ff4e902e496038f7023ac7d0caab989c00": "d929e3e06044fcf04783abd85ef0b208",
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
".git/objects/ea/d4b433ff48522565ef4d6e94226ae0db6b4daa": "1b1fadaab1406b3750572dae9a48555e",
".git/objects/80/3f55f9b9078af9a6cd281cfc039da5c1e2797a": "1f287dc3aa8888694ea78a1f621f8f20",
".git/objects/ac/3f6861b11e639fcc84044c4aab3cdc5f88be1e": "610258c15241df7ff62b9a6dacb0e77c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/67/06034345975d17a37ad75674dcd98423b339d6": "0eec21041a1edfe174bee49918f6cc67",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/94/fc61e88f2a70e4d58a75e196b161b7e0e5cd21": "28000daf696bb1ef02c98098587ffb67",
".git/objects/90/de7b386226ede4ed5f3f6d19ad65290054275d": "498e2151545cd1c33a29f1e20780468f",
".git/objects/9d/e7ac559a76853ee9686134202e51afa697252e": "d2a827ef00402f4db4ece1a0c5f2bb15",
".git/objects/9d/4ed9f7694c80be3747bd42d98907a425bbaa35": "df320d4085428e1f5887991f869948b1",
".git/objects/9d/c1bccc023a2763365885b6d6d1a2aef3f1cc8f": "9b4f51d19298730a7927e6acc46755c6",
".git/objects/a7/7f0edc311aaca75aa2c5fb0fd97ea78943dea2": "f49536356fc0475ca4ecee9f790a459f",
".git/objects/08/2909954b0dd93c68f24535e21fb1dc5fa24de0": "c02fd576f98f6d5b450707eb81ef7240",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/bf/5aebf195771dd354256aeef7c2cc21de584dc3": "262ba7c6aa268ebb7292d1ed8354021b",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/d2/3340792d4daddca9d3fd7343111a8d8bbe657b": "ece621453ab4561555966a22b342a8ff",
".git/objects/d2/d0483f092af3a4d6ae64e7d82c17008020e93c": "ee6a9f2f8e4ffd28a31e383c21ef5bf5",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/0c/0b7f6ca3ff9d78d0bf0e53207252ba0d1da24a": "98f587d34ee2b5555ea72b9a895ee356",
".git/objects/fa/08407fdac9deef5fb0554948610a2dd7ffcfd6": "bcaa71f795a6333261fbca0963c715d9",
".git/objects/1a/8c7d615c55f1856da5e9a8ab90e1e6513ca956": "ad63fd0f5cf7493c5aae635d87382f8e",
".git/objects/43/4adfd2a68207dac5aa57640a6eae96188a41c6": "7405236ed162444f10d51f9b5b8ca110",
".git/objects/2b/3b5ed487932adb1a5108a5611d86e1d3992e99": "cc574f49e69592055ffcafc2d6a97caf",
".git/objects/2b/d90b52fd5e09963e064b660f9efb4752333a94": "d8056b5a24f87b354c72030e457d3249",
".git/objects/d3/5cf1c41b6d8c669992889d8a2aec03b8ed46a3": "d554a969ca0dd9f4d1b250cabdd30f2e",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/63/15bdaec64bc05220d63b296236ec0ce5d9b7ec": "f53a5830dfd7da757098ae7dceab6fcd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e6/121c54d84432c031dfbedab6d7627accab796f": "25f64c3a8ec335ad9bf3789595b99564",
".git/objects/31/22c001d7d816c4be107e20ca176ae846ecd885": "c92100323ad8992079a4031a33d778a3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/d4/d002826c2e7f809de1f3d3b5c239575cc20836": "b39cb6ba598a0f8fe8cae10d5460dacf",
".git/objects/83/51dac5900efe18c802a90618534debca3df10a": "9a623961117e0173a914d40eb414e5e6",
".git/objects/83/d8088252af7bc294144609e60823ee26a380c7": "a96fba7be537c3cd3c2f900f2e566b86",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/75/34e1dd57ed121a55328699d2b9372fe1242c0c": "9de306194954d206acd5c65b371f68a1",
".git/objects/38/50fc76c8a688dede2471b3ef9c5e22847a6941": "cf3b482ad1052c71ded85cf9a73fec25",
".git/objects/a6/03fae0638aaf8040dd3313e52cd3d607d1bc9b": "ffb323c21c83811c357a9423fc5e44c7",
".git/objects/b3/b48b0bff3b021e9e7c70d0da59b09f12bf31c4": "8556bc228805bbe6fc3d380daf906686",
".git/objects/b3/9f62694fefce9abdc611fac25692dd84fbeaa1": "c4080b79aa77823af98bb854e78bb413",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "3565a5c0e73354530637a6216bd42fc4",
".git/refs/remotes/origin/main": "1031591453278daea64860f57d7ebb46",
".git/refs/heads/main": "1031591453278daea64860f57d7ebb46",
".git/logs/HEAD": "5f0e6104e28a1ce0d977fb667cf19a67",
".git/logs/refs/remotes/origin/main": "ced09266ffbabab906f6abbb7974a5f3",
".git/logs/refs/heads/main": "3e5d230cdd09125e0d9e2585e0dc6a71",
"assets/NOTICES": "c9f844406474c219f6c8100896e03aa4",
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
"index.html": "cc2cdaec905e94f9f54c5abcee0a9a5c",
"/": "cc2cdaec905e94f9f54c5abcee0a9a5c",
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
