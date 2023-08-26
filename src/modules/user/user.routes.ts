import { userController } from "./user.controller";

const express = require('express')
const router = express.Router()

router.get('/',userController.getUser)
router.post('/create' , userController.insertIntoDb)


export  const userRouter =router;