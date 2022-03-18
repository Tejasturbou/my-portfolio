import cssVars from "css-vars-ponyfill";

cssVars({
	onlyLegacy: true,
});

import "core-js/es/promise";
import "core-js/es/string";
import "core-js/es/map";
import "core-js/es/set";
import "core-js/es/array";

import "fetch-polyfill/fetch";

import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";
import "@webcomponents/custom-elements/custom-elements.min.js";
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
