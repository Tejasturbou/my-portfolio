(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function n(){"gmail"==this.dataset.name?window.location=this.dataset.link:window.open(this.dataset.link,"_blank")}var s,a;document.getElementById("certificates-carousel").setAttribute("images",["assets/images/insta_award-2021.png","assets/images/insta_award-2020.png","assets/images/frontend-nanodegree.png"]),s=document.querySelector(".socials"),a="",[{src:"assets/svg/gmail-logo.svg",name:"gmail",link:"mailto:shindetejas2011@gmail.com"},{src:"assets/svg/github-logo.svg",name:"github",link:"https://github.com/Tejasturbou"},{src:"assets/svg/linked-in-logo.svg",name:"linkedin",link:"https://linkedin.com/in/tejas-p-shinde"},{src:"assets/svg/twitter-logo.svg",name:"twitter",link:"https://twitter.com/Tejasturbou"},{src:"assets/svg/figma-logo.svg",name:"figma",link:"https://www.figma.com/@tejas_shinde"}].forEach((function(t){a+='<my-svg class="socials-svg" data-name='.concat(t.name," data-link=").concat(t.link," src=").concat(t.src,"></my-svg>")})),s.insertAdjacentHTML("afterbegin",a),t(document.getElementsByClassName("socials-svg")).forEach((function(t){return t.addEventListener("click",n)}))})();
//# sourceMappingURL=index.bundle.js.map