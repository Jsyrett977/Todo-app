const express = require('express')
const tasksRouter = express.Router()
const { createTask, getTasks, completeTask, getTasksByUserId, deleteTask } = require('../db/index.js')
const { requireUser } = require('./utils')

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
        const newTask = await createTask(task, due_date, creatorId);
        res.send({
            newTask
        })
    } catch(error){
        throw error
    }
})
tasksRouter.patch('/:taskId', requireUser, async (req, res, next) => {
    const taskId = req.params.taskId
    const {complete, completedOn} = req.body;
    try{
        const taskCompleted = await completeTask(taskId, complete, completedOn)
        res.send(taskCompleted)
    }catch(error){
        throw error
    }
})
tasksRouter.delete('/:taskId', requireUser, async (req, res, next) => {
    const taskId = req.params.taskId;
    try{
        const deletedTask =  await deleteTask(taskId);
        res.send(
            deletedTask,
        )
    } catch(error){
        throw error;
    }
})
module.exports = tasksRouter;