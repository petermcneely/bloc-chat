(function () {
    function NewRoomController($uibModalInstance) {

        this.ok = function () {
            $uibModalInstance.close(this.newRoom);
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$uibModalInstance', NewRoomController]);
})();