const express = require("express")  //importing express

const path = require("path") //installing path

const app = express() //initializing express


app.use(express.static(path.join(__dirname,"public"))) //serving public files from express

//getting a response from our app root url using GET 
app.get("/",(req,res)=>{
    res.send("Home, Hello Node")
})
app.get("/about",(req,res)=>{
    res.send("About Shecodes program")
})

app.get("/home",(req,res)=>{
    res.send("home")
})

app.get("/contact",(req,res)=>{
    res.send("This is my contact page")
})

app.patch("/home",(req,res)=>{
    res.send("home")
})

app.post("/home",(req,res)=>{
    res.send("home")
})



const port = 8080 //create a port

app.listen(port, console.log(`our server is running at port ${port} voila!`)) //app running at port 8080