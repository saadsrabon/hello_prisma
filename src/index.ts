import { PrismaClient } from "@prisma/client";
import app from "./app";

const port=5000

const prisma = new PrismaClient()


async function main(){
   // // const getAlluser= await prisma.user.findMany()
   // // console.log(getAlluser)
   // const postUser =await prisma.user.create({
   // data:{
   //        email:"saadsrabon@gmail.com",
   //        name:"saad"
   //    }
   // })
   // console.log(postUser)

   app.listen(port ,()=>{
    console.log('hello')
   })
}

main()