const express=require("express")
const mongoose=require("mongoose")
const loginRouter=require('./Routes/login_controller.js')
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/Ecomm').then(()=>{
    console.log("connet to database")
}).catch((err)=>{
    console.log(err)
})


app.use("/",loginRouter)


app.listen(3002,()=>{
console.log("server is listning")
})