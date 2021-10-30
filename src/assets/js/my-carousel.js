class MyCarousel extends HTMLElement {
	constructor() {
		super();
		this.sliderElement = this.createSliderContainer();

		this.slidesArray = [];
		this.current = 0;
	}

	static get observedAttributes() {
		return ["images"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == "images") {
			this.renderSlider(newValue.split(","));
		}
	}

	createSliderContainer() {
		let shadow = this.attachShadow({ mode: "open" });
		const sliderElement = document.createElement("div");
		sliderElement.id = "slider";
		const stylesheetElem = this.createStylesheet();
		shadow.appendChild(stylesheetElem);
		shadow.appendChild(sliderElement);
		this.leftChevronElem = this.getChevron("left");
		this.rightChevronElem = this.getChevron("right");
		sliderElement.appendChild(this.leftChevronElem);
		sliderElement.appendChild(this.rightChevronElem);
		return sliderElement;
	}

	createStylesheet() {
		const linkElem = document.createElement("link");
		linkElem.setAttribute("href", "/styles/my-carousel-style.css");
		linkElem.setAttribute("rel", "stylesheet");
		return linkElem;
	}

	renderSlider(images) {
		if (!images) console.error("Attribute value of image should be an array");
		if (images?.length < 2) {
			this.rightChevronElem.classList.add("pointer-none");
			return;
		}
		this.leftChevronElem.classList.add("pointer-none");

		let elem = "";
		images.forEach((image, index) => {
			const classes = index === 0 ? "'slide active'" : "'slide'";
			elem += `
                <div class=${classes}>
                    <img src=${image} alt="logo image" class="slide-image" />
                </div>`;
		});

		const divElem = document.createElement("div");
		divElem.classList.add("slides");
		this.sliderElement.appendChild(divElem);

		divElem.insertAdjacentHTML("beforeend", elem);

		this.slidesArray = [...divElem.children].filter((elem) =>
			[...elem.classList].includes("slide")
		);

		this.slidesArray.forEach((slide) => {
			slide.addEventListener("click", this.openOverlay);
		});

		this.rightChevronElem.onclick = this.next;
		this.leftChevronElem.onclick = this.prev;
	}

	openOverlay(event) {
		console.log("inside openOverlay");
		const overlay = document.createElement("div");
		overlay.classList.add("overlay");
		overlay.addEventListener("click", () =>
			document.querySelector(".overlay").remove()
		);
		console.dir(this);
		const lastIndex = this.children[0].currentSrc.lastIndexOf(this.baseURI);
		const imageElement = document.createElement("img");
		imageElement.setAttribute(
			"src",
			this.children[0].currentSrc.slice(lastIndex)
		);
		imageElement.setAttribute("alt", "appreciation image");
		imageElement.classList.add("overlay-image");
		imageElement.onclick = function (event) {
			event.stopPropagation();
		};
		overlay.appendChild(imageElement);
		document.body.append(overlay);
	}

	prev = () => {
		if (this.current !== 0) {
			this.slidesArray[this.current].classList.remove("active");
			this.current -= 1;
			this.slidesArray[this.current].classList.add("active");
			this.rightChevronElem.classList.remove("pointer-none");
		}
		if (this.current === 0) {
			this.leftChevronElem.classList.add("pointer-none");
		}
	};

	next = () => {
		if (this.current !== this.slidesArray.length - 1) {
			this.slidesArray[this.current].classList.remove("active");
			this.current += 1;
			this.slidesArray[this.current].classList.add("active");
			this.leftChevronElem.classList.remove("pointer-none");
		}
		if (this.current == this.slidesArray.length - 1) {
			this.rightChevronElem.classList.add("pointer-none");
		}
	};

	getChevron(chev) {
		const mySvg = document.createElement("my-svg");
		mySvg.setAttribute("src", `assets/svg/${chev}-chevron.svg`);
		mySvg.id = `${chev}-chevron`;
		mySvg.classList.add("chevron", `${chev}-arrow`);
		return mySvg;
	}
}

if (!customElements.get("my-carousel")) {
	customElements.define("my-carousel", MyCarousel);
}
