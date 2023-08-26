

import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDb =async(req:Request,res:Response)=>{
    try{
        const result = await userService.insertUSer(req.body)
        res.send({
            succes: true,
            message: "User created successfully!",
            data: result
        })
    }
    catch{}
}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAlluser();
        res.send({
            succes: true,
            message: "Succesfully Get the user!",
            data: result
        })
    }
    catch (err) {
        res.send(err)
    }
}


export const userController ={
getUser,
insertIntoDb
}