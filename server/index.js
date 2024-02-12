import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

const app = express();

app.listen(9000, () => {
    console.log("server running on port 9000!!")
})
app.use('/server/user', userRouter);