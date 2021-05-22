const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const TodoRoutes = require('./routes/api/TodoListRoute')
const path = require('path')
const PORT = 3000
const morgan = require('morgan')
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
const MONGO_URI = "mongodb+srv://khemissiAmir:merde258@stickers.da6z6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api', TodoRoutes)


app.use(express.static('client/dist'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
