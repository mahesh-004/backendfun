require("dotenv").config()
const express=require("express");
const app=express();
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.status(200).send("hello world!")

})

app.get("/twitter",(req,res)=>{
    res.status(200).send("mahesh@gmail.ccom");
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login at chai<\h1>")
})

app.listen(port,()=>{
    console.log(`listening on port no:${port}`)
})