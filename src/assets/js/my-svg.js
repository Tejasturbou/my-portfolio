class MySVG extends HTMLElement {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ["src"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == "src") {
			this.getSvg(newValue);
		}
	}

	getSvg(url = this.getAttribute("src")) {
		fetch(url)
			.then((response) => response.text())
			.then((svg) => {
				this.insertAdjacentHTML("afterbegin", svg);
			});
	}
}

customElements.define("my-svg", MySVG);
