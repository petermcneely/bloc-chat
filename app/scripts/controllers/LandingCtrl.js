(function () {
	angular
		.module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$scope', function (Room, Message, $scope) {
            this.currentMessages = undefined;
            this.currentRoom = undefined;

            this.updateRoom = function (id, value) {
                this.currentRoom = value;
                Message.getByRoomId(id).then(
                    function (success) {
                        
                        this.currentMessages = success;
                        alert(JSON.stringify(this.currentMessages));
                        //console.log(this.currentMessages);
                        $scope.$apply();
                    },
                    function (failure) {
                        console.log(failure);
                    }
                );

                //Message.getByRoomId(id).then(function (data) {
                //    this.currentMessages = data;
                //}).then(function (success) {
                //    console.log('here?');
                //    console.log(success);
                //    }).then(function (success) {
                //        console.log("here too?");
                //});
            };
        }]);
})();