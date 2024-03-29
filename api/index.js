import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRoutes from './routers/user.route.js';
import authRoutes from'./routers/auth.route.js';

dotenv.config();
mongoose.
connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDb');
})
.catch((error)=>{
    console.log(error);
});


const app=express();

app.listen(3000,()=>{
    console.log('Server Listening On Port 3000');

});
app.use("/api/user", userRoutes);
app.use("/api/auth",authRoutes);
