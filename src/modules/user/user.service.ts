import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient()

// get all user at once
const getAlluser =async()=>{

   
    const result = await prisma.$queryRaw`select * from users`
    return result;
  
}
const insertUSer =async(data:User):Promise<User>=>{
    const result =await prisma.user.create({
        data,
    })
    return result
}

export const userService={
    getAlluser
    ,
    insertUSer
}