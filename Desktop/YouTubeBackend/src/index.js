import dotenv from "dotenv";
import express from "express"
import connectDB from "./db/db.js"
const app=express();
dotenv.config({
    path :"./env"
})
// (async()=>{
//     try{
//           await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
//           app.on("error",()=>{
//             console.log("error: unable to connect",error);
            
//           })
//           app.listen(process.env.PORT,()={
//             console.log(`app is listen on port :${process.env.PORT}`)
//           })
//     }
//     catch(error)
//     {
//         console.error("error:",error)
//         throw error
//     }
// })