const { client, createTask, createUser } = require('./index.js');

async function testDB() {
    client.connect();
    
    const taskOne = await createTask('Im a task made by Justin')
    console.log(taskOne);
    const userOne = await createUser({username: "Jim2", password: "Jim2", firstName: "Jim", lastName: "Bo"});
    console.log(userOne)

    client.end()
}
testDB()