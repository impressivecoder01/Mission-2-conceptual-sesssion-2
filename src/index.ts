import app from "./app"
import config from "./config";
import { initDB } from "./db";

const main = ()=>{
    initDB()
    app.listen(config.port,()=>{
        // console.log(config.database_url);
        console.log(`server is running on port ${config.port}`);
    })
}  
main()