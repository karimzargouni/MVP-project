const { Router } = require('express')
const Todo = require('../../models/TodoListModel')

const router = Router()

router.get('/', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.status(200).send(todos)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then((newTodo) => {
            res.status(200).json(newTodo)
        })
        .catch(error => res.status(500).send(error))
});


module.exports = router
