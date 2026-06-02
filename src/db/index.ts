import { neon } from '@neondatabase/serverless';
import config from '../config';


export const sql = neon(config.database_url)

export const initDB = async()=>{
    await sql `
    
    `
    console.log('database connected');
}