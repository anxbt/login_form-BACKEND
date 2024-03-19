import express from 'express';
import createError from 'http-errors';


const app=express()
const PORT=8080

app.listen(PORT,()=>console.log(`port is runing on ${PORT}`))

app.get('/',(req,res,next)=>{
    res.send("my server")
})

// app.use(function (req, res, next) {
//     if (!req.user) return next(createError(401, 'Please login to view this page.'))
//     next()
//   })

app.use(async(req,res,next)=>{
    next(createError.NotFound("this route doesnt exist"))
})