const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
require('dotenv').config({path:path.resolve(__dirname,'.env')});
const connectionString = process.env.MONGODB_URI;


const app=express()


mongoose.connect(connectionString)
    .then(()=>{
        console.log('connected to db successfully');
        const PORT=process.env.PORT;
        app.listen(PORT,()=>{
            console.log(`Server running on ${PORT} successfully`);
        })
    })
    .catch((err)=>console.log(`Error: ${err.message}`));

