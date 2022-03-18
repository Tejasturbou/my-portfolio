(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,u(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,e)},c(e)}function l(e,t,r){return l=a()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&s(o,r.prototype),o},l.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(h,e);var r,c,l,d,p,y=(r=h,c=a(),function(){var e,t=u(r);if(c){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),f(i(e=y.call(this)),"prev",(function(){0!==e.current&&(e.slidesArray[e.current].classList.remove("active"),e.current-=1,e.slidesArray[e.current].classList.add("active"),e.rightChevronElem.classList.remove("pointer-none")),0===e.current&&e.leftChevronElem.classList.add("pointer-none")})),f(i(e),"next",(function(){e.current!==e.slidesArray.length-1&&(e.slidesArray[e.current].classList.remove("active"),e.current+=1,e.slidesArray[e.current].classList.add("active"),e.leftChevronElem.classList.remove("pointer-none")),e.current==e.slidesArray.length-1&&e.rightChevronElem.classList.add("pointer-none")})),e.sliderElement=e.createSliderContainer(),e.slidesArray=[],e.current=0,e}return l=h,p=[{key:"observedAttributes",get:function(){return["images"]}}],(d=[{key:"attributeChangedCallback",value:function(e,t,r){"images"==e&&this.renderSlider(r.split(","))}},{key:"createSliderContainer",value:function(){var e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.id="slider";var r=this.createStylesheet();return e.appendChild(r),e.appendChild(t),this.leftChevronElem=this.getChevron("left"),this.rightChevronElem=this.getChevron("right"),t.appendChild(this.leftChevronElem),t.appendChild(this.rightChevronElem),t}},{key:"createStylesheet",value:function(){var e=document.createElement("link");return e.setAttribute("href","./styles/my-carousel-style.css"),e.setAttribute("rel","stylesheet"),e}},{key:"renderSlider",value:function(e){var r=this;if(e||console.error("Attribute value of image should be an array"),(null==e?void 0:e.length)<2)this.rightChevronElem.classList.add("pointer-none");else{this.leftChevronElem.classList.add("pointer-none");var n="";e.forEach((function(e,t){n+="\n                <div class=".concat(0===t?"'slide active'":"'slide'",">\n                    <img src=").concat(e,' alt="logo image" class="slide-image" />\n                </div>')}));var o=document.createElement("div");o.classList.add("slides"),this.sliderElement.appendChild(o),o.insertAdjacentHTML("beforeend",n),this.slidesArray=t(o.children).filter((function(e){return t(e.classList).includes("slide")})),this.slidesArray.forEach((function(e){e.addEventListener("click",r.openOverlay)})),this.rightChevronElem.onclick=this.next,this.leftChevronElem.onclick=this.prev}}},{key:"openOverlay",value:function(e){console.log("inside openOverlay");var t=document.createElement("div");t.classList.add("overlay"),t.addEventListener("click",(function(){return document.querySelector(".overlay").remove()})),console.dir(this);var r=this.children[0].currentSrc.lastIndexOf(this.baseURI),n=document.createElement("img");n.setAttribute("src",this.children[0].currentSrc.slice(r)),n.setAttribute("alt","appreciation image"),n.classList.add("overlay-image"),n.onclick=function(e){e.stopPropagation()},t.appendChild(n),document.body.append(t)}},{key:"getChevron",value:function(e){var t=document.createElement("my-svg");return t.setAttribute("src","assets/svg/".concat(e,"-chevron.svg")),t.id="".concat(e,"-chevron"),t.classList.add("chevron","".concat(e,"-arrow")),t}}])&&n(l.prototype,d),p&&n(l,p),Object.defineProperty(l,"prototype",{writable:!1}),h}(c(HTMLElement));customElements.get("my-carousel")||customElements.define("my-carousel",d)})();
//# sourceMappingURL=my-carousel.bundle.js.map