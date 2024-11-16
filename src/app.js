const express = require("express");
const app = express();

// this will only handle get calls to /users
//can also use ?,+,* in between the routes 
app.get("/user",(req,res)=>{
    res.send({username : "Ashish",age:22});
})

app.post("/user",(req,res)=>{
    res.send("Successsfully stored data in the DB");
})

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully")
})

app.put("/user",(req,res)=>{
    res.send("completed all")
})


// this will match all the HTTP method API calls
app.use("/test",(req,res)=>{
    res.send("Hello from the server");
})

app.listen(3000,()=>{
    console.log("Success");
})