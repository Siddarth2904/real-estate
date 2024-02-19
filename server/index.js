import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser())

app.listen(9000, () => {
    console.log("server running on port 9000!!")
})
app.use('/server/user', userRouter);
app.use('/server/auth', authRouter);
app.use('/server/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});