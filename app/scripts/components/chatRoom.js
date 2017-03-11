(function () {
    function ChatRoomController() {
    };

    var chatRoom = {
        templateUrl: '../templates/chatRoom.html',
        controller: ChatRoomController,
        bindings: {
            messages: '<',
            room: '<'
        }
    }

    angular
        .module('blocChat')
        .component('chatRoom', chatRoom);
})();