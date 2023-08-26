import cors from 'cors'
import { Application } from 'express'
import { userRouter } from './modules/user/user.routes'
const express = require('express')
const app:Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extend:true}))

// app.use('/',((req,res)=>{
//     res.send('Hello world')
// }))
app.use('/user', userRouter)

export default app