"use strict";(self.webpackChunkmusic_app_react=self.webpackChunkmusic_app_react||[]).push([[297],{7297:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(4942),i=r(1413),s=r(9439),a=r(2791),l=r(1087),c=r(7095),o=r(1015),u=function(t){var e=(0,a.useState)(Array(t).fill(!1)),r=(0,s.Z)(e,2),l=r[0],c=r[1],o=(0,a.useRef)([]);(0,a.useEffect)((function(){o.current&&o.current.forEach((function(t,e){if(t){var r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target instanceof Element&&(c((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,n.Z)({},e,!0))})),r.unobserve(t.target))}))}),{root:null,rootMargin:"50px 0px 0px 0px",threshold:.01});r.observe(t)}}))}),[o,t]);return[function(t){t&&!o.current.includes(t)&&(o.current.push(t),c((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},o.current.indexOf(t),!1))})))},l]},d=r(184);function f(){var t,e,r=(0,o.Nf)().data,f=u((null===r||void 0===r||null===(t=r.tracks)||void 0===t?void 0:t.length)||0),h=(0,s.Z)(f,2),m=h[0],x=h[1],v=(0,a.useState)(null!==r&&void 0!==r&&r.tracks?Object.fromEntries(r.tracks.map((function(t,e){return[e,!0]}))):{}),g=(0,s.Z)(v,2),b=g[0],p=g[1];(0,a.useEffect)((function(){null!==r&&void 0!==r&&r.tracks&&p((function(t){var e=Object.fromEntries(r.tracks.map((function(t,e){return[e,!0]})));return(0,i.Z)((0,i.Z)({},t),e)}))}),[r]);return console.log("visible",x),(0,d.jsxs)("div",{className:"  flex h-full w-full flex-col   bg-light_bg_Main py-3 dark:bg-dark_bg_Main",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between px-4",children:[(0,d.jsx)("h2",{className:"font-Montserrat text-2xl text-light_txt_Main dark:text-dark_txt_Main ",children:"Top Artist"}),(0,d.jsx)(c.W_,{})]}),(0,d.jsx)("div",{className:"hide-scrollbar grid h-full w-full grid-cols-2 justify-center justify-items-center overflow-y-scroll md:grid-cols-3 ",children:null===r||void 0===r||null===(e=r.tracks)||void 0===e?void 0:e.map((function(t,e){return(0,d.jsx)(l.rU,{to:"/artists/".concat(null===t||void 0===t?void 0:t.artists[0].adamid),children:(0,d.jsxs)("div",{ref:m,className:"my-2 flex h-full w-36 flex-col items-center justify-center",children:[b[e]&&(0,d.jsx)("div",{className:"h-28 w-28 animate-pulse rounded-full bg-blue-700 dark:bg-slate-600 md:h-32 md:w-32"}),(0,d.jsx)("div",{className:b[e]?"hidden":"h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32",children:(0,d.jsx)("img",{src:x[e]?t.images.background:"",alt:"artists",className:b[e]?"hidden":"h-28 w-28 transform overflow-hidden rounded-full shadow-md transition-transform duration-700 hover:scale-125 md:h-32 md:w-32",onLoad:function(){return t=e,void p((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},t,!1))}));var t},onError:function(){return p((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,n.Z)({},e,(0,i.Z)((0,i.Z)({},t[e]),{},{hasError:!0})))}))}})}),(0,d.jsx)("p",{className:"mt-2 w-32 truncate text-center font-Montserrat text-sm font-semibold text-light_txt_Main dark:text-dark_txt_Main",children:t.subtitle})]})},e)}))})]})}}}]);
//# sourceMappingURL=297.7233ba67.chunk.js.map