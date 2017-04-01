(function () {
    function MessageCtrl() {

    };

    var message = {
        templateUrl: '../templates/message.html',
        controller: MessageCtrl,
        bindings: {
            message: '<'
        }
    };

    angular
        .module('blocChat')
        .component('message', message);   
})();