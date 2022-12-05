const express = require('express')
const router = express.Router()
const { createTask, getTasks, client } = require('../db/index.js')

router.get('/', async (req,res, next) => {
    try{
    const tasks = await getTasks();
    res.send({
        tasks
    })
} catch(error){
    throw error
}
})
router.post('/', async (req, res, next) => {
    const { task } = req.body;
    try{
        await createTask(task);
        res.send({
            message: 'Task Added'
        })
    } catch(error){
        throw error
    }
})

module.exports = router;