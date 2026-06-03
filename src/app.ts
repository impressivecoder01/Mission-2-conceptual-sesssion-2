import express, { type Application, type Request, type Response } from "express"
import config from "./config";
import { logger } from "./middleware/logger";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
// console.log('hello');
const app : Application = express()
app.use(logger)

app.get("/", (req:Request, res:Response)=>{
    throw new Error ("Server is ")
    res.send('hello')
    // console.log(config.database_url);
})
app.use(globalErrorHandler)

export default app