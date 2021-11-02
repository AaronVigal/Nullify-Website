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
				src: "/assets/images/lock-192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				src: "/assets/images/lock-512.png",
				sizes: "512x512",
				type: "image/png"
			}
		],
		ms: {
			tileColor: '#303030'
		}
	};
}
