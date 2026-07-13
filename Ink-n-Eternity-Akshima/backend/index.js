const express = require("express");
const mongoose = require("mongoose")
const cors = require ("cors")
require("dotenv").config();
const orderRoutes = require("./routes/orderRoutes");

const authRoutes= require("./routes/authRoutes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

//MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb Connected")
})
.catch((err)=>{
    console.log(err);
});

//PORT
app.listen(process.env.PORT, ()=>{
    console.log(`Backend Running on ${process.env.PORT}`);
});
