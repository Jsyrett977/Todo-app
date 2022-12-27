const express = require('express')
const tasksRouter = express.Router()
const { createTask, getTasks, completeTask, getTasksByUserId } = require('../db/index.js')
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
tasksRouter.get('/:creatorId', requireUser, async (req, res, next) => {
    const creatorId = req.params.creatorId
    try{
        const userTasks = await getTasksByUserId(creatorId);
        res.send(userTasks);
    }catch(error){
        throw error;
    }
})
tasksRouter.post('/', requireUser, async (req, res, next) => {
    const { task, due_date, creatorId } = req.body;
    try{
        await createTask(task, due_date, creatorId);
        res.send({
            message: 'Task Added'
        })
    } catch(error){
        throw error
    }
})
tasksRouter.patch('/:taskId', requireUser, async (req, res, next) => {
    const taskId = req.params.taskId
    const {complete} = req.body;

    try{
        const taskCompleted = await completeTask(taskId, complete)
        res.send(taskCompleted)
    }catch(error){
        throw error
    }
})

module.exports = tasksRouter;