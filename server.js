const express=require('express')
const app=express()
app.listen('/',(req,res)=>{
    res.send("Hello Saii Varun M R from AWS Virtual Server");
})
app.listen(3000)