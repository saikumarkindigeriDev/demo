const express=require("express") 


const app=express(); 


app.get("/",(req,res)=>{
    res.send("Done Bro")
})

app.listen(7000,()=>{
    console.log("Server is Running")
})