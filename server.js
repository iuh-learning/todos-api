require('dotenv').config();
const express = require('express');
const cors=require("cors");
const connectDB = require('./config/connectDB');
const todosRouter = require('./routers/todos');

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(express.json());

app.use(cors(corsOptions)) // Use this after the variable declaration
connectDB();

app.use('/api/v1/todos', todosRouter);

app.listen(3000, () => {
    console.log(`Server Started at port ${PORT}`)
})