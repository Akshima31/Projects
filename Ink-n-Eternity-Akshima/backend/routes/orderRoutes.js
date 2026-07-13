const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

//================PLACE ORDER================

router.post("/place-order", async (req, res) => {

    try {

        const { customerId, customerName, items, totalAmount } = req.body;

        const newOrder = new Order({
            customerId, customerName, items, totalAmount 
        });

        await newOrder.save();

        res.status(201).json({
            message: "Order Placed Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// ================== GET ORDERS ==================

router.get("/:customerId", async (req, res) => {

    try {

        const orders = await Order.find({
            customerId: req.params.customerId
        }).sort({ createdAt: -1 });

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;