(function () {
    function ChatRoomController(Message, $scope) {
        var self = this;
        self.loading = false;

        $scope.$watch(
            function () {
                return self.room
            },
            function (newValue) {
                if (newValue)
                    getRoom(newValue.id);
            }
        );

        var getRoom = function (id) {
            self.loading = true;
            Message.getByRoomId(id).then(
                function (success) {
                    self.loading = false;
                    self.room.messages = success;
                    $scope.$apply();
                },
                function (failure) {
                    self.loading = false;
                    console.log(failure);
                }
            );
        };
    };

    var chatRoom = {
        templateUrl: '../templates/chatRoom.html',
        controller: ['Message', '$scope', ChatRoomController],
        bindings: {
            room: '<'
        }
    }

    angular
        .module('blocChat')
        .component('chatRoom', chatRoom);
})();