(function () {
    function User() {
        var usersRef = firebase.database().ref('users');

        return {
            getUsers: function () {
                return usersRef.once('value').then(function (snapshot) {
                    return snapshot.val();
                });
            }
        };
    };

    angular
        .module('blocChat')
        .factory('User', User);
})();