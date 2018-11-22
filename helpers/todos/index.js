let db = require('../models'),
    utils = require('../utils');

exports.getTodos = function (req, res) {
    db.Todo.find()
        .then(todos => res.json(todos))
        .catch(utils.handleErrors);
}

exports.createTodo = function (req, res) {
    db.Todo.create(req.body)
        .then(newTodo => res.status(200).json(newTodo))
        .catch(utils.handleErrors);
}

exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(foundTodo => res.json(foundTodo))
        .catch(utils.handleErrors);
}

exports.updateTodo = function (req, res) {
    db.Todo.findOneAndUpdate({
            _id: req.params.todoId
        }, req.body, {
            new: true
        })
        .then(todo => res.json(todo))
        .catch(utils.handleErrors);
}

exports.deleteTodo = function (req, res) {
    db.Todo.remove({
            _id: req.params.todoId
        })
        .then(() => res.json('todo deleted'))
        .catch(utils.handleErrors);
}

module.exports = exports;