const {Client} = require('pg');
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

const createTask = async (task) => {
    const {rows: [theTask]} = await client.query(`
    INSERT INTO tasks(task)
    VALUES ($1)
    RETURNING *
    ;
`, [task])
    return theTask;

}
const createUser =  async (user) => {
    const {username, password, firstName, lastName } = user;
    const { rows } = await client.query(`
        INSERT INTO users(username, password, "firstName", "lastName")
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (username) DO NOTHING
        RETURNING *
    `, [username, password, firstName, lastName])
    return rows;
}


module.exports = {
    client,
    createTask,
    getTasks,
    createUser
}