import express, { type Application, type Request, type Response } from "express"
// console.log('hello');
const app : Application = express()

app.get("/", (req:Request, res:Response)=>{
    res.send('hello')
})

export default app