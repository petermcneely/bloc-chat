(function () {
    function LandingCtrl(Room, Message) {

        this.currentMessages = undefined;
        this.currentRoom = undefined;

        this.updateRoom = function (id, value) {
            this.currentRoom = value;
            this.currentMessages = Message.getByRoomId(id);
        }
	};

	angular
		.module('blocChat')
		.controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();