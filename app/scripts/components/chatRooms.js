(function () {

    function ChatRoomsController() {

    }

    var chatRooms = {
        templateUrl: "../templates/chatRooms.html",
        controller: ChatRoomsController,
        bindings: {
            chatRooms: "="
        }
    };

    angular
        .module('blocChat')
        .component('chatRooms', chatRooms);
})();