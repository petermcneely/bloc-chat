(function() {
	
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		return {
            all: rooms,
            add: function (room) {
                rooms.$add(room).then(
                    function (ref) {
                        console.log("Added record with id: " + ref.key);
                    },
                    function (err) {
                        console.log("Unable to add record: " + err);
                    }
                );
            }
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();