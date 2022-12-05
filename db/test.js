const { client, createTask } = require('./index.js');

async function testDB() {
    client.connect();
    
    const taskOne = await createTask('Im a task made by Justin')
    console.log(taskOne);

    client.end()
}
testDB()