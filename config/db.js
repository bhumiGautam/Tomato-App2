import mongoose from "mongoose";


 export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://bhumigautam25:7759887117@cluster0.r5smjxh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}