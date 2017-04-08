(function () {
    function Message(User) {
        var messagesRef = firebase.database().ref('messages');
        var currentRef = undefined;
        var onValueChange = undefined;

        var getRoomMessagesRef = function (id) {
            return id ? messagesRef.orderByChild("roomId").equalTo(id) : null;
        };

        var getByRoomId = function (id, callbackFn) {
            if (currentRef && onValueChange)
                currentRef.off('value', onValueChange);

            currentRef = getRoomMessagesRef(id);
            if (currentRef) {
                onValueChange = currentRef.on('value', function (snapshot) {
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
            User.getUserId({ username: firebase.auth().currentUser.email }).then(
                function (userId) {
                    message.userId = userId;
                    message.sentAt = new Date().toDateString();
                    var newMessageRef = messagesRef.push();
                    newMessageRef.set(message);
                },
                function (error) {
                    console.log(error);
                });
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