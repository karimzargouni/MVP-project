const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Todo = model('Todo', TodoSchema)

module.exports = Todo
