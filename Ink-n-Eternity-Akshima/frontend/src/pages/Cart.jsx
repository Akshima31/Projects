import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import { totalItem, totalPrice } from "../context/CartReducer";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import axios from "axios";

export default function Cart() {

    const { cart, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handlePlaceOrder = async () => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {

        alert("Please Login First");

        navigate("/login");


        return;
    }

    try {

        const totalAmount = cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

        const res = await axios.post(
            "http://localhost:8081/api/orders/place-order",
            {
                customerId: user.id,
                customerName: user.name,
                items: cart,
                totalAmount
            }
        );

        alert("Order Placed Successfully");

        dispatch({
            type: "Clear"
        });

        navigate("/orders");

    } catch (error) {

        alert(
            error.response?.data?.message ||
            "Order Failed"
        );
    }
};

    return (
        <>
        <Header />
        <div className="cart-page">

            <div className="container">

                <div className="row">

                    {/* Left Side - Cart Items */}

                    <div>
                        <h2 className="cart-title">
                            Shopping Cart <BsCart size={26}/> 
                        </h2>

                        {cart.length === 0 ? (

                            <h4 className="empty-cart">
                                Your Cart is Empty 
                            </h4>

                        ) : (

                            cart.map((item) => (

                                <div
                                    className="cart-card"
                                    key={item.id}
                                >

                                    <div className="cart-body">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />

                                        <div>

                                            <h4 className="book-title">
                                                {item.title}
                                            </h4>

                                            <p className="book-price">
                                                ₹{item.price}
                                            </p>

                                        </div>

                                        <div className="d-flex align-items-center">

                                            <button
                                                className="qty-btn"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "Decrease",
                                                        id: item.id
                                                    })
                                                }
                                            >
                                                -
                                            </button>

                                            <span className="qty">
                                                {item.quantity}
                                            </span>

                                            <button
                                                className="qty-btn"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "Increase",
                                                        id: item.id
                                                    })
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                        <button
                                            className="remove-btn"
                                            onClick={() =>
                                                dispatch({
                                                    type: "Remove",
                                                    id: item.id
                                                })
                                            }
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                    {/* Right Side - Bill Summary */}

                    <div className="col-md-4">

                        <div className="bill-card">

                            <h3>Bill Summary</h3>

                            <hr />

                            <h5>
                                Total Items :
                                {" "}
                                {totalItem(cart)}
                            </h5>

                            <h5>
                                Total Price :
                                {" "}
                                ₹{totalPrice(cart)}
                            </h5>

                            <button className="place-btn" onClick={handlePlaceOrder}>
                                Place Order
                            </button>

                            <button
                                className="clear-btn"
                                onClick={() =>
                                    dispatch({
                                        type: "Clear"
                                    })
                                }
                            >
                                Clear Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>

        </>
    );
}
