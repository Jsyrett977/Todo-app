const { client } = require('./index.js')

const rebuildDB = async () => {
    await client.query(`
        DROP TABLE IF EXISTS tasks;
    `)

    console.log('Creating Tables');

    await client.query(`
    CREATE TABLE tasks(
        id SERIAL PRIMARY KEY,
        task text NOT NULL,
        complete boolean NOT NULL DEFAULT false
    );
`)
    console.log("Tables are Created")
    }
client.connect();

rebuildDB().catch(console.error).finally(() => client.end())
