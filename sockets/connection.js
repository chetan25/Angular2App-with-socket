const TodoViewPermission = require('../models/permission');

// socet connection for the port
module.exports = function (server) {
  server.on('listening',function(){
    console.log('ok, server is running');
  });
  //initialize socket on that server 
  const io = require('socket.io').listen(server);
  var users = [];
  var clientConnections = {};
 
  /*||||||||||||||||SOCKET|||||||||||||||||||||||*/
  //Listen for connection
  io.on('connection', function (socket) {
    var userIdJoined;
    var userName = null;
    var isLoggedIn = true;
    socket.on('joinPublicChannel', function (data) {
  	  //join the user to the public channel
      console.log(data['userId'], users);
      var index = users.findIndex(function(user) {
        return data['userId'] === user.userId
      });
      socket.join('public');
      clientConnections[data['userId']] = socket.id;
      if (index < 0) {
        users.push(data);
        userIdJoined = data['userId'];
        userName = data['userName'];
        console.log('user joined public room ' + data['userName']);
      }
      // emit a "message" event to every other socket using  socket.broadcast.emit
      // emit to every user using socket.emit
      io.to('public').emit("userOnPublicChannel", {
        channel: 'public',
        data: users,
        newUserNameJoined: userName
      });
    });
    
    socket.on('getJoinedUsers', function(data) {
        io.to('public').emit("userOnPublicChannel", {
          channel: 'public',
          data: users
        });
    });

    socket.on('sendMessage', function(data) {
        var socketId = clientConnections[data['userId']];
        //send message to the paticular user
        io.to(socketId).emit('receiveMessage', {
          'message':data['message']
        });
    });
    
    socket.on('logOut', function(data) {
      isLoggedIn = false;
    });

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
      console.log(isLoggedIn, 'user log in state');
      console.log(users, 'logged users');
      if (!isLoggedIn) {
        var index = users.findIndex(function(element) {
          return userIdJoined === element.userId
        });
        console.log(index, 'index');
        var userName;
        if (index >= 0) {
          userName = users[index].userName;
          users.splice(index, 1);
          console.log(userName);
          console.log(users, 'left');
        }
        console.log('A user disconnected ' + userName);
        if (users.length > 0) {
          io.to('public').emit("userOnPublicChannel", {
            channel: 'public',
            data: users,
            userNameLeft: userName
          });
        }  
      }
    });
  });
}