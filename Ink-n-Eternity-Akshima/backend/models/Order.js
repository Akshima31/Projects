const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerId:{type:String,required:true},

    customerName:{ type:String, required:true },

    items:{type:Array,required:true },

    totalAmount:{type:Number,required:true },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model(
    "Order",
    orderSchema
);