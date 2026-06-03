import { sql } from "../../db";
import type { RUser } from "../../types";

class AuthService{
    async createUser(user: RUser & {password: string}){
        const{name,email,age,role} = user;
        const res = await sql`
            INSERT INTO users
        `
    }
}