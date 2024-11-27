(()=>{var e={};e.id=731,e.ids=[220,636,731],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>f,default:()=>d,getServerSideProps:()=>p,getStaticPaths:()=>u,getStaticProps:()=>c,reportWebVitals:()=>h,routeModule:()=>b,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>x});var n=r(3865),s=r(9455),l=r(671),i=r(3212),a=r(9989),o=r(3532);let d=(0,l.M)(o,"default"),c=(0,l.M)(o,"getStaticProps"),u=(0,l.M)(o,"getStaticPaths"),p=(0,l.M)(o,"getServerSideProps"),f=(0,l.M)(o,"config"),h=(0,l.M)(o,"reportWebVitals"),x=(0,l.M)(o,"unstable_getStaticProps"),m=(0,l.M)(o,"unstable_getStaticPaths"),g=(0,l.M)(o,"unstable_getStaticParams"),y=(0,l.M)(o,"unstable_getServerProps"),j=(0,l.M)(o,"unstable_getServerSideProps"),b=new n.PagesRouteModule({definition:{kind:s.A.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:a.default,Document:i.default},userland:o})},3532:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(9929),s=r(8732),l=n._(r(2015)),i=n._(r(4426)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function o(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends l.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:d.error,children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:d.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,s.jsx)("div",{style:d.wrap,children:(0,s.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=o,c.origGetInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8498:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return x},defaultHead:function(){return u}});let n=r(9929),s=r(4588),l=r(8732),i=s._(r(2015)),a=n._(r(3309)),o=r(9811),d=r(9241),c=r(8498);function u(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9794);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return s=>{let l=!0,i=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){i=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?l=!1:t.add(s.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=s.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?l=!1:(r.add(e),n[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let x=function(e){let{children:t}=e,r=(0,i.useContext)(o.AmpStateContext),n=(0,i.useContext)(d.HeadManagerContext);return(0,l.jsx)(a.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(2015),s=()=>{},l=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),l(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9794:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},9989:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(8732),s=r(1106),l=r.n(s),i=r(2015),a=r(9777);let o=()=>{let[e,t]=(0,i.useState)(!1),[r,s]=(0,i.useState)("transparent"),[o,d]=(0,i.useState)("white");return(0,i.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>=90?s("#ffffff"):s("transparent"),d("#000000")})},[]),(0,n.jsx)("div",{style:{backgroundColor:`${r}`},className:"fixed left-0 top-0 w-full z-10 ease-in duration-300",children:(0,n.jsxs)("div",{className:"max-w-[1240px] m-auto flex justify-between items-center p-4 text-white",children:[(0,n.jsx)(l(),{href:"/"}),(0,n.jsx)("h1",{style:{color:`${o}`},className:"font-bold text-3xl",children:"KaizenKids"}),(0,n.jsxs)("ul",{className:"hidden sm:flex",children:[(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(l(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(l(),{href:"/#about",children:"About"})}),(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(l(),{href:"/#contact",children:"Contact"})}),(0,n.jsx)("li",{className:"p-4",children:(0,n.jsx)(l(),{href:"/apply",children:"Apply Now"})})]}),(0,n.jsx)("div",{onClick:()=>{t(!e)},className:"block sm:hidden z-10",children:e?(0,n.jsx)(a.zhF,{style:{color:`${o}`},size:16}):(0,n.jsx)(a.mu4,{style:{color:`${o}`},size:16})}),(0,n.jsx)("div",{className:e?"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-2/3 h-screen bg-black text-center ease-in duration-300":"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-2/3 h-screen bg-black text-center ease-in duration-300",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(l(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(l(),{href:"/#about",children:"About"})}),(0,n.jsx)("li",{className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(l(),{href:"/#contact",children:"Contact"})}),(0,n.jsx)("li",{className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(l(),{href:"/apply",children:"Apply Now"})})]})})]})})};function d({Component:e,pageProps:t}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),(0,n.jsx)(e,{...t})]})}r(9361)},3212:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(8732),s=r(883);function l(){return(0,n.jsxs)(s.Html,{lang:"en",children:[(0,n.jsxs)(s.Head,{children:[(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"})]}),(0,n.jsxs)("body",{className:"antialiased",children:[(0,n.jsx)(s.Main,{}),(0,n.jsx)(s.NextScript,{})]})]})}},9361:()=>{},9455:(e,t)=>{"use strict";var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},9811:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.AmpContext},9241:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.HeadManagerContext},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[916,84,883],()=>r(4477));module.exports=n})();