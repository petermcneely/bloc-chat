(function () {
    function chatRoomCreateCtrl() {
        var self = this;
        self.newRoom = undefined;

        self.ok = function () {
            self.modalInstance.close(self.newRoom);
        };

        self.cancel = function () {
            self.modalInstance.dismiss('cancel');
        };
    };

    var chatRoomCreate = {
        templateUrl: '../templates/chatRoom.create.html',
        controller: chatRoomCreateCtrl,
        bindings: {
            modalInstance: '<'
        }
    };

    angular
        .module('blocChat')
        .component('chatRoomCreate', chatRoomCreate);
})();