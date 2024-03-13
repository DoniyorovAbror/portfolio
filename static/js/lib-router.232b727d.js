/*! For license information please see lib-router.232b727d.js.LICENSE.txt */
(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([["118"],{2599:function(e,t,n){"use strict";var r,a,o,i;function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,{Action:function(){return r},UNSAFE_getResolveToMatches:function(){return y},UNSAFE_invariant:function(){return c},createBrowserHistory:function(){return s},createPath:function(){return d},isRouteErrorResponse:function(){return x},joinPaths:function(){return b},matchPath:function(){return m},parsePath:function(){return v},resolveTo:function(){return w},stripBasename:function(){return g}}),(o=r||(r={})).Pop="POP",o.Push="PUSH",o.Replace="REPLACE";let l="popstate";function s(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,s=o.history,h=r.Pop,v=null,m=g();function g(){return(s.state||{idx:null}).idx}function S(){h=r.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:h,location:w.location,delta:t})}null==m&&(m=0,s.replaceState(u({},s.state,{idx:m}),""));function y(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:d(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let w={get action(){return h},get location(){return e(o,s)},listen(e){if(v)throw Error("A history only accepts one active listener");return o.addEventListener(l,S),v=e,()=>{o.removeEventListener(l,S),v=null}},createHref:e=>t(o,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=r.Push;let a=p(w.location,e,t);n&&n(a,e);let u=f(a,m=g()+1),l=w.createHref(a);try{s.pushState(u,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(l)}i&&v&&v({action:h,location:w.location,delta:1})},replace:function(e,t){h=r.Replace;let a=p(w.location,e,t);n&&n(a,e);let o=f(a,m=g()),u=w.createHref(a);s.replaceState(o,"",u),i&&v&&v({action:h,location:w.location,delta:0})},go:e=>s.go(e)};return w}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return p("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:d(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),u({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?v(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),h("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=u[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}let l=u[n];return a&&!l?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return h(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e)+'" is a malformed URL segment. This is probably'+(" due to a bad percent encoding ("+n)+")."),e}}(l||"",r),e},{}),pathname:o,pathnameBase:i,pattern:e}}(i=a||(a={})).data="data",i.deferred="deferred",i.redirect="redirect",i.error="error";function g(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function S(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r))+"].  Please separate it out to the "+("`to."+n)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function y(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase):n.map(e=>e.pathnameBase)}function w(e,t,n,r){let a,o;void 0===r&&(r=!1),"string"==typeof e?a=v(e):(c(!(a=u({},e)).pathname||!a.pathname.includes("?"),S("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),S("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),S("#","search","hash",a)));let i=""===e||""===a.pathname,l=i?"/":a.pathname;if(null==l)o=n;else if(r){let e=0===t.length?[]:t[t.length-1].replace(/^\//,"").split("/");if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e.pop();a.pathname=t.join("/")}o="/"+e.join("/")}else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?v(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:U(r),hash:R(a)}}(a,o),h=l&&"/"!==l&&l.endsWith("/"),f=(i||"."===l)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||f)&&(s.pathname+="/"),s}let b=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",R=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function x(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")},9655:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return U}});var r,a,o,i,u=n("7294"),l=n("3935"),s=n("9250"),c=n("2599");function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}let p="application/x-www-form-urlencoded";function d(e){return null!=e&&"string"==typeof e.tagName}let v=null,m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function g(e){return null==e||m.has(e)?e:null}let S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],y=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"],w=u.createContext({isTransitioning:!1}),b=u.startTransition;function U(e){let{basename:t,children:n,future:r,window:a}=e,o=u.useRef();null==o.current&&(o.current=(0,c.createBrowserHistory)({window:a,v5Compat:!0}));let i=o.current,[l,h]=u.useState({action:i.action,location:i.location}),{v7_startTransition:f}=r||{},p=u.useCallback(e=>{f&&b?b(()=>h(e)):h(e)},[h,f]);return u.useLayoutEffect(()=>i.listen(p),[i,p]),u.createElement(s.Router,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:r})}l.flushSync;let R="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function C(e){let t=u.useContext(s.UNSAFE_DataRouterContext);return t||(0,c.UNSAFE_invariant)(!1),t}(r=o||(o={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(a=i||(i={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";let E=0,N=()=>"__"+String(++E)+"__"},9250:function(e,t,n){"use strict";n.r(t),n.d(t,{Router:function(){return C},UNSAFE_DataRouterContext:function(){return s},UNSAFE_DataRouterStateContext:function(){return c},UNSAFE_NavigationContext:function(){return h},UNSAFE_RouteContext:function(){return p},UNSAFE_useRouteId:function(){return x},createPath:function(){return u.createPath},useHref:function(){return v},useLocation:function(){return g},useNavigate:function(){return y},useResolvedPath:function(){return w}});var r,a,o,i=n("7294"),u=n("2599");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let s=i.createContext(null),c=i.createContext(null),h=i.createContext(null),f=i.createContext(null),p=i.createContext({outlet:null,matches:[],isDataRoute:!1}),d=i.createContext(null);function v(e,t){let{relative:n}=void 0===t?{}:t;m()||(0,u.UNSAFE_invariant)(!1);let{basename:r,navigator:a}=i.useContext(h),{hash:o,pathname:l,search:s}=w(e,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:(0,u.joinPaths)([r,l])),a.createHref({pathname:c,search:s,hash:o})}function m(){return null!=i.useContext(f)}function g(){return m()||(0,u.UNSAFE_invariant)(!1),i.useContext(f).location}function S(e){!i.useContext(h).static&&i.useLayoutEffect(e)}function y(){let{isDataRoute:e}=i.useContext(p);return e?function(){var e;let t;let{router:n}=(e=b.UseNavigateStable,(t=i.useContext(s))||(0,u.UNSAFE_invariant)(!1),t),r=R(U.UseNavigateStable),a=i.useRef(!1);return S(()=>{a.current=!0}),i.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,l({fromRouteId:r},t)))},[n,r])}():function(){m()||(0,u.UNSAFE_invariant)(!1);let e=i.useContext(s),{basename:t,future:n,navigator:r}=i.useContext(h),{matches:a}=i.useContext(p),{pathname:o}=g(),l=JSON.stringify((0,u.UNSAFE_getResolveToMatches)(a,n.v7_relativeSplatPath)),c=i.useRef(!1);return S(()=>{c.current=!0}),i.useCallback(function(n,a){if(void 0===a&&(a={}),!c.current)return;if("number"==typeof n){r.go(n);return}let i=(0,u.resolveTo)(n,JSON.parse(l),o,"path"===a.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,u.joinPaths)([t,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)},[t,r,l,o,e])}()}function w(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=i.useContext(h),{matches:a}=i.useContext(p),{pathname:o}=g(),l=JSON.stringify((0,u.UNSAFE_getResolveToMatches)(a,r.v7_relativeSplatPath));return i.useMemo(()=>(0,u.resolveTo)(e,JSON.parse(l),o,"path"===n),[e,l,o,n])}var b=((r=b||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var U=((a=U||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function R(e){var t;let n;let r=(t=0,(n=i.useContext(p))||(0,u.UNSAFE_invariant)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,u.UNSAFE_invariant)(!1),a.route.id}function x(){return R(U.UseRouteId)}function C(e){let{basename:t="/",children:n=null,location:r,navigationType:a=u.Action.Pop,navigator:o,static:s=!1,future:c}=e;m()&&(0,u.UNSAFE_invariant)(!1);let p=t.replace(/^\/*/,"/"),d=i.useMemo(()=>({basename:p,navigator:o,static:s,future:l({v7_relativeSplatPath:!1},c)}),[p,c,o,s]);"string"==typeof r&&(r=(0,u.parsePath)(r));let{pathname:v="/",search:g="",hash:S="",state:y=null,key:w="default"}=r,b=i.useMemo(()=>{let e=(0,u.stripBasename)(v,p);return null==e?null:{location:{pathname:e,search:g,hash:S,state:y,key:w},navigationType:a}},[p,v,g,S,y,w,a]);return null==b?null:i.createElement(h.Provider,{value:d},i.createElement(f.Provider,{children:n,value:b}))}i.startTransition;var E=((o=E||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o);new Promise(()=>{})}}]);