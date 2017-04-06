(function () {
    function ChatRoomController(Message, $scope) {
        var self = this;
        self.loading = false;
        self.text = undefined;

        $scope.$watch(
            function () {
                return self.room;
            },
            function (newValue) {
                if (newValue)
                    getByRoomId(newValue.id);
            }
        );

        var getByRoomId = function (id) {
            self.loading = true;
            Message.getByRoomId(id, function (messages) {
                self.loading = false;
                self.room.messages = messages;
                $scope.$apply();
            });
        };

        self.send = function () {
            var message = {
                "content": self.text,
                "roomId": self.room.id,
                "sentAt": "4/6/2017",
                "userId": "-Key1"
            };
            Message.send(message);
            self.text = null;
        }
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