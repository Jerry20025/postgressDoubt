import { Client } from "pg";

export async function getClient(){
    const client=new Client("postgresql://neondb_owner:aJ95xAvrLyuk@ep-white-dust-a11wafhn.ap-southeast-1.aws.neon.tech/neondb?sslmode=require")
    await client.connect();
    return client;
}