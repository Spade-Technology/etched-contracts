if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let o={};const d=e=>s(e,n),f={module:{uri:n},exports:o,require:d};a[n]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-8c8aeaed"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/3d/AMF_070006029.stl",revision:"05fe1c496209e89d1e57432e3e051a37"},{url:"/3d/Cinema4D.dae",revision:"5cea7adc7814159f931b0635652713fa"},{url:"/3d/ExampleStl.stl",revision:"9f7efe7f469b73d7356f1a61ffb836e1"},{url:"/3d/IBA018.glb",revision:"1df6bcc07ecfe99f49b7253980199cc6"},{url:"/3d/M08.glb",revision:"3800ff22a98ac03f847aeb0975881e52"},{url:"/3d/Poimandres.fbx",revision:"4ceda05c3d671bdb72dc65b9edace193"},{url:"/3d/Poimandres.mtl",revision:"dd53831b73328ea9007cacd2a788d6be"},{url:"/3d/Poimandres.obj",revision:"82cf9757484e10ef942d90325e723906"},{url:"/3d/Shoulder_Bone.stl",revision:"2a93ec7d8b25568822c5d7aaa7ba59b5"},{url:"/3d/WusonOBJ (1).obj",revision:"703d430149c2af486670d0b8e08e0942"},{url:"/3d/box.fbx",revision:"4bf3b007a953faaeb9e4d5ca33d0ea71"},{url:"/3d/cubes_with_alpha.3DS",revision:"4df5c5253d8d64d30692dc782029ecda"},{url:"/3d/draco_decoder.wasm",revision:"79123c537a001429fc26e91e99d14218"},{url:"/3d/riwr-untitled.glb",revision:"d5260a732d3c262597f341674a0affb6"},{url:"/3d/simple_skin.gltf",revision:"66790067bfdb686874584f26bbb3ee44"},{url:"/3d/untitled.fbx",revision:"ee8b31d9c04b3b61b6b09a574ee51298"},{url:"/_head.html",revision:"ac2688ac5c3e11ae0483329f93931d39"},{url:"/_next/static/5KmbG9D0QIkd0qQJaQtTd/_buildManifest.js",revision:"2990e0a1c2cfd420c4f5d44270b1f218"},{url:"/_next/static/5KmbG9D0QIkd0qQJaQtTd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b5f3aac-07f3cd6766c3cfc7.js",revision:"07f3cd6766c3cfc7"},{url:"/_next/static/chunks/139-e8a54e04be5f0588.js",revision:"e8a54e04be5f0588"},{url:"/_next/static/chunks/162.2fe4777ae7290b1e.js",revision:"2fe4777ae7290b1e"},{url:"/_next/static/chunks/312.f33b702035854878.js",revision:"f33b702035854878"},{url:"/_next/static/chunks/314-8e7b99e0f73e6850.js",revision:"8e7b99e0f73e6850"},{url:"/_next/static/chunks/406-f22fd282929681b6.js",revision:"f22fd282929681b6"},{url:"/_next/static/chunks/466-d97fc6c1f942f92a.js",revision:"d97fc6c1f942f92a"},{url:"/_next/static/chunks/4efb386a-29152acd2b866986.js",revision:"29152acd2b866986"},{url:"/_next/static/chunks/589-b8696133899e79f7.js",revision:"b8696133899e79f7"},{url:"/_next/static/chunks/66-0018d5997bcd08ab.js",revision:"0018d5997bcd08ab"},{url:"/_next/static/chunks/670.0c7a2ff8a1aab27c.js",revision:"0c7a2ff8a1aab27c"},{url:"/_next/static/chunks/705.4c6ac0f3581ea99f.js",revision:"4c6ac0f3581ea99f"},{url:"/_next/static/chunks/729-df0757614aa5789f.js",revision:"df0757614aa5789f"},{url:"/_next/static/chunks/739.281a54eb85a0ec5f.js",revision:"281a54eb85a0ec5f"},{url:"/_next/static/chunks/748-7960922268f0ea73.js",revision:"7960922268f0ea73"},{url:"/_next/static/chunks/828-48de24d505c83630.js",revision:"48de24d505c83630"},{url:"/_next/static/chunks/869.76078d07623e604d.js",revision:"76078d07623e604d"},{url:"/_next/static/chunks/963-91ccffab06c94c35.js",revision:"91ccffab06c94c35"},{url:"/_next/static/chunks/975-07d697cb7deda498.js",revision:"07d697cb7deda498"},{url:"/_next/static/chunks/9d763a97-e05193d6eaecaeec.js",revision:"e05193d6eaecaeec"},{url:"/_next/static/chunks/bdf4c4e8-5d683b59ae981358.js",revision:"5d683b59ae981358"},{url:"/_next/static/chunks/c772caee-328abf196377066d.js",revision:"328abf196377066d"},{url:"/_next/static/chunks/f1fe3540-735102277cdaba4e.js",revision:"735102277cdaba4e"},{url:"/_next/static/chunks/framework-9ed31f7e415b23cb.js",revision:"9ed31f7e415b23cb"},{url:"/_next/static/chunks/main-48c1597bdffd36d4.js",revision:"48c1597bdffd36d4"},{url:"/_next/static/chunks/pages/_app-5e663df16c35bbd9.js",revision:"5e663df16c35bbd9"},{url:"/_next/static/chunks/pages/_error-24146c749eebc074.js",revision:"24146c749eebc074"},{url:"/_next/static/chunks/pages/auth-759ea54aa1772969.js",revision:"759ea54aa1772969"},{url:"/_next/static/chunks/pages/auth/signup-5975d3fcaa072f9c.js",revision:"5975d3fcaa072f9c"},{url:"/_next/static/chunks/pages/dashboard-f89f9b8acedbbf3f.js",revision:"f89f9b8acedbbf3f"},{url:"/_next/static/chunks/pages/dashboard/3d-483c3780a33e934b.js",revision:"483c3780a33e934b"},{url:"/_next/static/chunks/pages/dashboard/community-06bab2ef56e8aee2.js",revision:"06bab2ef56e8aee2"},{url:"/_next/static/chunks/pages/dashboard/etch-library-88324c1c2d8bbd53.js",revision:"88324c1c2d8bbd53"},{url:"/_next/static/chunks/pages/dashboard/etches-e6da3227bd5cabd8.js",revision:"e6da3227bd5cabd8"},{url:"/_next/static/chunks/pages/dashboard/etches/%5Betch%5D-6db56821c8d33089.js",revision:"6db56821c8d33089"},{url:"/_next/static/chunks/pages/dashboard/manage-eac25434d50e9124.js",revision:"eac25434d50e9124"},{url:"/_next/static/chunks/pages/dashboard/profile-630e78d457d7eb2b.js",revision:"630e78d457d7eb2b"},{url:"/_next/static/chunks/pages/dashboard/profiledemo-f2512a3e93598efa.js",revision:"f2512a3e93598efa"},{url:"/_next/static/chunks/pages/dashboard/settings-2f3504474309aa17.js",revision:"2f3504474309aa17"},{url:"/_next/static/chunks/pages/dashboard/settings/profile-1d706aa4675462dd.js",revision:"1d706aa4675462dd"},{url:"/_next/static/chunks/pages/dashboard/teams/%5Bteam%5D-20eaa4508ed811b4.js",revision:"20eaa4508ed811b4"},{url:"/_next/static/chunks/pages/dashboard/users/%5Buser%5D-8707dd923ff0db5b.js",revision:"8707dd923ff0db5b"},{url:"/_next/static/chunks/pages/encrypt-7bbf484431fc5c40.js",revision:"7bbf484431fc5c40"},{url:"/_next/static/chunks/pages/index-87a5b154a9d4693c.js",revision:"87a5b154a9d4693c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fc95a6f8ecde4202.js",revision:"fc95a6f8ecde4202"},{url:"/_next/static/css/876fe719ab095f33.css",revision:"876fe719ab095f33"},{url:"/_next/static/css/b867f4a56eafd4d2.css",revision:"b867f4a56eafd4d2"},{url:"/_next/static/media/addIcon.5421a1e6.svg",revision:"35bde4266ec104f6dbb5e145f7851251"},{url:"/_next/static/media/blackForward.5ad746d2.svg",revision:"cab4c160cb35d295d45a9e9470bdf496"},{url:"/_next/static/media/create_etch.7e0b9cee.png",revision:"17220b74440371c30a56068b1c860d19"},{url:"/_next/static/media/dashboard.8dcc18a9.png",revision:"a1304f4bc45e8c159fa4bad934ccf5ce"},{url:"/_next/static/media/editVector.d00e4229.svg",revision:"1d1e3ad18bc7a3a83c1d4f2b26ae525d"},{url:"/_next/static/media/etched_library.957c466e.png",revision:"b60fd82543bc4e421d81e06648fbc9b0"},{url:"/_next/static/media/forward-arrow.6f317881.svg",revision:"73f7ffc8e7b9651531c025825e16ce4a"},{url:"/_next/static/media/leftHeaderBg.fa7df429.svg",revision:"60d69c827b6caf9b0ec2feb46b528a8e"},{url:"/_next/static/media/library.e7d5ec73.png",revision:"0fe2c989118cc781f1f09fa52f8f2e77"},{url:"/_next/static/media/pen.4f8d67f8.svg",revision:"c456d134558a19eaafb6f35963d23767"},{url:"/_next/static/media/rightHeaderBg.e9d6d49e.svg",revision:"35750f70aea1da27d4f335f280b9792a"},{url:"/_next/static/media/storage.dc427145.png",revision:"8d647b68db41d87226ed38d9204bd6f6"},{url:"/_next/static/media/vector.8089cdb9.svg",revision:"75d98b9d09163fea79cbb9bcdf26486a"},{url:"/android-chrome-192x192.png",revision:"c35799bb07ee876fca3ebbc526baca2b"},{url:"/android-chrome-512x512.png",revision:"c78d9ee9460c4a0829afb9d6e8a4597f"},{url:"/android-chrome-maskable-192x192.png",revision:"c5473b7cfd246f9fb6beb93d3f010f26"},{url:"/android-chrome-maskable-512x512.png",revision:"41777bb2d46fedb41733e74c0d73094d"},{url:"/apple-touch-icon.png",revision:"17b6398aff485a183e5257aba8c875da"},{url:"/favicon.ico",revision:"5a22419421f08354f2079ab3cdaf13c1"},{url:"/fonts/Campton-Black.woff2",revision:"8c4981c5176cd8ee66686368b8a0447b"},{url:"/fonts/Campton-BlackItalic.woff2",revision:"2d268e702e959a2bdc193cbeb6e44e69"},{url:"/fonts/Campton-Bold.woff2",revision:"51c275f56bb3996b94292c9c73ab66f1"},{url:"/fonts/Campton-BoldItalic.woff2",revision:"4f17ec88a841d1309f269f6bf1c8b0de"},{url:"/fonts/Campton-Book.woff2",revision:"e192880ba93fdccd6a4b35a75af2d1d1"},{url:"/fonts/Campton-BookItalic.woff2",revision:"b4f36372bb8848d4e81b89e353639fd1"},{url:"/fonts/Campton-ExtraBold.woff2",revision:"7baf5a667ef321f184abc5d7d4b762ad"},{url:"/fonts/Campton-ExtraBoldItalic.woff2",revision:"e69db2e1410a0fff5c6675ed61856390"},{url:"/fonts/Campton-ExtraLight.woff2",revision:"0606b4b6d4a62da62dba8ef8c39b7393"},{url:"/fonts/Campton-ExtraLightItalic.woff2",revision:"f24ca0118da4b1621f8e005d5e98fc60"},{url:"/fonts/Campton-Light.woff2",revision:"03362a4c3c3ca434e5cdd6b74ea52b49"},{url:"/fonts/Campton-LightItalic.woff2",revision:"eed9862627a6e8b6eab5088fc2205233"},{url:"/fonts/Campton-Medium.woff2",revision:"17fa6a07cac863e44bf73cafc70de145"},{url:"/fonts/Campton-MediumItalic.woff2",revision:"5a37bf2f10ac59fe8539739afdb31526"},{url:"/fonts/Campton-SemiBold.woff2",revision:"ee89a1223572c96c2a031c99d96f154c"},{url:"/fonts/Campton-SemiBoldItalic.woff2",revision:"7dffc763a04da7f54be69e9f48cdce6f"},{url:"/fonts/Campton-Thin.woff2",revision:"273ecafc1719a0f336bd45343a0b27f1"},{url:"/fonts/Campton-ThinItalic.woff2",revision:"7fd7defbd2bf8cfb16da0f261b042ca9"},{url:"/fonts/campton-cufonfonts/CamptonBlack.otf",revision:"5e81a983316351fc8ab85d2bfaa5ef38"},{url:"/fonts/campton-cufonfonts/CamptonBlackItalic.otf",revision:"3620025cf4a00fd378c90ff4f827390c"},{url:"/fonts/campton-cufonfonts/CamptonBold.otf",revision:"3ebce9e1fac5ed2af6adf0ef2be0f6d1"},{url:"/fonts/campton-cufonfonts/CamptonBoldItalic.otf",revision:"fb0a9fb41a33008a3457d11d732f216b"},{url:"/fonts/campton-cufonfonts/CamptonBook.otf",revision:"d121b5f1a99dee025c8f500472642460"},{url:"/fonts/campton-cufonfonts/CamptonBookItalic.otf",revision:"88ad65314943878f839de054a28daef0"},{url:"/fonts/campton-cufonfonts/CamptonExtraBold.otf",revision:"59cb383c7cdada7fc67f170f79257524"},{url:"/fonts/campton-cufonfonts/CamptonExtraBoldItalic.otf",revision:"e5aac53efd7f9ab78985ecb4bd25127f"},{url:"/fonts/campton-cufonfonts/CamptonExtraLight.otf",revision:"5b1cebea6e6f9fa5e6d74ad194ad7278"},{url:"/fonts/campton-cufonfonts/CamptonExtraLightItalic.otf",revision:"af8000927d1c4f0acc8bdd3ebddc570f"},{url:"/fonts/campton-cufonfonts/CamptonLight.otf",revision:"b326a98b737a5c33136f10c9939ab291"},{url:"/fonts/campton-cufonfonts/CamptonLightItalic.otf",revision:"7dac802eeff662329191c5e5d497e6db"},{url:"/fonts/campton-cufonfonts/CamptonMedium.otf",revision:"761ba19222c7b1d1995a879cacc7ba8f"},{url:"/fonts/campton-cufonfonts/CamptonMediumItalic.otf",revision:"230597f3fa1759019a1d9a3466f4c1bb"},{url:"/fonts/campton-cufonfonts/CamptonSemiBold.otf",revision:"0afd69600b2af2c1bdfcbb89a0895343"},{url:"/fonts/campton-cufonfonts/CamptonSemiBoldItalic.otf",revision:"733d94a17ff299c70fdd849cf2bf6d00"},{url:"/fonts/campton-cufonfonts/CamptonThin.otf",revision:"2370a8dbfce30b89c9b05c2749b2b814"},{url:"/fonts/campton-cufonfonts/CamptonThinItalic.otf",revision:"7ebf18d021c400ee35cd35978bd9be80"},{url:"/fonts/quicksand/Quicksand-Bold.ttf",revision:"e8dcee4bbf2288a2d264c76fa547f37a"},{url:"/fonts/quicksand/Quicksand-Light.ttf",revision:"e60d43df6abf50de0980883f4596e268"},{url:"/fonts/quicksand/Quicksand-Medium.ttf",revision:"fd7f304a26dd790aef9f1ae84403eab3"},{url:"/fonts/quicksand/Quicksand-Regular.ttf",revision:"7194c41ffab51721bd84ca104553c4e1"},{url:"/fonts/quicksand/Quicksand-SemiBold.ttf",revision:"025d26a905aa7e016827cdc2b429552f"},{url:"/formats/3DS/icon.png",revision:"9258655b13b104fe43ec6e6d6fe5a014"},{url:"/formats/3MF/icon.png",revision:"49742619bdfa0d8ec7e08aac32e0289e"},{url:"/formats/AC/icon.png",revision:"1e6d9966c03499df4ea9b7430c334256"},{url:"/formats/AMF/icon.png",revision:"70679ce3b407ebb56012c1c836c0f4e6"},{url:"/formats/ASE/icon.png",revision:"969592303bdfc15e4d4ff8fa927a0737"},{url:"/formats/B3D/icon.png",revision:"94ea1e37823fe16ce41cc3178b86a00d"},{url:"/formats/BLEND/icon.png",revision:"1fc503ec18b79c982ebae3ef840211f0"},{url:"/formats/BVH/icon.png",revision:"388607ac7f47fb9758646a780d925873"},{url:"/formats/C4D/icon.png",revision:"a5b8b258da3d2e6637904ba3a74eaac5"},{url:"/formats/COB/icon.png",revision:"861153edc4428647540af56b867b26e2"},{url:"/formats/CSM/icon.png",revision:"e739007c0bdc45ab9955eddb8f1758ec"},{url:"/formats/Collada/icon.png",revision:"62009c59fcf74b702f5e697b094f82d5"},{url:"/formats/DAE/icon.png",revision:"62009c59fcf74b702f5e697b094f82d5"},{url:"/formats/DXF/icon.png",revision:"969592303bdfc15e4d4ff8fa927a0737"},{url:"/formats/FBX/icon.png",revision:"42ff2fd8b6b887bc4a4cc16260e024cd"},{url:"/formats/HMP/icon.png",revision:"f9415d44eb85d26eae25fd5dd32cd81b"},{url:"/formats/IFC/icon.png",revision:"4340f73424e959d27318c8567f12cc15"},{url:"/formats/IRR/icon.png",revision:"6a5713d0d36a1d49eb0f3ef19cb9f57e"},{url:"/formats/JT/icon.png",revision:"2905eeb1503432b708a8bbdbd2882b6d"},{url:"/formats/LWO/icon.png",revision:"2c4b8329083db8d98d529fdc72879378"},{url:"/formats/LWS/icon.png",revision:"2c4b8329083db8d98d529fdc72879378"},{url:"/formats/LXO/icon.png",revision:"84174e3e7da23f08be1fc2440cdbcd2f"},{url:"/formats/M3D/icon.png",revision:"7d943d5553a80ef603165fb482d780b9"},{url:"/formats/MD2/icon.png",revision:"5cf9c4b2bb8d733586e926cefd0976c0"},{url:"/formats/MD3/icon.png",revision:"6e9e41ffd1470c23fcf0a07fb7a542ce"},{url:"/formats/MD4/icon.png",revision:"150938327163da75bcdc647f4fd6d44e"},{url:"/formats/MD5/icon.png",revision:"f492ea5133f90db9ade41f766a543e5a"},{url:"/formats/MDL/icon.png",revision:"f9415d44eb85d26eae25fd5dd32cd81b"},{url:"/formats/MS3D/icon.png",revision:"83924b76922a48b93201ca68262318e1"},{url:"/formats/NFF/icon.png",revision:"2e6d3e5e95ad45117d0df73ee1445cf5"},{url:"/formats/OBJ/icon.png",revision:"d4f73e945117e07645e136bfde1b9f83"},{url:"/formats/OFF/icon.png",revision:"15b68c68ea69c0935a4d14ac96852455"},{url:"/formats/OGEX/icon.png",revision:"92c3db0108345c48380af2e5a1024568"},{url:"/formats/OnShape/icon.png",revision:"4e96e9a71936bd54566a1c2d1458aae3"},{url:"/formats/OpenGEX/icon.png",revision:"92c3db0108345c48380af2e5a1024568"},{url:"/formats/PLY/icon.png",revision:"6535a84ff7247a047667ff6333519233"},{url:"/formats/Q3D/icon.png",revision:"df4256fd9c4af09ca572c1e1c8ff1d44"},{url:"/formats/RAW/icon.png",revision:"32e2fcabed93b24144aa1a0f33144357"},{url:"/formats/SIB/icon.png",revision:"789f55884fc6626d1ca5fe16254df2ac"},{url:"/formats/SMD/icon.png",revision:"8d0a4aba08e4a284a3e442ba3ec8915e"},{url:"/formats/STEP/icon.png",revision:"4c9158899ffb140576e14b8c68ece039"},{url:"/formats/STL/icon.png",revision:"163d6b9da76a1744d9650ec3a6423f45"},{url:"/formats/TER/icon.png",revision:"ffd0d8525eea42408d72e57607b72844"},{url:"/formats/UnityBundle/icon.png",revision:"c8405ad05f6a40baccc1b53f3e869139"},{url:"/formats/X/icon.png",revision:"419e4dc5f344962908de8973dd4f7862"},{url:"/formats/X3D/icon.png",revision:"ed7d3a2b71626ff5abcde58d6eda160e"},{url:"/formats/XGL/icon.png",revision:"79d77ab86d4c7a02a5c6a0d541123354"},{url:"/formats/glTF/icon.png",revision:"5c31e59a615d8ed533dfe245d887bc1b"},{url:"/formats/glb/icon.png",revision:"5c31e59a615d8ed533dfe245d887bc1b"},{url:"/icons/blackForward.svg",revision:"cab4c160cb35d295d45a9e9470bdf496"},{url:"/icons/customModal/closeIcon.svg",revision:"70ef024a0d4fa35c7c8c3b309b5312f4"},{url:"/icons/dashboard/dropDownIcon.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/dashboard/editEtch/addIcon.svg",revision:"35bde4266ec104f6dbb5e145f7851251"},{url:"/icons/dashboard/editEtch/pen.svg",revision:"c456d134558a19eaafb6f35963d23767"},{url:"/icons/dashboard/editEtch/rightArrow.svg",revision:"902e419760f2aa2bb386288b86bd31ee"},{url:"/icons/dashboard/placeholder1.svg",revision:"224d5520db20012455ded04524f33452"},{url:"/icons/dashboard/placeholder2.svg",revision:"23d96d01019e728be619bd7875f71a2c"},{url:"/icons/dashboard/placeholder3.svg",revision:"32c1a84d72cc6979c68dc9a909bd8544"},{url:"/icons/etched-logo-big.png",revision:"28ad5d6024c3917d48df4bfba8aec433"},{url:"/icons/etched-logo.svg",revision:"203f1213495d9019d178c0ea1fc1cfe1"},{url:"/icons/etched-long.svg",revision:"7741fb33660a223c62e584603b594b4a"},{url:"/icons/etched-text.svg",revision:"24373a4368077d4f8f9a06c5af7d06a9"},{url:"/icons/etherscan.svg",revision:"fee998c9733c40dd779149ae31991f82"},{url:"/icons/forward-arrow.svg",revision:"73f7ffc8e7b9651531c025825e16ce4a"},{url:"/icons/metamask.svg",revision:"ec2ff2d5353772bfe1506dc6202a6906"},{url:"/images/backgrounds/dashboard/editVector.svg",revision:"1d1e3ad18bc7a3a83c1d4f2b26ae525d"},{url:"/images/backgrounds/dashboard/vector.svg",revision:"75d98b9d09163fea79cbb9bcdf26486a"},{url:"/images/backgrounds/headerBg.svg",revision:"b01a08561e64b9b1047a980f4244a1be"},{url:"/images/backgrounds/leftHeaderBg.svg",revision:"60d69c827b6caf9b0ec2feb46b528a8e"},{url:"/images/backgrounds/middleHeaderbg.svg",revision:"838127b15194dbd68aa6be0cde9784b2"},{url:"/images/backgrounds/rightHeaderBg.svg",revision:"35750f70aea1da27d4f335f280b9792a"},{url:"/images/dashboard/image1.svg",revision:"dd90a910bd37350bd608413be6b110d9"},{url:"/images/dashboard/image2.svg",revision:"9017d0fa8ea8cf7ebeb3503391236cb2"},{url:"/images/dashboard/image3.svg",revision:"72b33489c57db7fcf6d4cd0ac9ac04b2"},{url:"/images/dashboard/image4.svg",revision:"b5b8b288cdc1603c609ea0fbad03e200"},{url:"/images/dashboard/image5.svg",revision:"4aaff8de1390a2e29e147951a752982c"},{url:"/images/dashboard/image6.svg",revision:"5eafd3187f6b2015e4d19c178b121416"},{url:"/images/home/blur.svg",revision:"95df107e62327709d0ef87ec1cb1e8fd"},{url:"/images/home/create_etch.png",revision:"17220b74440371c30a56068b1c860d19"},{url:"/images/home/dashboard.png",revision:"a1304f4bc45e8c159fa4bad934ccf5ce"},{url:"/images/home/etched_library.png",revision:"b60fd82543bc4e421d81e06648fbc9b0"},{url:"/images/home/gradient.png",revision:"280d1c6dfa2548059c75a7023f69c59b"},{url:"/images/home/library.png",revision:"0fe2c989118cc781f1f09fa52f8f2e77"},{url:"/images/home/storage.png",revision:"8d647b68db41d87226ed38d9204bd6f6"},{url:"/images/login/Bg.svg",revision:"757eb8d85ec7fa090a04e3d87d4ba0f8"},{url:"/images/login/image 451.svg",revision:"a6ac2fcd489625c7b4c29e810ee5f7a6"},{url:"/images/profile/user.svg",revision:"fd7f5937b44dd26f1631a1aadc59a70a"},{url:"/manifest.json",revision:"521bc26a54b0a1a8c35e34b7d5a9c0e6"},{url:"/model-viewer/UnityLoader.js",revision:"1a1df677b7b0b713cd15ce9b3f199f7f"},{url:"/model-viewer/build.data.unityweb",revision:"9f97716d1009bfeed7de382146a74428"},{url:"/model-viewer/build.json",revision:"8df1d28a9fee0457161da9a5be4f4525"},{url:"/model-viewer/build.wasm.code.unityweb",revision:"abc25126f0072595cd012179b45ee868"},{url:"/model-viewer/build.wasm.framework.unityweb",revision:"c29765db76e99475a0236650f43b49a9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
