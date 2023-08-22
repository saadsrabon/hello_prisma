import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient()


async function main(){
   // const getAlluser= await prisma.user.findMany()
   // console.log(getAlluser)
   const postUser =await prisma.user.create({
   data:{
          email:"saadsrabon@gmail.com",
          name:"saad"
      }
   })
   console.log(postUser)
}

main()