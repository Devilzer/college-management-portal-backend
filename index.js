const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./configs/mongoose");

app.listen(PORT,(err)=>{
    if(err){
        console.log("error in running the server",err);
    }
    console.log("server is up and running on port",PORT);
});