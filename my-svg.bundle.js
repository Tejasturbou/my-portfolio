(()=>{class t extends HTMLElement{constructor(){super()}static get observedAttributes(){return["src"]}attributeChangedCallback(t,e,s){"src"==t&&this.getSvg(s)}getSvg(t=this.getAttribute("src")){fetch(t).then((t=>t.text())).then((t=>{this.insertAdjacentHTML("afterbegin",t)}))}}customElements.get("my-svg")||customElements.define("my-svg",t)})();
//# sourceMappingURL=my-svg.bundle.js.map