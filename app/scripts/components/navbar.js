(function () {

    var navbar = {
        templateUrl: '../templates/navbar.html',
        controller: ['User', function (User) {
            var self = this;
            self.user = undefined;

            self.signOut = function () {
                if (self.user) {
                    firebase.auth().signOut();
                    self.user = null;
                }
            };

            self.$onInit = function () {
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        user.getToken().then(function (accessToken) {
                            self.user = user;
                            User.addUser(
                                { username: user.email }
                            );
                        },
                        function (error) {
                            self.user = null;
                        });
                    } else {
                        self.user = null;
                    }
                }, function (error) {
                    console.log(error);
                });
            };
        }]
    };

    angular
        .module('blocChat')
        .component('navBar', navbar);
})();