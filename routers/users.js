const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((request, response) => {
        response.render('../views/users', { user: 'guest' })
    })
    .post((request, response) => {
        response.send('hello new user')
    })


router
    .route('/:userId')
    .get((request, response) => {
        response.render('../views/users', { user: request.user.name })
    })

const users = [{name: 'Thinh'}, {name: 'Duc'}]
router.param('userId',(request, response, next, userId) => {
    request.user = users[userId]
    next()
})

module.exports = router