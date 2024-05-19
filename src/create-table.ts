import { getClient } from "./utils";

async function createtable() {
    const userParameter=`
    CREATE TABEL users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR NOT NULL
    )
    `;
    const client=getClient();
    (await client).query(userParameter);


    const TodoQuery=`
    CREATE TABLE todos(
        id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
    );
    `;
    (await client).query(TodoQuery);
    console.log("Table Created Successfully");
}

createtable();