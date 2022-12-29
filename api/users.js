const express = require('express')
const usersRouter = express.Router()
const { createUser, getUserByUsername, getUserWithTasksById} = require('../db/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { requireUser } = require('./utils');

usersRouter.post('/register', async (req, res, next) => {
    const {username, password, firstName, lastName} = req.body;
    if(!username || !password || !firstName || !lastName){
        res.status(401).send({
            name: "MissingFields",
            message: "Please enter all fields to register",
        })
        return;
    }
    try{
        const _user = await getUserByUsername(username);
        if(_user){
            res.status(401).send({
                name: "UsernameTaken",
                message: "Username is taken, please choose another username"
            })
            return;
        }else{
            const user = await createUser({ username, password, firstName, lastName })
            if(user){
                delete user.password;
                res.send({
                    message: `Account for ${user.username} created`,
                    user,
                })
            }
        }
    } catch(error){
        throw error;
    }
})
usersRouter.post('/login', async (req, res, next) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.send({
            name: "MissingUsernameorPassword",
            message: "Missing Username or Password"
        })
        return;
    }
    try{
        const user = await getUserByUsername(username);
        if(user){
            if(await bcrypt.compare(password, user.password)){
                const token = jwt.sign(user, process.env.JWT_SECRET, {
                        expiresIn: "1w"
                    })
                    delete user.password;
                    user.token = token;
                    res.send({
                        user,
                        message: "Logged In!"
                    })
            }else{
                res.send({
                    name: "IncorrectUsernameorPassword",
                    message: "Username or Password is incorrect"
                })
            }
        }else{
            res.send({
                name: "IncorrectUsernameorPassword",
                message: "Username or Password is incorrect"
            })
        }

    }catch(error){
        throw error
    }
})

usersRouter.get('/me', requireUser, async (req, res, next) => {
    if(req.user){
        const user = await getUserWithTasksById(req.user.id)
        res.send(user)
    } else{
        res.status(401).send({
            name: "UnauthorizedError",
            message: "Must be logged in"
        })
    }
})
module.exports = usersRouter;