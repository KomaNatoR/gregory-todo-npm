!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){c.default(e,t,n[t])}))}return e};var a,c=(a=r("hKHmD"))&&a.__esModule?a:{default:a};var u={};u=function e(t,n,o){function r(a,c){if(!n[a]){if(!t[a]){var u=void 0;if(!c&&u)return u(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[a]={exports:{}};t[a][0].call(l.exports,(function(e){return r(t[a][1][e]||e)}),l,l.exports,e,t,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=r(i,"IMG"),c=r(i,"VIDEO"),u=r(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===u&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1);var s,l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},d=new Uint8Array(16);function f(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(d)}for(var b=[],p=0;p<256;++p)b.push((p+256).toString(16).slice(1));function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]).toLowerCase()}var m=function(e,t,n){if(l.randomUUID&&!t&&!e)return l.randomUUID();var o=(e=e||{}).random||(e.rng||f)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return v(o)},y=function(e){var t=e.text,n=e.isDone,o=e.id;return'<li class="item" data-id="'.concat(o,'">\n        <div>\n            <input\n                data-action="toggle"\n                type="checkbox"\n                ').concat(n?"checked":"","/>\n            <span>").concat(t,'</span>\n        </div>\n        <div class="buttons">\n            <button data-action="view" class="btn view" type="button">view</button>\n            <button data-action="delete" class="btn delete" type="button">x</button>\n        </div>\n    </li>')},g=[{id:"1",text:"buy bread",isDone:!0,created:"2022-11-01"},{id:"2",text:"buy milk",isDone:!1,created:"2022-11-01"},{id:"3",text:"push money to phone",isDone:!1,created:"2022-11-01"}],h={list:document.querySelector(".list"),form:document.querySelector(".form")},w=function(){var e=g.map(y);h.list.innerHTML="",h.list.insertAdjacentHTML("beforeend",e.join(""))};w(),h.form.addEventListener("submit",(function(e){var t,n=e.target.elements.text.value;e.preventDefault(),t={text:n,isDone:!1,id:m(),created:new Date},g.push(t),w(),h.form.reset()})),h.list.addEventListener("click",(function(t){if(t.target!==t.currentTarget){var n=t.target.dataset.action,o=t.target.closest("li").dataset.id;switch(n){case"toggle":!function(t){g=g.map((function(n){return n.id===t?e(i)({},n,{isDone:!n.isDone}):n})),console.log()}(o);break;case"view":!function(e){var t=u.create('\n        <div class="modal">\n            <p></p>\n            <button class="btn" type="button">Close</button>\n        </div>\n    ');t.show(),t.element().querySelector("p").textContent=g.find((function(t){return t.id===e})).created;var n=t.element().querySelector("button");window.addEventListener("keydown",(function e(n){var o=n.code;"Escape"===o&&(t.close(),window.removeEventListener("keydown",e)),console.log(o)})),n.addEventListener("click",t.close)}(o);break;case"delete":!function(e){g=g.filter((function(t){return t.id!==e})),w(),console.log(g,e)}(o)}}}))}();
//# sourceMappingURL=gregory-todo.dff9a8a9.js.map
