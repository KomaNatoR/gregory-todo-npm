var t={};t=function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var s=void 0;if(!a&&s)return s(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[c]={exports:{}};e[c][0].call(l.exports,(function(t){return r(e[c][1][t]||t)}),l,l.exports,t,e,n,o)}return n[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},r=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var c=r(i,"IMG"),a=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),c=function(t){return!1!==e.onClose(a)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(a)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&c()}));var a={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(a)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(a)}))},close:c};return a}},{}]},{},[1])(1);var e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const o=new Uint8Array(16);function r(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function c(t,e=0){return(i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]).toLowerCase()}var a=function(t,n,o){if(e.randomUUID&&!n&&!t)return e.randomUUID();const i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){o=o||0;for(let t=0;t<16;++t)n[o+t]=i[t];return n}return c(i)};const s=({text:t,isDone:e,id:n})=>`<li class="item" data-id="${n}">\n        <div>\n            <input\n                data-action="toggle"\n                type="checkbox"\n                ${e?"checked":""}/>\n            <span>${t}</span>\n        </div>\n        <div class="buttons">\n            <button data-action="view" class="btn view" type="button">view</button>\n            <button data-action="delete" class="btn delete" type="button">x</button>\n        </div>\n    </li>`;let u=[{id:"1",text:"buy bread",isDone:!0,created:"2022-11-01"},{id:"2",text:"buy milk",isDone:!1,created:"2022-11-01"},{id:"3",text:"push money to phone",isDone:!1,created:"2022-11-01"}];const l={list:document.querySelector(".list"),form:document.querySelector(".form")},d=()=>{const t=u.map(s);l.list.innerHTML="",l.list.insertAdjacentHTML("beforeend",t.join(""))};d(),l.form.addEventListener("submit",(function(t){const{value:e}=t.target.elements.text;t.preventDefault(),function(t){const e={text:t,isDone:!1,id:a(),created:new Date};u.push(e)}(e),d(),l.form.reset()})),l.list.addEventListener("click",(function(e){if(e.target===e.currentTarget)return;const{action:n}=e.target.dataset,o=e.target.closest("li"),{id:r}=o.dataset;switch(n){case"toggle":(t=>{u=u.map((e=>e.id===t?{...e,isDone:!e.isDone}:e)),console.log()})(r);break;case"view":(e=>{const n=t.create('\n        <div class="modal">\n            <p></p>\n            <button class="btn" type="button">Close</button>\n        </div>\n    ');n.show(),n.element().querySelector("p").textContent=u.find((t=>t.id===e)).created;const o=n.element().querySelector("button");window.addEventListener("keydown",(function t({code:e}){"Escape"===e&&(n.close(),window.removeEventListener("keydown",t)),console.log(e)})),o.addEventListener("click",n.close)})(r);break;case"delete":(t=>{u=u.filter((e=>e.id!==t)),d(),console.log(u,t)})(r)}}));
//# sourceMappingURL=gregory-todo.34c6e7ea.js.map