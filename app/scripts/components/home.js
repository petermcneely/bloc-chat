(function () {
    function HomeCtrl() {
        var self = this;
        self.currentRoom = undefined;
        self.toggle = false;

        self.updateRoom = function (room) {
            self.currentRoom = room;
        };
    }

    var home = {
        templateUrl: '../templates/home.html',
        controller: HomeCtrl
    }

    angular
        .module('blocChat')
        .component('home', home);
})();