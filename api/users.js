const express = require('express')
const usersRouter = express.Router()
const { createUser, getUserByUsername } = require('../db/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

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
                message: "Please choose another username"
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
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign(user, process.env.JWT_SECRET, {
                    expiresIn: "1w"
                })
                delete user.password;
                user.token = token;
                console.log(token);
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
    }catch(error){
        throw error
    }
})
module.exports = usersRouter;