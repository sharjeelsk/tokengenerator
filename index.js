const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors")

//https://meet.google.com/ptt-adzn-gzo

//initializing app via express
const app = express()
const PORT = process.env.PORT || 3002  //taking the port from production if the app is on prod or else run it on 3002
app.use(bodyParser.json()) //to get the data from front end in json format
app.use(cors())


app.post(`/generateToken`,(req,res)=>{
//code here 



    let token ="98234kllkduf897234;kg8987324";
    res.status(200).json(token)
    
})

app.listen(PORT,(req,res,next)=>{
    console.log(`server started on ${PORT} just for Rahat Mam`)
})