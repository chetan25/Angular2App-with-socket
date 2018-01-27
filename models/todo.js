const mongoose = require('mongoose');

//schema
const TodoSchema = mongoose.Schema({
    userId: {
	   type: String,
	   required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdOn: {
      type: String,
      required: true
    },
    completionDate: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean
    },
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

module.exports.getTodosByUserId = function(userId, callback) {
	const query = {userId: userId};
	Todo.find(query, callback);
}

module.exports.addTodo = function(todo, callback) {
    todo.save(callback);
}