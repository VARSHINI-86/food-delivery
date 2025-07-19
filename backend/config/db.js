import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aasthanuix:Welcome1212@cluster0.unkexcd.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}