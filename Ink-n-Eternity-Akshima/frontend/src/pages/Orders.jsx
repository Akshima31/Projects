import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const user = JSON.parse(
                    localStorage.getItem("user")
                );

                const res = await axios.get(
                    `http://localhost:8081/api/orders/${user.id}`
                );

                setOrders(res.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchOrders();

    }, []);

    return (
        <>
            <Header />

            <div className="orders-container">

                <h1 className="orders-title">
                    Order History
                </h1>

                {orders.length === 0 ? (

                    <div className="no-orders">

                    <h2>No Orders Found </h2>

                     <p>Place your first order to see it here.</p>

                     </div>         

                ) : (

                    orders.map((order) => (

                        <div
                            key={order._id}
                            className="order-card"
                        >

                            <h3>
                                Order Date :
                                {" "}
                                {new Date(
                                    order.createdAt
                                ).toLocaleDateString("en-IN")}
                            </h3>

                            <p>
                                Total Amount :
                                ₹{order.totalAmount}
                            </p>

                            <h4>Books:</h4>

                            {order.items.map((item) => (

                                <div
                                    key={item.id}
                                    className="order-item"
                                >

                                    <span>
                                        {item.title}
                                    </span>

                                    <span>
                                        x {item.quantity}
                                    </span>

                                </div>

                            ))}

                        </div>

                    ))

                )}

            </div>
        </>
    );
}