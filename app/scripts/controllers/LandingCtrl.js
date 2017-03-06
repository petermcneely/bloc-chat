(function () {
	function LandingCtrl(Room) {
		this.heroTitle = "hello!";
		this.rooms = Room.all;
	};

	angular
		.module('blocChat')
		.controller('LandingCtrl', ['Room', LandingCtrl]);
})();