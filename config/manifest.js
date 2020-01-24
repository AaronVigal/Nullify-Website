'use strict';

module.exports = function (/* environment, appConfig */) {
	// See https://zonkyio.github.io/ember-web-app for a list of
	// supported properties

	return {
		name: "Nullify Website",
		short_name: "Nullify",
		description: "Nullify Security Group's Website",
		start_url: "/",
		display: "standalone",
		background_color: "#303030",
		theme_color: "#303030",
		icons: [
			{
				src: "/public/assets/images/nullify_lock.png",
				sizes: "117x164",
				type: "image/png"
			}
		],
		ms: {
			tileColor: '#fff'
		}
	};
}
