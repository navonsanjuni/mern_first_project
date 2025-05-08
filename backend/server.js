// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import ProdutRoute from './routes/product.route.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", ProdutRoute);

app.listen(PORT, () => {
    connectDB();
    console.log("MongoDB connected");
    console.log("Server started at http://localhost:"+PORT);
});

//BROiE3qniiz0TMrC