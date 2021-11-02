'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'nullify-website',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
	},

	firebase: {
		apiKey: "AIzaSyDJ2dw8FsDsRlrsNmn1hQ08Yc6v358njA8",
		authDomain: "nullify-website.firebaseapp.com",
		databaseURL: "https://nullify-website.firebaseio.com",
		projectId: "nullify-website",
		storageBucket: "nullify-website.appspot.com",
		messagingSenderId: "524615343385",
		appId: "1:524615343385:web:f7deee1ce574893527f988"
	},

	emberHighlightJs: {
		style: 'arta'
	},

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
	// ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  ENV['ember-google-maps'] = {
	key: 'AIzaSyCyRhD7MOmKZhfNgwnaQJpG0zbqNvi9ub0',
	language: 'en',
	region: 'US',
	protocol: 'https',
	version: '3.35',
	libraries: ['geometry', 'places'],
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

	if (environment === 'production') {
		ENV.rootURL = '/Nullify-Website';
		ENV.locationType = 'hash';
	}

  return ENV;
};
