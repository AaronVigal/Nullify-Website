'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-bootswatch': 'darkly',
    'ember-cli-favicon': {
        enable: true,
        iconPath: 'assets/images/nullify_lock.png',
        faviconsConfig: {
            path: '/',
            appName: 'Nullify Website',
            appShortName: 'Nullify',
            appDescription: 'Nullify Cyber Security',
            developerName: 'Aaron Vigal',
            version: 1.0,
            icons: {
                favicons: true,
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                firefox: true,
                windows: true,
                yandex: true
            }
        }
	},
	'esw-cache-fallback': {
		patterns: [
		  'https://firestore.googleapis.com/(.+)'
		],
	},
	'asset-cache': {
		include: [ 'assets/**/**/*' ]
  	},

    babel: {
        plugins: [
            'transform-object-rest-spread'
        ]
    },

    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
