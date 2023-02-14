const express=require('express')
const mongoose=require('mongoose')

const app=express()
const router=require('./routes/book-routes')

//Middlewares
app.use(express.json())
app.use("/books",router) 

mongoose
.connect(
    "mongodb+srv://admin:y10giKE7NVphkSLE@cluster0.f7nzjj6.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err))


