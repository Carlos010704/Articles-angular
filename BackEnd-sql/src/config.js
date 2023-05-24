import { config } from "dotenv"
config();

export default {
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    server: process.env.DB_SERVER || "",
    database: process.env.DB || "",
    port: process.env.PORT || 3000
}