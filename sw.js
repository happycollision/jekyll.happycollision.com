if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let c={};const g=e=>i(e,o),b={module:{uri:o},exports:c,require:g};r[o]=Promise.all(s.map((e=>b[e]||g(e)))).then((e=>(a(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_astro/hoisted.9c84ba72.js",revision:null},{url:"_astro/the-shoemakers-children-go-barefoot.614d5192.css",revision:null},{url:"_astro/the-shoemakers-children-go-barefoot.b92b237b.css",revision:null},{url:"_astro/the-shoemakers-children-go-barefoot.c77e517b.css",revision:null},{url:"_astro/workbox-window.prod.es5.295a6886.js",revision:null},{url:"2014/01/12/the-shoemakers-children-go-barefoot",revision:"d31f94435430387f314f331631668a14"},{url:"2014/01/17/vagrantfile-that-creates-and-populates-MYSQL-database",revision:"296a5dd35c0b70a1a09571f5bcc81d6b"},{url:"2014/03/22/the-importance-of-comments",revision:"5a14150b448e7cd8d98db4b2c7633c36"},{url:"2014/04/09/heartbleed-your-passwords-are-public-now",revision:"336556d3dc51851877dda24e2a4c22c8"},{url:"2021/11/21/letting-go-of-my-trademark",revision:"20c894037bec49c06fc7d51a0e94434e"},{url:"2023/01/05/app-variants",revision:"9931454c9a56d06e39e62d6b8d5392b8"},{url:"/",revision:"95a13eef1611b61e973fe9641bb0a4a1"},{url:"main.css",revision:"315932ee28df2b7afb90c753b54013ac"},{url:"presentations",revision:"0267648bc668107c2ce617ab2733cea7"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"resume",revision:"a470a8cf3e7943946bab97ca4cb7b083"},{url:"trigger",revision:"ee6d09f6ed2eb508aebef281e4f42850"},{url:"trigger/shows/2023-03/1",revision:"2d2c1f9112897fc265a024bffbef950c"},{url:"trigger/shows/2023-03/10",revision:"980351dea298756cb59fd3a0c1350f58"},{url:"trigger/shows/2023-03/11",revision:"e28e282a42766ccb674ff805a8bec7ea"},{url:"trigger/shows/2023-03/12",revision:"c96e0abeed324f82c23469fc24fde005"},{url:"trigger/shows/2023-03/13",revision:"34552322d3a6312d13a6bb8463215675"},{url:"trigger/shows/2023-03/14",revision:"f11027a9a99ecaab85814f2d8266bce0"},{url:"trigger/shows/2023-03/15",revision:"0c904d0636dff227354b06a55a2f1f10"},{url:"trigger/shows/2023-03/16",revision:"5a321e04a808adeffaf657c748ac718c"},{url:"trigger/shows/2023-03/17",revision:"4fe7faa5eb67deb84b8ff01861eca25a"},{url:"trigger/shows/2023-03/18",revision:"4845fc9a81016dcfd2573bb83a80989a"},{url:"trigger/shows/2023-03/19",revision:"7a68ca8622f46f6247a065c8d7fec2c4"},{url:"trigger/shows/2023-03/2",revision:"7ffa387e3961032f70f5f2771a934761"},{url:"trigger/shows/2023-03/20/alt/a",revision:"ab267616e0ff47cc6b53de94f544dafc"},{url:"trigger/shows/2023-03/20",revision:"98d0e763f01c829e45a38a589af73e81"},{url:"trigger/shows/2023-03/21",revision:"49f914eb85fc46444d746bc1891149c8"},{url:"trigger/shows/2023-03/22",revision:"1bf66db674b80ef69f407103c4b1c5fd"},{url:"trigger/shows/2023-03/23",revision:"248a5e122669d12b82d9296ed0575b9c"},{url:"trigger/shows/2023-03/24/alt/g",revision:"cf02c74c4a5008637bed93729576f962"},{url:"trigger/shows/2023-03/24",revision:"df86b76b5887eb7c7f77ea8cbb03d36d"},{url:"trigger/shows/2023-03/25",revision:"e77e91f6b3991c5dc77a77cbf440b7d4"},{url:"trigger/shows/2023-03/26",revision:"19caae0f9bfdba5a020138679684b3e9"},{url:"trigger/shows/2023-03/27",revision:"fb4990e2aad2352216d2eb48a326febb"},{url:"trigger/shows/2023-03/28",revision:"cfb82f5b3be9d7c42d3c4c8a2176f6c4"},{url:"trigger/shows/2023-03/29",revision:"d30f6b0c3e2797b3c069a5099e5e48a4"},{url:"trigger/shows/2023-03/3",revision:"b57940450e4ac265aa0442c370194cff"},{url:"trigger/shows/2023-03/30",revision:"b031aa5018c60a78ec553e508201f2fa"},{url:"trigger/shows/2023-03/31",revision:"c2290a780e351add2f2efccf0ef3ccb7"},{url:"trigger/shows/2023-03/32",revision:"c8d6afef02395a580ea3cd8b84df92c2"},{url:"trigger/shows/2023-03/33",revision:"b68a042689d74c2cb974908d7a9e93aa"},{url:"trigger/shows/2023-03/34",revision:"8f105d87326f04e2d313fa0ab716e80c"},{url:"trigger/shows/2023-03/35",revision:"4b0ca72d488eb572ada7cbaa0b139c93"},{url:"trigger/shows/2023-03/36",revision:"25790cb738dc647362fb0d6b3274b71c"},{url:"trigger/shows/2023-03/37",revision:"3f8c3d6865750af8197b8d5810e2c84f"},{url:"trigger/shows/2023-03/38",revision:"03985e2dec5809df001b19a29b6a5583"},{url:"trigger/shows/2023-03/39",revision:"00ba37edf5c04cd805231c19ae91bec3"},{url:"trigger/shows/2023-03/4",revision:"942d0edbadbaa35d764e997586913c6b"},{url:"trigger/shows/2023-03/40",revision:"57ab31dbb1b44bd8e61572ce35664411"},{url:"trigger/shows/2023-03/41",revision:"b632fc961f4d9691b1f186cbac4510a9"},{url:"trigger/shows/2023-03/42",revision:"5a908d97df8373573c704f75b031724c"},{url:"trigger/shows/2023-03/43",revision:"4ca3e6ac966051621d3573c81ce2e584"},{url:"trigger/shows/2023-03/5",revision:"39c5542aca77e2b6f76f2f95ce807473"},{url:"trigger/shows/2023-03/6",revision:"2618b8fe7044bddb13418ec6d21bac8c"},{url:"trigger/shows/2023-03/7",revision:"d6f7ec81a97f754b256b92dc2a9ca959"},{url:"trigger/shows/2023-03/8",revision:"bf4fabee514b5f3501d08781e6bd4a2c"},{url:"trigger/shows/2023-03/9",revision:"18e23a5ee1c076433becfb8f3a24f550"},{url:"trigger/shows/2023-03",revision:"cac368ad22c3448c6018d965a79260cd"},{url:"trigger/shows",revision:"e7a962b8bec2742215a1c459fa32bbcf"},{url:"trigger/songs/big-strong-man",revision:"16a35ea8f8eaf6fa216985a50b233a4c"},{url:"trigger/songs/black-and-tans",revision:"2b0d47db92f701281f1afa068b1e79e1"},{url:"trigger/songs/boys-are-back",revision:"cbab29f6419f7cb6e0d67625ac232e6e"},{url:"trigger/songs/bvb",revision:"2be2aae356622ba16c499f3fd3726b1d"},{url:"trigger/songs/caledonia_a",revision:"0a9da81784a3c84320b0901fb37cfb0a"},{url:"trigger/songs/caledonia_d",revision:"f418ed63b238508165496bbc352b36a2"},{url:"trigger/songs/caledonia_g",revision:"4d5bb1fb733bc2b5030c94f7574750d9"},{url:"trigger/songs/come-my-friends",revision:"b4e82a1c389a103c8d24f2f0c9e80eef"},{url:"trigger/songs/danny-boy",revision:"45bd6422cb64726f67618749fa2e18b0"},{url:"trigger/songs/dirty-old-town",revision:"0aaa6b33b72686663101518fddc35cbc"},{url:"trigger/songs/drink-the-night-away",revision:"0a31df83af00f2117cafc27da3222b6e"},{url:"trigger/songs/drunken-sailor",revision:"0c065d8db5f603c8e7bb560ee280a5a8"},{url:"trigger/songs/father-mallorys-dance",revision:"588154bad00802451d10559e2f3ec394"},{url:"trigger/songs/fightin-nolan",revision:"37dfa709ca68fd104f8a7ec8e91ce0a4"},{url:"trigger/songs/galway-girl",revision:"b2a1a52bc70584e1e52b5dcb4bdf39c2"},{url:"trigger/songs/go-lassie-go",revision:"833bd00bfe159e6473e8d5fa3316ebf1"},{url:"trigger/songs",revision:"6400dc92ebc8dd84ebd6b797d4220050"},{url:"trigger/songs/irish-rover",revision:"d735eed4740aee9130981f641bcd3d80"},{url:"trigger/songs/jack-dolan",revision:"420b8e1c8527f2be4a8ff706e0cbbb92"},{url:"trigger/songs/jock-stuart",revision:"b95367207da412306099cf8b841c1def"},{url:"trigger/songs/kiss-me-im-irish",revision:"2beae411d383146a8e6c455b40ef7469"},{url:"trigger/songs/mary-mac",revision:"9345ed87aaa1dae229cdaa5edc117ca4"},{url:"trigger/songs/mike-dempsey",revision:"fcc029cca69e69d84d9a1a20a7455cd2"},{url:"trigger/songs/molly-malone",revision:"f45739d0e2ca241f87423696db38dea3"},{url:"trigger/songs/nancy-whiskey",revision:"3d07d3d995805a553a5cac3d61f276f6"},{url:"trigger/songs/nelsons-blood",revision:"2925bfc416e09474e1bc23c3baa599c5"},{url:"trigger/songs/new-york-girls",revision:"cc9d9fc94691796fe89ccefc6108ac77"},{url:"trigger/songs/oh-maggie_a",revision:"cbff6eb66b8fd0c4a16d2cc9b8305317"},{url:"trigger/songs/oh-maggie_g",revision:"69af96ac35a3638a0b09da2462dcabf5"},{url:"trigger/songs/paddy-murphy-died",revision:"c6fda05d9aedb876e427a926d658c262"},{url:"trigger/songs/paddy-on-the-railway",revision:"2d7635cd01ee961419f282e9f25f08f3"},{url:"trigger/songs/parting-glass",revision:"5aee3aa1f8bfd6da36e5928d33eba358"},{url:"trigger/songs/peggy-gordon",revision:"2f3d6c0698cb52d3a659120515a6aa5c"},{url:"trigger/songs/queen-of-argyll",revision:"99b5d8ef006ecb328a46723d0551b49a"},{url:"trigger/songs/rattlin-bog",revision:"ae5ed262387392dd98db1dc5c825b184"},{url:"trigger/songs/road-to-ruin",revision:"68fba1bdca2b558e8ffd1e3e8e42e771"},{url:"trigger/songs/rosie",revision:"a4a5bc04fab24b751cfcce7d86a3c468"},{url:"trigger/songs/scotsman",revision:"11d0e8e3c5278e733b1388bbe84a4cbe"},{url:"trigger/songs/son-never-shines",revision:"1843812d3a420635581a355281b8bce3"},{url:"trigger/songs/spanish-lady",revision:"2b40940aee124c59bc802cd89c600bda"},{url:"trigger/songs/star-of-the-county-down",revision:"b451b666fb0fe74bf78ff4156c348643"},{url:"trigger/songs/tell-me-ma",revision:"95242e3b2d37a321e68cc75afb35c5b3"},{url:"trigger/songs/wagon-wheel",revision:"824e65d028b349eafc5617942c6613c8"},{url:"trigger/songs/water-is-wide",revision:"cc579b9fdfcb07bcab5a3a847af9ae0b"},{url:"trigger/songs/whiskey-in-the-jar",revision:"b0a8c1c514f8434a614eb37c34bf4720"},{url:"trigger/songs/whiskey-in-the-world",revision:"2533e666bcb3ef729498a060fac58fd3"},{url:"trigger/songs/wild-rover",revision:"077a7ce28ff32f3faa1c864e751049be"},{url:"manifest.webmanifest",revision:"df07e48dac7c503ce4837a4f5086a5b7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));