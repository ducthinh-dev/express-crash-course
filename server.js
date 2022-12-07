const express = require('express')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index', { server1: 'Express', port1: '3000'})
})

const userRouter = require('./routers/users')

app.use('/users', userRouter)

app.listen(PORT)