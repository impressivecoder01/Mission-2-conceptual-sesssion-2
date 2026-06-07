import dotenv from "dotenv"

dotenv.config({quiet:true})
const config={
    port: process.env.PORT as string,
    database_url: process.env.DATABASE_URL as string,
    node_env: process.env.NODE_ENV as string,
    jwt_secret: process.env.JWT_SECRET as string,
    refresh_secret: process.env.REFRESH_SECRET as string,
}
export default config