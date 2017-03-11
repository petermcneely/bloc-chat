(function () {
	function LandingCtrl(Room) {
		this.rooms = Room.all;
	};

	angular
		.module('blocChat')
		.controller('LandingCtrl', ['Room', LandingCtrl]);
})();