const { client } = require('./index.js')

const rebuildDB = async () => {
    await client.query(`
        DROP TABLE IF EXISTS tasks;
        DROP TABLE If EXISTS users
    `)

    console.log('Creating Tables');

    await client.query(`
    CREATE TABLE tasks(
        id SERIAL PRIMARY KEY,
        task text NOT NULL,
        complete boolean NOT NULL DEFAULT false,
        due_date DATE NOT NULL
    );
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "firstName" VARCHAR(255) NOT NULL,
        "lastName" VARCHAR(255) NOT NULL
    );
`)
    console.log("Tables are Created")
    }
client.connect();

rebuildDB().catch(console.error).finally(() => client.end())
