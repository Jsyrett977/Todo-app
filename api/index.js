const express = require('express');
const router = express.Router();
const tasksRouter = require('./tasks');
const usersRouter = require('./users');
const jwt = require('jsonwebtoken')
const { getUserById } = require('../db/index')

router.use('/', async (req, res, next) => {
    const auth = req.header('Authorization')
    if(auth){
        const [_, token] = auth.split(' ');
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const user = await getUserById(data.id);
        delete user.password
        req.user = user;
        next()
    }else{
        next();
    }
})
router.get('/', (req, res, next) => {
    res.send({
        message: 'Welcome'
    })
})
router.use('/tasks', tasksRouter);
router.use('/users', usersRouter)
module.exports = router