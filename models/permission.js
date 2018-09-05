const mongoose = require('mongoose');
//schema
const PermissionSchema = mongoose.Schema({
	fromId: {
		type: String,
		required: true
	},
	toId: {
		type: String,
		required: true
	},
});
  
const Permission =  module.exports = mongoose.model('Permission', PermissionSchema);

module.exports.addTodoViewPermission = function(permission, callback) {
	permission.save(callback);
}

module.exports.getViewPermission = function(userId, callback) {
	const query = {toId: userId};
	Permission.find(query, callback);
}