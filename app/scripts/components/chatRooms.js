(function () {

    function ChatRoomsController(Room, $uibModal) {
        var self = this;
        self.chatRooms = Room.all;

        self.addRoom = function () {

            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                component: 'chatRoomCreate'
            });

            modalInstance.result.then(function (newRoom) {
                Room.add({ $value: newRoom });
            });
        }
    };

    var chatRooms = {
        templateUrl: "../templates/chatRooms.html",
        controller: ['Room', '$uibModal', ChatRoomsController],
        bindings: {
            onUpdateCurrentChatRoom: '&'
        }
    };

    angular
        .module('blocChat')
        .component('chatRooms', chatRooms);
})();