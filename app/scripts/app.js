(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('home', {
                url: '/',
                template: '<home></home>'
			});
	};

	angular
		.module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
		.config(config);
})();