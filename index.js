const express = require("express");
const PORT = process.env.PORT || 5000;
const db = require("./configs/mongoose");
const cors = require("cors");
const bodyParser= require("body-parser");
const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/",require("./routes"));
app.get("/",(req,res)=>{
    return res.status(200).json({
        message : "wellcome"
    })
});

app.listen(PORT,(err)=>{
    if(err){
        console.log("error in running the server",err);
    }
    console.log("server is up and running on port",PORT);
});