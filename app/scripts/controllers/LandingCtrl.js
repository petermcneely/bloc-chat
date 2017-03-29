(function () {
	angular
		.module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$scope', function (Room, Message, $scope) {
            var self = this;
            self.currentMessages = undefined;
            self.currentRoom = undefined;

            self.updateRoom = function (id, value) {
                self.currentRoom = value;
                Message.getByRoomId(id).then(
                    function (success) {
                        self.currentMessages = success;
                        $scope.$apply();
                    },
                    function (failure) {
                        console.log(failure);
                    }
                );
            };
        }]);
})();