'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
				// 'public/lib/perfect-scrollbar/min/perfect-scrollbar.min.css'
			],
			js: [
				// 'public/lib/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-file-upload/angular-file-upload.js',
				// 'public/lib/perfect-scrollbar/min/perfect-scrollbar.min.js',
				// 'public/lib/perfect-scrollbar/min/perfect-scrollbar.with-mousewheel.min.js',
				// 'public/lib/angular-perfect-scrollbar/src/angular-perfect-scrollbar.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	}
};
