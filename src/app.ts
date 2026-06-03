import express, { type Application, type Request, type Response } from "express"
import config from "./config";
import { logger } from "./middleware/logger";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import authRoutes from "./api/routers/auth.router"
// console.log('hello');
const app : Application = express()
app.use(logger)
app.use(express.json)

app.get("/", (req:Request, res:Response)=>{
    throw new Error ("Server is ")
    res.send('hello')
    // console.log(config.database_url);
})
app.use("/auth",authRoutes)
app.use(globalErrorHandler)

export default app