const mongoose = require("mongoose");
const url="mongodb://127.0.0.1:27017/Human_Resource";

const connect = async () =>{
    try {
        const client = await mongoose.connect(url)
      
        console.log("connection to db succesfull")
        return client;
    } catch (error) {
        console.log("err in connection via mongoose");
    }
}

module.exports=connect;
