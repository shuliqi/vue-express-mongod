(function(window){var svgSprite='<svg><symbol id="icon-yuanquanjiahao" viewBox="0 0 1024 1024"><path d="M513.935072 8.484232c-278.301424 0-504.703827 226.40138-504.703827 504.671081 0 278.301424 226.40138 504.703827 504.703827 504.703827s504.703827-226.40138 504.703827-504.703827C1018.638899 234.885612 792.236496 8.484232 513.935072 8.484232L513.935072 8.484232zM513.935072 964.643124c-248.963235 0-451.493951-202.523553-451.493951-451.486788 0-248.931512 202.530716-451.460182 451.493951-451.460182s451.491904 202.529693 451.491904 451.460182C965.426977 762.118548 762.898307 964.643124 513.935072 964.643124L513.935072 964.643124zM704.295608 476.860688 549.872562 476.860688 549.872562 322.794777c0-14.686491-20.791535-26.605961-35.478026-26.605961s-35.471886 11.920494-35.471886 26.605961l0 154.065911L323.573513 476.860688c-14.686491 0-26.604938 20.791535-26.604938 35.478026 0 14.686491 11.918447 35.471886 26.604938 35.471886l155.349137 0 0 155.737994c0 14.686491 20.786419 26.604938 35.471886 26.604938s35.478026-11.918447 35.478026-26.604938L549.872562 547.8106l154.423045 0c14.686491 0 26.604938-20.786419 26.604938-35.471886C730.901569 497.652224 719.013821 476.860688 704.295608 476.860688L704.295608 476.860688zM704.295608 476.860688"  ></path></symbol><symbol id="icon-icon-yuanxk" viewBox="0 0 1024 1024"><path d="M512.000512 512m-81.864496 0a81.864496 81.864496 0 1 0 163.728992 0 81.864496 81.864496 0 1 0-163.728992 0Z"  ></path><path d="M925.251464 337.411683c-22.590508-53.410444-54.926984-101.373829-96.108919-142.555763s-89.144296-73.517387-142.555763-96.107895c-55.311747-23.394826-114.050546-35.256992-174.587294-35.256992s-119.27657 11.862165-174.587293 35.256992c-53.411467 22.590508-101.373829 54.92596-142.556787 96.107895-41.181935 41.181935-73.517387 89.145319-96.107895 142.555763-23.394826 55.310723-35.256992 114.051569-35.256992 174.588317s11.862165 119.27657 35.256992 174.587294c22.591531 53.410444 54.926984 101.373829 96.107895 142.556786 41.182958 41.181935 89.145319 73.518411 142.556787 96.108918 55.310723 23.394826 114.050546 35.256992 174.587293 35.256992s119.27657-11.862165 174.587294-35.256992c53.410444-22.590508 101.372805-54.926984 142.555763-96.108918s73.518411-89.145319 96.108919-142.556786c23.394826-55.310723 35.256992-114.050546 35.256991-174.587294 0-60.537771-11.862165-119.277594-35.256991-174.588317zM511.999488 909.343657c-219.095997 0-397.343657-178.24766-397.343657-397.343657S292.903491 114.656343 511.999488 114.656343 909.343145 292.904003 909.343145 512 731.095485 909.343657 511.999488 909.343657z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)