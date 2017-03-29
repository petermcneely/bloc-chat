(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messagesRef = firebase.database().ref('messages');
        var usersRef = firebase.database().ref('users');

        return {
            getByRoomId: function (roomId) {
                var messagesForRoomQuery = messagesRef.orderByChild("roomId").equalTo(roomId);
                var messages = [];
                return usersRef.once('value').then(function (usersSnapshot) {
                    var users = usersSnapshot.val();

                    return messagesForRoomQuery.once('value').then(function (messagesSnapshot) {
                        var messages = messagesSnapshot.val();
                        messages.forEach(function (message) {
                            message.username = users[message.userId].username;
                        });
                        return messages;
                    });
                });
            }
        }
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();