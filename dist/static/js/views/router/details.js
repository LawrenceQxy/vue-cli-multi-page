webpackJsonp([2],{117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(25);e.default={props:["icon","title","description","buttons"],methods:{onClick:function(t,e){"function"==typeof t&&t(),e&&n.i(r.a)(e,this.$router)}}}},126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(3),n(257)),o=n.n(r),i=n(21),a=n.n(i),u=n(23),s=n.n(u),c=n(4),p=n.n(c);e.default={name:"add",components:{HbHead:p.a,Msg:o.a,Divider:a.a,XButton:s.a},data:function(){return{}},methods:{}}},127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(3),n(23)),o=n.n(r),i=n(4),a=n.n(i);e.default={components:{HbHead:a.a,XButton:o.a},data:function(){return{}},methods:{}}},182:function(t,e){},186:function(t,e){},194:function(t,e){},223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hb-head",{attrs:{headfont:"有变化！！"}}),t._v(" "),n("div",{staticStyle:{padding:"25px 10px",color:"red","text-align":"center"}},[t._v("\n  \t注意看浏览器地址的变化！！\n  \t")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("x-button",{attrs:{type:"warn"}},[t._v("点我再切换回来度试呗")])],1)],1)},staticRenderFns:[]}},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-msg"},[n("div",{staticClass:"weui-msg__icon-area"},[n("i",{staticClass:"weui-icon_msg",class:"weui-icon-"+(t.icon||"success")})]),t._v(" "),n("div",{staticClass:"weui-msg__text-area"},[n("h2",{staticClass:"weui-msg__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"weui-msg__desc"},[t._t("description")],2),t._v(" "),t.description?n("p",{staticClass:"weui-msg__desc",domProps:{innerHTML:t._s(t.description)}}):t._e()]),t._v(" "),n("div",{staticClass:"weui-msg__opr-area"},[n("p",{staticClass:"weui-btn-area"},[t._t("buttons"),t._v(" "),t._l(t.buttons,function(e){return n("a",{staticClass:"weui-btn",class:"weui-btn_"+e.type,attrs:{href:"javascript:;"},on:{click:function(n){t.onClick(e.onClick,e.link)}}},[t._v(t._s(e.text))])})],2)])])},staticRenderFns:[]}},235:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hb-head",{attrs:{headfont:"首页首页"}}),t._v(" "),n("div",{staticStyle:{padding:"25px 10px",color:"red","text-align":"center"}},[t._v("\n\t注意看浏览器地址的变化！！\n")]),t._v(" "),n("msg",{attrs:{title:"路由切换demo",description:"内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现",icon:"success"}},[n("div",{slot:"buttons"},[n("router-link",{attrs:{to:"/list"}},[n("x-button",{attrs:{type:"primary"}},[t._v("路由切换")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("a",{attrs:{href:"../home/list.html"}},[n("x-button",[t._v("返回demo列表页")])],1)])],1)])],1)},staticRenderFns:[]}},257:function(t,e,n){n(186);var r=n(0)(n(117),n(227),null,null);t.exports=r.exports},64:function(t,e,n){"use strict";function r(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function o(t,e,n){void 0===e&&(e={});var r,o=n||i;try{r=o(t||"")}catch(t){r={}}for(var a in e){var u=e[a];r[a]=Array.isArray(u)?u.slice():u}return r}function i(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=At(n.shift()),o=n.length>0?At(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function a(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return jt(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(jt(e)):r.push(jt(e)+"="+jt(t)))}),r.join("&")}return jt(e)+"="+jt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function u(t,e,n,r){var o=r&&r.options.stringifyQuery,i={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:c(e,o),matched:t?s(t):[]};return n&&(i.redirectedFrom=c(n,o)),Object.freeze(i)}function s(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function c(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||a;return(n||"/")+i(r)+o}function p(t,e){return e===Tt?t===e:!!e&&(t.path&&e.path?t.path.replace($t,"")===e.path.replace($t,"")&&t.hash===e.hash&&f(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&f(t.query,e.query)&&f(t.params,e.params)))}function f(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function h(t,e){return 0===t.path.replace($t,"/").indexOf(e.path.replace($t,"/"))&&(!e.hash||t.hash===e.hash)&&l(t.query,e.query)}function l(t,e){for(var n in e)if(!(n in t))return!1;return!0}function d(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function v(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=v(e.children)))return e}}function y(t){if(!y.installed){y.installed=!0,Ct=t,Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this.$root._route}});var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)),n(this,this)},destroyed:function(){n(this)}}),t.component("router-view",Ot),t.component("router-link",qt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.created}}function m(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function g(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function w(t){return t.replace(/\/\//g,"/")}function b(t,e,n){var r=e||Object.create(null),o=n||Object.create(null);return t.forEach(function(t){_(r,o,t)}),{pathMap:r,nameMap:o}}function _(t,e,n,r,o){var i=n.path,a=n.name,u={path:x(i,r),components:n.components||{default:n.component},instances:{},name:a,parent:r,matchAs:o,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(n){var r=o?w(o+"/"+n.path):void 0;_(t,e,n,u,r)}),void 0!==n.alias)if(Array.isArray(n.alias))n.alias.forEach(function(o){var i={path:o,children:n.children};_(t,e,i,r,u.path)});else{var s={path:n.alias,children:n.children};_(t,e,s,r,u.path)}t[u.path]||(t[u.path]=u),a&&(e[a]||(e[a]=u))}function x(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:w(e.path+"/"+t)}function k(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Vt.exec(t));){var s=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,_=n[2]||u,x=d||v;r.push({name:l||o++,prefix:h||"",delimiter:_,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:x?A(x):m?".*":"[^"+j(_)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function E(t,e){return R(k(t,e))}function C(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?C:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Ut(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[s].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?O(f):u(f),!e[s].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function j(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function $(t,e){return t.keys=e,t}function T(t){return t.sensitive?"":"i"}function P(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return $(t,e)}function S(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(M(t[o],e,n).source);return $(new RegExp("(?:"+r.join("|")+")",T(n)),e)}function q(t,e,n){return L(k(t,n),e,n)}function L(t,e,n){Ut(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=j(u);else{var s=j(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var p=j(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",$(new RegExp("^"+i,T(n)),e)}function M(t,e,n){return Ut(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?P(t,e):Ut(t)?S(t,e,n):q(t,e,n)}function U(t){var e,n,r=Dt[t];return r?(e=r.keys,n=r.regexp):(e=[],n=Ht(t,e),Dt[t]={keys:e,regexp:n}),{keys:e,regexp:n}}function H(t,e,n){try{return(Xt[t]||(Xt[t]=Ht.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function B(t,e,n,r){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){i=z({},i),i._normalized=!0;var a=z(z({},e.params),i.params);if(e.name)i.name=e.name,i.params=a;else if(e.matched){var u=e.matched[e.matched.length-1].path;i.path=H(u,a,"path "+e.path)}return i}var s=g(i.path||""),c=e&&e.path||"/",p=s.path?m(s.path,c,n||i.append):e&&e.path||"/",f=o(s.query,i.query,r&&r.options.parseQuery),h=i.hash||s.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function z(t,e){for(var n in e)t[n]=e[n];return t}function F(t,e){function n(t){b(t,c,p)}function r(t,n,r){var o=B(t,n,!1,e),i=o.name;if(i){var u=p[i],s=U(u.path).keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),n&&"object"==typeof n.params)for(var f in n.params)!(f in o.params)&&s.indexOf(f)>-1&&(o.params[f]=n.params[f]);if(u)return o.path=H(u.path,o.params,'named route "'+i+'"'),a(u,o,r)}else if(o.path){o.params={};for(var h in c)if(I(h,o.params,o.path))return a(c[h],o,r)}return a(null,o)}function o(t,n){var o=t.redirect,i="function"==typeof o?o(u(t,n,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,n);var s=i,c=s.name,f=s.path,h=n.query,l=n.hash,d=n.params;if(h=s.hasOwnProperty("query")?s.query:h,l=s.hasOwnProperty("hash")?s.hash:l,d=s.hasOwnProperty("params")?s.params:d,c){p[c];return r({_normalized:!0,name:c,query:h,hash:l,params:d},void 0,n)}if(f){var v=V(f,t);return r({_normalized:!0,path:H(v,d,'redirect route with path "'+v+'"'),query:h,hash:l},void 0,n)}return a(null,n)}function i(t,e,n){var o=H(n,e.params,'aliased route with path "'+n+'"'),i=r({_normalized:!0,path:o});if(i){var u=i.matched,s=u[u.length-1];return e.params=i.params,a(s,e)}return a(null,e)}function a(t,n,r){return t&&t.redirect?o(t,r||n):t&&t.matchAs?i(t,n,t.matchAs):u(t,n,r,e)}var s=b(t),c=s.pathMap,p=s.nameMap;return{match:r,addRoutes:n}}function I(t,e,n){var r=U(t),o=r.regexp,i=r.keys,a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,s=a.length;u<s;++u){var c=i[u-1],p="string"==typeof a[u]?decodeURIComponent(a[u]):a[u];c&&(e[c.name]=p)}return!0}function V(t,e){return m(t,e.parent?e.parent.path:"/",!0)}function D(){window.addEventListener("popstate",function(t){J(),t.state&&t.state.key&&tt(t.state.key)})}function X(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=K(),i=o(e,n,r?t:null);if(i){var a="object"==typeof i;if(a&&"string"==typeof i.selector){var u=document.querySelector(i.selector);u?t=N(u):Q(i)&&(t=Y(i))}else a&&Q(i)&&(t=Y(i));t&&window.scrollTo(t.x,t.y)}})}}function J(){var t=Z();t&&(Jt[t]={x:window.pageXOffset,y:window.pageYOffset})}function K(){var t=Z();if(t)return Jt[t]}function N(t){var e=document.documentElement,n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left,y:r.top-n.top}}function Q(t){return W(t.x)||W(t.y)}function Y(t){return{x:W(t.x)?t.x:window.pageXOffset,y:W(t.y)?t.y:window.pageYOffset}}function W(t){return"number"==typeof t}function G(){return Nt.now().toFixed(3)}function Z(){return Qt}function tt(t){Qt=t}function et(t,e){J();var n=window.history;try{e?n.replaceState({key:Qt},"",t):(Qt=G(),n.pushState({key:Qt},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function nt(t){et(t,!0)}function rt(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function ot(t){if(!t)if(Lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/"}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function it(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function at(t,e,n,r){var o=vt(t,function(t,r,o,i){var a=ut(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return yt(r?o.reverse():o)}function ut(t,e){return"function"!=typeof t&&(t=Ct.extend(t)),t.options[e]}function st(t){return at(t,"beforeRouteLeave",pt,!0)}function ct(t){return at(t,"beforeRouteUpdate",pt)}function pt(t,e){return function(){return t.apply(e,arguments)}}function ft(t,e,n){return at(t,"beforeRouteEnter",function(t,r,o,i){return ht(t,o,i,e,n)})}function ht(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){lt(t,e.instances,n,o)})})}}function lt(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){lt(t,e,n,r)},16)}function dt(t){var e,n=0,r=null;return vt(t,function(t,o,i,a){if("function"==typeof t&&void 0===t.cid){n++;var u,s=mt(function(r){t.resolved="function"==typeof r?r:Ct.extend(r),i.components[a]=r,--n<=0&&e&&e()}),c=mt(function(t){var n="Failed to resolve async component "+a+": "+t;r||(r=t instanceof Error?t:new Error(n),e&&e(r))});try{u=t(s,c)}catch(t){c(t)}if(u)if("function"==typeof u.then)u.then(s,c);else{var p=u.component;p&&"function"==typeof p.then&&p.then(s,c)}}}),function(t,o,i){r?i(r):n<=0?i():e=i}}function vt(t,e){return yt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function yt(t){return Array.prototype.concat.apply([],t)}function mt(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}function gt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function wt(t){var e=gt(t);if(!/^\/#/.test(e))return window.location.replace(w(t+"/#"+e)),!0}function bt(){var t=_t();return"/"===t.charAt(0)||(kt("/"+t),!1)}function _t(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function xt(t){window.location.hash=t}function kt(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)}function Et(t,e,n){var r="hash"===n?"#"+e:e;return t?w(t+"/"+r):r}var Ct,Ot={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=n.name,s=i.$route,c=i._routerViewCache||(i._routerViewCache={}),p=0,f=!1;i;)i.$vnode&&i.$vnode.data.routerView&&p++,i._inactive&&(f=!0),i=i.$parent;if(a.routerViewDepth=p,f)return t(c[u],a,o);var h=s.matched[p];if(!h)return c[u]=null,t();var l=c[u]=h.components[u];return a.registerRouteInstance=function(t,e){h.instances[u]!==t&&(h.instances[u]=e)},a.props=r(s,h.props&&h.props[u]),t(l,a,o)}},Rt=function(t){return"%"+t.charCodeAt(0).toString(16)},jt=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,Rt).replace(/%2C/g,",")},At=decodeURIComponent,$t=/\/?$/,Tt=u(null,{path:"/"}),Pt=[String,Object],St=[String,Array],qt={name:"router-link",props:{to:{type:Pt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:{type:String,default:"router-link-active"},event:{type:St,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,s=o.href,c={},f=n.options.linkActiveClass,l=null==f?this.activeClass:f,y=i.path?u(null,i,null,n):a;c[l]=this.exact?p(r,y):h(r,y);var m=function(t){d(t)&&(e.replace?n.replace(i):n.push(i))},g={click:d};Array.isArray(this.event)?this.event.forEach(function(t){g[t]=m}):g[this.event]=m;var w={class:c};if("a"===this.tag)w.on=g,w.attrs={href:s};else{var b=v(this.$slots.default);if(b){b.isStatic=!1;var _=Ct.util.extend;(b.data=_({},b.data)).on=g;(b.data.attrs=_({},b.data.attrs)).href=s}else w.on=g}return t(this.tag,w,this.$slots.default)}},Lt="undefined"!=typeof window,Mt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Ut=Mt,Ht=M,Bt=k,zt=E,Ft=R,It=L,Vt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Ht.parse=Bt,Ht.compile=zt,Ht.tokensToFunction=Ft,Ht.tokensToRegExp=It;var Dt=Object.create(null),Xt=Object.create(null),Jt=Object.create(null),Kt=Lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Nt=Lt&&window.performance&&window.performance.now?window.performance:Date,Qt=G(),Yt=function(t,e){this.router=t,this.base=ot(e),this.current=Tt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};Yt.prototype.listen=function(t){this.cb=t},Yt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Yt.prototype.onError=function(t){this.errorCbs.push(t)},Yt.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},Yt.prototype.confirmTransition=function(t,e,n){var r=this,o=this.current,i=function(t){t instanceof Error&&r.errorCbs.forEach(function(e){e(t)}),n&&n(t)};if(p(t,o)&&t.matched.length===o.matched.length)return this.ensureURL(),i();var a=it(this.current.matched,t.matched),u=a.updated,s=a.deactivated,c=a.activated,f=[].concat(st(s),this.router.beforeHooks,ct(u),c.map(function(t){return t.beforeEnter}),dt(c));this.pending=t;var h=function(e,n){if(r.pending!==t)return i();try{e(t,o,function(t){!1===t||t instanceof Error?(r.ensureURL(!0),i(t)):"string"==typeof t||"object"==typeof t?(i(),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(t){i(t)}};rt(f,h,function(){var n=[];rt(ft(c,n,function(){return r.current===t}),h,function(){if(r.pending!==t)return i();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},Yt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Wt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&D(),window.addEventListener("popstate",function(t){r.transitionTo(gt(r.base),function(t){o&&X(e,t,r.current,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){et(w(r.base+t.fullPath)),X(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){nt(w(r.base+t.fullPath)),X(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(gt(this.base)!==this.current.fullPath){var e=w(this.base+this.current.fullPath);t?et(e):nt(e)}},e.prototype.getCurrentLocation=function(){return gt(this.base)},e}(Yt),Gt=function(t){function e(e,n,r){t.call(this,e,n),r&&wt(this.base)||bt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){bt()&&t.transitionTo(_t(),function(t){kt(t.fullPath)})})},e.prototype.push=function(t,e,n){this.transitionTo(t,function(t){xt(t.fullPath),e&&e(t)},n)},e.prototype.replace=function(t,e,n){this.transitionTo(t,function(t){kt(t.fullPath),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;_t()!==e&&(t?xt(e):kt(e))},e.prototype.getCurrentLocation=function(){return _t()},e}(Yt),Zt=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Yt),te=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.afterHooks=[],this.matcher=F(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Kt,this.fallback&&(e="hash"),Lt||(e="abstract"),this.mode=e,e){case"history":this.history=new Wt(this,t.base);break;case"hash":this.history=new Gt(this,t.base,this.fallback);break;case"abstract":this.history=new Zt(this,t.base)}},ee={currentRoute:{}};te.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},ee.currentRoute.get=function(){return this.history&&this.history.current},te.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof Wt)n.transitionTo(n.getCurrentLocation());else if(n instanceof Gt){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},te.prototype.beforeEach=function(t){this.beforeHooks.push(t)},te.prototype.afterEach=function(t){this.afterHooks.push(t)},te.prototype.onReady=function(t,e){this.history.onReady(t,e)},te.prototype.onError=function(t){this.history.onError(t)},te.prototype.push=function(t,e,n){this.history.push(t,e,n)},te.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},te.prototype.go=function(t){this.history.go(t)},te.prototype.back=function(){this.go(-1)},te.prototype.forward=function(){this.go(1)},te.prototype.getMatchedComponents=function(t){var e=t?this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},te.prototype.resolve=function(t,e,n){var r=B(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:Et(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},te.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Tt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(te.prototype,ee),te.install=y,te.version="2.4.0",Lt&&window.Vue&&window.Vue.use(te),e.a=te},67:function(t,e,n){n(194);var r=n(0)(n(126),n(235),null,null);t.exports=r.exports},68:function(t,e,n){n(182);var r=n(0)(n(127),n(223),null,null);t.exports=r.exports},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(64),i=n(67),a=n.n(i),u=n(68),s=n.n(u),c=[{path:"/",component:a.a},{path:"/list",component:s.a}];r.a.use(o.a);var p=new o.a({routes:c});new r.a({router:p}).$mount("#app")}},[99]);