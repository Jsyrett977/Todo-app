const express = require('express')
const tasksRouter = express.Router()
const { createTask, getTasks, client } = require('../db/index.js')
const { requireUser } = require('./utils')

tasksRouter.get('/', async (req,res, next) => {
    try{
    const tasks = await getTasks();
    res.send({
        tasks
    })
} catch(error){
    throw error
}
})
tasksRouter.post('/', async (req, res, next) => {
    const { task, due_date } = req.body;
    try{
        await createTask(task, due_date);
        res.send({
            message: 'Task Added'
        })
    } catch(error){
        throw error
    }
})

module.exports = tasksRouter;