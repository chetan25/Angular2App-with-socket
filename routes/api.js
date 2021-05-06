const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Todo = require('../models/todo');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Data
router.post('/register', (req, res, next) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.userName,
		password: req.body.password
	});

	User.addUser(newUser, (err, user) => {
		if (err) {
			res.json({success: false, msg:'Failded to insert'});
		} else {
			res.json({success: true, msg:'user registered'});
		}
	});
});
 
router.post('/login', (req, res, next) => {
	const password = req.body.password;
	const username = req.body.userName;

	User.getUserByName(username, (err, user) => {
		if (err) {
			throw err;
		} 
		if(!user) {
            res.json({success: false, msg:'user not found'});
		}
        if (user) {
            User.comparePassword(password, user.password, (err, isMatch) => {
              if (err) throw err;

               if  (isMatch) {
	           	  const token = jwt.sign(user.toJSON(), process.env.SECRET, {
	           	    expiresIn: 3600
	              });
	              res.json({success: true, token: "JWT " + token, user: {
	           	    id :user._id,
	           		name: user.name,
	           		userName: user.username,
	           		email: user.email
	           	  }});
                } else {
           		  res.json({success: false, msg:'wrong password'});
                }
		    });
        }
	});
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

router.post('/todo', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let newTodo = new Todo({
		userId: req.body.userId,
		title: req.body.title,
		description: req.body.description,
		createdOn: req.body.createdOn,
		completed: req.body.completed,
		completionDate: req.body.completionDate
	});
	Todo.addTodo(newTodo, (err, user) => {
		console.log(user);
		if (err) {
		  res.status(400).send({success: false, msg:err});
		} else {
			res.json({success: true, msg:'todo added', data: user});
		}
	});
});
 
router.get('/todo/:userId', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let userId = req.params.userId;
	Todo.getTodosByUserId(userId, (err, todos) => {
		if (err) {
			res.json({success: false, msg:'Failded to find todo'});
		} else {
			res.json({success: true, msg:'todo found', todos:todos});
		}
	});
});

router.delete('/todo/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let todoId = req.params.id;
  Todo.remove({_id: todoId}, function(err, response) {
      if (err) { 
       	res.json({success: false, msg:'Failded to delete todo'});
      } else {
      	res.json({success: true, msg:'Todo deleted'});
      }	
  });
});

router.put('/todo', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let newTodo = new Todo({
		userId: req.body.userId,
		title: req.body.title,
		description: req.body.description,
		createdOn: req.body.createdOn,
		completed: req.body.completed,
		completionDate: req.body.completionDate
	});
	// use our todo model to find the todo we want
    Todo.findById(req.body.id, function(err, todo) {
        if (err)
            res.json({success: false, msg:'Failded to find todo to edit'});
        //update todo
        todo.title = req.body.title,
		todo.description = req.body.description,
		todo.completed = req.body.completed,

        // save the todo
        todo.save(function(err) {
            if (err)
                res.json({success: false, msg:'Failded edit todo'});

            res.json({success: false, msg:'Todo edited successfully'});
        });
    });
});

module.exports = router;