const app = require("./src/app")
const mongoDB = require("./config/database")
require("dotenv").config()
mongoDB()
app.listen(3000,()=>{
    console.log("server is running on 3000");
})