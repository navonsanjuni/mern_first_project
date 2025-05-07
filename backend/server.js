// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';

const app = express();
dotenv.config();

app.get("/products", (req, res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("MongoDB connected");
    console.log("Server started at http://localhost:5000");
});

//BROiE3qniiz0TMrC