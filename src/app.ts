import express, { type Application, type Request, type Response } from "express"
import config from "./config";
import { logger } from "./middleware/logger";
// console.log('hello');
const app : Application = express()
app.use(logger)

app.get("/", (req:Request, res:Response)=>{
    res.send('hello')
    // console.log(config.database_url);
})

export default app