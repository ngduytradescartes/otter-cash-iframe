var otter_cash;(()=>{"use strict";var e={57253:(e,r,t)=>{var o={"./bootstrap":()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_solana_wallet-adapt-10bca8"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),t.e("webpack_sharing_consume_default_sentre_senhub_sentre_senhub"),t.e("src_bootstrap_app_tsx")]).then((()=>()=>t(651)))},_=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",_=t.S[o];if(_&&_!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>_,init:()=>a})}},r={};function t(o){var _=r[o];if(void 0!==_)return _.exports;var a=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,t.c=r,t.amdO={},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,_){if(1&_&&(o=this(o)),8&_)return o;if("object"===typeof o&&o){if(4&_&&o.__esModule)return o;if(16&_&&"function"===typeof o.then)return o}var a=Object.create(null);t.r(a);var n={};e=e||[null,r({}),r([]),r(r)];for(var s=2&_&&o;"object"==typeof s&&!~e.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>o[e]));return n.default=()=>o,t.d(a,n),a}})(),t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js":"b5716c5e","vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_solana_wallet-adapt-10bca8":"18b528fb","vendors-node_modules_react-router_esm_react-router_js":"2ed7bab9","vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":"5974180c",webpack_sharing_consume_default_react_react:"47982e86","webpack_sharing_consume_default_react-dom_react-dom":"30232e57","webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314":"9ff5c870","webpack_sharing_consume_default_react-router-dom_react-router-dom":"170ae761","node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-node_modules_react_jsx-r-7486bc":"1fd78820","vendors-node_modules_antd_es_index_js":"acada7aa","vendors-node_modules_react-dom_index_js":"037f77ce","vendors-node_modules_react-redux_es_index_js":"f1f1be59","node_modules_react-router-dom_esm_react-router-dom_js-_d6f00":"41a05310",node_modules_react_index_js:"ba23f13f",webpack_sharing_consume_default_sentre_senhub_sentre_senhub:"b775dacf",src_bootstrap_app_tsx:"1f2d06bf","node_modules_react-router-dom_esm_react-router-dom_js-_d6f01":"27af4734",node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive:"b492ae48"}[e]+".chunk.js",t.miniCssF=e=>"static/css/"+e+".b7ae6b9e.chunk.css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="otter_cash:";t.l=(o,_,a,n)=>{if(e[o])e[o].push(_);else{var s,d;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var i=u[c];if(i.getAttribute("src")==o||i.getAttribute("data-webpack")==r+a){s=i;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=o),e[o]=[_];var l=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var _=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),_&&_.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{t.S={};var e={},r={};t.I=(o,_)=>{_||(_=[]);var a=r[o];if(a||(a=r[o]={}),!(_.indexOf(a)>=0)){if(_.push(a),e[o])return e[o];t.o(t.S,o)||(t.S[o]={});var n=t.S[o],s="otter_cash",d=(e,r,t,o)=>{var _=n[e]=n[e]||{},a=_[r];(!a||!a.loaded&&(!o!=!a.eager?o:s>a.from))&&(_[r]={get:t,from:s,eager:!!o})},u=[];if("default"===o)d("@reduxjs/toolkit","1.8.4",(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),d("@sentre/senhub","3.2.14",(()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_solana_wallet-adapt-10bca8"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),t.e("webpack_sharing_consume_default_react-router-dom_react-router-dom"),t.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-node_modules_react_jsx-r-7486bc")]).then((()=>()=>t(15675))))),d("antd","4.22.6",(()=>Promise.all([t.e("vendors-node_modules_antd_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(89262))))),d("react-dom","17.0.2",(()=>Promise.all([t.e("vendors-node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>t(81108))))),d("react-redux","7.2.8",(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),d("react-router-dom","5.3.3",(()=>Promise.all([t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f00")]).then((()=>()=>t(9402))))),d("react","17.0.2",(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276)))));return u.length?e[o]=Promise.all(u).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var _=r[o],a=(typeof _)[0];if(o>=t.length)return"u"==a;var n=t[o],s=(typeof n)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&_!=n)return _<n;o++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var _=1,a=1;a<e.length;a++)_--,t+="u"==(typeof(s=e[a]))[0]?"-":(_>0?".":"")+(_=2,s);return t}var n=[];for(a=1;a<e.length;a++){var s=e[a];n.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?n.pop()+" "+n.pop():o(s))}return d();function d(){return n.pop().replace(/^\((.+)\)$/,"$1")}},_=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var n=0,s=1,d=!0;;s++,n++){var u,c,i=s<r.length?(typeof r[s])[0]:"";if(n>=t.length||"o"==(c=(typeof(u=t[n]))[0]))return!d||("u"==i?s>o&&!a:""==i!=a);if("u"==c){if(!d||"u"!=i)return!1}else if(d)if(i==c)if(s<=o){if(u!=r[s])return!1}else{if(a?u>r[s]:u<r[s])return!1;u!=r[s]&&(d=!1)}else if("s"!=i&&"n"!=i){if(a||s<=o)return!1;d=!1,s--}else{if(s<=o||c<i!=a)return!1;d=!1}else"s"!=i&&"n"!=i&&(d=!1,s--)}}var l=[],m=l.pop.bind(l);for(n=1;n<r.length;n++){var f=r[n];l.push(1==f?m()|m():2==f?m()&m():f?_(f,t):!m())}return!!m()},a=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},n=(e,r,t,_)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(_)+")",s=(e,r,t,o)=>{var s=a(e,t);return _(o,s)||"undefined"!==typeof console&&console.warn&&console.warn(n(e,t,s,o)),d(e[t][s])},d=e=>(e.loaded=1,e.get()),u=e=>function(r,o,_,a){var n=t.I(r);return n&&n.then?n.then(e.bind(e,r,t.S[r],o,_,a)):e(r,t.S[r],o,_,a)},c=u(((e,r,o,_,a)=>r&&t.o(r,o)?s(r,0,o,_):a())),i={},l={92950:()=>c("default","react",[1,17,0,2],(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>t.e("vendors-node_modules_react-dom_index_js").then((()=>()=>t(81108))))),19289:()=>c("default","@reduxjs/toolkit",[1,1,6,2],(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),94751:()=>c("default","antd",[1,4,21,0],(()=>Promise.all([t.e("vendors-node_modules_antd_es_index_js"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(89262))))),55754:()=>c("default","react-redux",[1,7,2,5],(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),45055:()=>c("default","react-router-dom",[1,5,3,0],(()=>t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f01").then((()=>()=>t(9402))))),40089:()=>c("default","@sentre/senhub",[1,3,2,14],(()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_solana_wallet-adapt-10bca8"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),t.e("webpack_sharing_consume_default_react-router-dom_react-router-dom"),t.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive")]).then((()=>()=>t(15675)))))},m={webpack_sharing_consume_default_react_react:[92950],"webpack_sharing_consume_default_react-dom_react-dom":[12181],"webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314":[19289,94751,55754],"webpack_sharing_consume_default_react-router-dom_react-router-dom":[45055],webpack_sharing_consume_default_sentre_senhub_sentre_senhub:[40089]};t.f.consumes=(e,r)=>{t.o(m,e)&&m[e].forEach((e=>{if(t.o(i,e))return r.push(i[e]);var o=r=>{i[e]=0,t.m[e]=o=>{delete t.c[e],o.exports=r()}},_=r=>{delete i[e],t.m[e]=o=>{throw delete t.c[e],r}};try{var a=l[e]();a.then?r.push(i[e]=a.then(o).catch(_)):o(a)}catch(n){_(n)}}))}})(),(()=>{var e=e=>new Promise(((r,o)=>{var _=t.miniCssF(e),a=t.p+_;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var _=(n=t[o]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(_===e||_===r))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var n;if((_=(n=a[o]).getAttribute("data-href"))===e||_===r)return n}})(_,a))return r();((e,r,t,o)=>{var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onerror=_.onload=a=>{if(_.onerror=_.onload=null,"load"===a.type)t();else{var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=s,_.parentNode.removeChild(_),o(d)}},_.href=r,document.head.appendChild(_)})(e,a,r,o)})),r={otter_cash:0};t.f.miniCss=(t,o)=>{r[t]?o.push(r[t]):0!==r[t]&&{"vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":1}[t]&&o.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}})(),(()=>{var e={otter_cash:0};t.f.j=(r,o)=>{var _=t.o(e,r)?e[r]:void 0;if(0!==_)if(_)o.push(_[2]);else if(/^webpack_sharing_consume_default_(re(act(\-(dom_react|router\-dom_react\-router)\-dom|_react)|duxjs_toolkit_reduxjs_toolkit\-webpack_sharing_consume_defau\-0c3314)|sentre_senhub_sentre_senhub)$/.test(r))e[r]=0;else{var a=new Promise(((t,o)=>_=e[r]=[t,o]));o.push(_[2]=a);var n=t.p+t.u(r),s=new Error;t.l(n,(o=>{if(t.o(e,r)&&(0!==(_=e[r])&&(e[r]=void 0),_)){var a=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",s.name="ChunkLoadError",s.type=a,s.request=n,_[1](s)}}),"chunk-"+r,r)}};var r=(r,o)=>{var _,a,[n,s,d]=o,u=0;if(n.some((r=>0!==e[r]))){for(_ in s)t.o(s,_)&&(t.m[_]=s[_]);if(d)d(t)}for(r&&r(o);u<n.length;u++)a=n[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0},o=globalThis.webpackChunkotter_cash=globalThis.webpackChunkotter_cash||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t(57253);otter_cash=o})();
//# sourceMappingURL=index.js.map