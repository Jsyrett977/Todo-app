const {Client} = require('pg');
const bcrypt = require('bcrypt')
const { DATABASE_URL = 'postgres://localhost:5432/todo-dev' } = process.env;
const client = new Client({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : undefined,
})
const getTasks = async () => {
    const { rows } = await client.query(`
    SELECT *
    FROM tasks
    ;
    `)
    return rows;
}

const createTask = async (task, due, creatorId) => {
    const {rows: [theTask]} = await client.query(`
    INSERT INTO tasks(task, due_date, "creatorId")
    VALUES ($1, $2, $3)
    RETURNING *
    ;
`, [task, due, creatorId])
    return theTask;

}
const createUser =  async (user) => {
    const {username, password, firstName, lastName } = user;
    const cryptedPassword = await bcrypt.hash(password, 10)
    try{
    const { rows: [user] } = await client.query(`
        INSERT INTO users(username, password, "firstName", "lastName")
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (username) DO NOTHING
        RETURNING *
    `, [username, cryptedPassword, firstName, lastName])
    return user;
    }catch(error){
        throw error;
    }
}
const getUserByUsername = async (username) => {
    try{
        const { rows: [user] } = await client.query(`
        SELECT *
        FROM users
        WHERE username = $1
        ;
        `, [username]);
        return user
    } catch(error){
        console.error("getuser", error)
    }
}
const getUserById = async (id) => {
    try{
        const { rows: [user] } = await client.query(`
        SELECT *
        FROM users
        WHERE id = $1
        ;
        `, [id])
        return user;
    }catch(error){
        throw error
    }
}
const getTasksByUserId = async (id) => {
    try{
        const {rows: tasks} = await client.query(`
            SELECT task, complete, due_date
            FROM tasks
            WHERE "creatorId" = $1
            ;
        `, [id])
        return tasks;
    }catch(error){
        throw error;
    }
}
const getUserWithTasksById = async (id) => {
    try{
        const {rows: [user]} = await client.query(`
        SELECT *
        FROM users
        WHERE users.id = $1
        ;
        `, [id])
        const {rows: tasks} = await client.query(`
            SELECT *
            FROM tasks
            WHERE "creatorId" = $1
            ;
        `,[id])
        user.tasks = tasks;
        delete user.password
        return user;
    }catch(error){
        throw error
    }
}
module.exports = {
    client,
    createTask,
    getTasks,
    createUser,
    getUserByUsername,
    getUserById,
    getTasksByUserId,
    getUserWithTasksById
}