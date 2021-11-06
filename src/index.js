import "./styles.scss";
import "./styles/timeline.scss";

function populateCarousel() {
	const carouselElement = document.getElementById("certificates-carousel");
	carouselElement.setAttribute("images", [
		"assets/images/insta_award-2021.png",
		"assets/images/insta_award-2020.png",
		"assets/images/frontend-nanodegree.png",
	]);
}

function populateSocials() {
	const socialDiv = document.querySelector(".socials");
	const socials = [
		{
			src: "assets/svg/gmail-logo.svg",
			name: "gmail",
			link: "mailto:shindetejas2011@gmail.com",
		},
		{
			src: "assets/svg/github-logo.svg",
			name: "github",
			link: "https://github.com/Tejasturbou",
		},
		{
			src: "assets/svg/linked-in-logo.svg",
			name: "linkedin",
			link: "https://linkedin.com/in/tejas-p-shinde",
		},
		{
			src: "assets/svg/twitter-logo.svg",
			name: "twitter",
			link: "https://twitter.com/Tejasturbou",
		},
		{
			src: "assets/svg/figma-logo.svg",
			name: "figma",
			link: "https://www.figma.com/@tejas_shinde",
		},
	];

	let svgElements = "";
	socials.forEach((social) => {
		svgElements += `<my-svg class="socials-svg" data-name=${social.name} data-link=${social.link} src=${social.src}></my-svg>`;
	});
	socialDiv.insertAdjacentHTML("afterbegin", svgElements);
	const socialElements = document.getElementsByClassName("socials-svg");
	[...socialElements].forEach((element) =>
		element.addEventListener("click", openSocial)
	);
}

function openSocial() {
	if (this.dataset.name == "gmail") {
		window.location = this.dataset.link;
	} else {
		window.open(this.dataset.link, "_blank");
	}
}

populateCarousel();
populateSocials();
