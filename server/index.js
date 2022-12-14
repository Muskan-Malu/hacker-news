const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const userRouter = require('./routes/userRouter');
const connection = require('./config/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/", userRouter);

app.listen(5000, () => console.log("app is running"));