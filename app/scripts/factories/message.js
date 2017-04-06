(function () {
    function Message(User) {
        var messagesRef = firebase.database().ref('messages');
        var getRoomMessagesRef = function (id) {
            return id ? messagesRef.orderByChild("roomId").equalTo(id) : null;
        };

        var getByRoomId = function (id, callbackFn) {
            var ref = getRoomMessagesRef(id);
            if (ref) {
                ref.on('value', function (snapshot) {
                    User.getUsers().then(function (userValues) {
                        var messages = snapshot.val();
                        if (messages) {
                            for (var key in messages) {
                                var message = messages[key];
                                message.username = userValues[message.userId].username;
                            }
                        }
                        callbackFn(messages);
                    });
                });
            }
            else {
                callbackFn(null);
            }
        };

        var send = function (message) {
            var newMessageRef = messagesRef.push();
            newMessageRef.set(message);
        };

        return {
            getByRoomId: getByRoomId,
            send: send
        }
    };

    angular
        .module('blocChat')
        .factory('Message', ['User', Message]);
})();