const express = require("express");
const studentRouter = require("./routes/student");
const bodyParser = require("body-parser");
const connect =require("./database/mongoose")


const app=express();
app.use(bodyParser.json());
app.use(studentRouter);

app.listen(8000, async()=>{
    console.log("app is running in port 8000");
    console.log("running the database connection");
    await connect();
});