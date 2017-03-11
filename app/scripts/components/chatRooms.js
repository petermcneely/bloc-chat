(function () {

    function ChatRoomsController(Room, $uibModal) {

        this.chatRooms = Room.all;

        this.addRoom = function () {

            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                controller: 'NewRoomCtrl',
                controllerAs: '$ctrl',
                templateUrl: '../templates/newRoomModal.html'
            });

            modalInstance.result.then(function (newRoom) {
                Room.add({ $value: newRoom });
            });
        }
    };

    var chatRooms = {
        templateUrl: "../templates/chatRooms.html",
        controller: ['Room', '$uibModal', ChatRoomsController]
    };

    angular
        .module('blocChat')
        .component('chatRooms', chatRooms);
})();