const { client, createTask, createUser } = require('./index.js');

async function testDB() {
    client.connect();
    const userOne = await createUser({username: "Jim2", password: "Jim2", firstName: "Jim", lastName: "Bo"});
    const taskOne = await createTask('Im a task, with due date, made by Justin', '2022-12-31', 1)

    client.end()
}
testDB()