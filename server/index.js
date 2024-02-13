import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

const app = express();
app.use(express.json());
app.use(cors());

app.listen(9000, () => {
    console.log("server running on port 9000!!")
})
app.use('/server/user', userRouter);
app.use('/server/auth', authRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})