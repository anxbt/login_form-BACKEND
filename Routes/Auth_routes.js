import express from 'express'
const router=express.router()


router.post('/register',(req,res,next)=>{
    res.send('register route')
})

router.post('/login',(req,res,next)=>{
    res.send('login route')
})

router.post('/refresh-token',(req,res,next)=>{
    res.send('refresh-token route')
})