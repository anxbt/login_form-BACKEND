import express from 'express';
import createError from 'http-errors';
import authRoute from './Routes/Auth_routes'

const app=express()
const PORT=8080

app.use('/auth',authRoute)


app.listen(PORT,()=>console.log(`port is runing on ${PORT}`))

app.get('/',(req,res,next)=>{
    res.send("my server")
})


app.use(async(req,res,next)=>{

    next(createError.NotFound("this route doesnt exist"))
})