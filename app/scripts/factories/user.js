(function () {
    function User($q) {
        var usersRef = firebase.database().ref('users');

        var getUsers = function () {
            return usersRef.once('value').then(function (snapshot) {
                return snapshot.val();
            });
        };

        var userExists = function (user) {
            var deferred = $q.defer();
            getUsers().then(function (users) {
                for (var key in users) {
                    if (users[key].username === user.username) {
                        deferred.resolve(true);
                    }
                }
                deferred.resolve(false);
            },
            function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        var addUser = function (user) {
            userExists(user).then(function (result) {
                if (!result) {
                    var newUserRef = usersRef.push();
                    newUserRef.set(user);
                };
            },
            function (error) {
                console.log(JSON.stringify(error));
            });
        };

        var getUserId = function (user) {
            var deferred = $q.defer();
            getUsers().then(
                function (users) {
                    for (var key in users) {
                        if (users[key].username == user.username) {
                            deferred.resolve(key);
                            return deferred.promise;
                        }
                    }
                    deferred.reject("User not found.");
                },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        return {
            getUsers: getUsers,
            addUser: addUser,
            getUserId: getUserId
        };
    };

    angular
        .module('blocChat')
        .factory('User', ['$q', User]);
})();