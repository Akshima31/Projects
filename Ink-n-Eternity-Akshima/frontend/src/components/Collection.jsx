import React, {useContext} from "react";
import { FaBookReader  } from "react-icons/fa";
import books from "../data/books";
import { CartContext } from "../context/ContextProvider";
import {useNavigate } from "react-router-dom"

export default function Collection({genre, title}){
    const{dispatch}= useContext(CartContext);

    const filteredBooks= !genre || genre ==="all"? books : books.filter((book)=> book.genre.toLowerCase() === genre.toLowerCase());
    const navigate = useNavigate();
    const addToCart = (book) => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {

        alert("Please Login First");

        navigate("/login");

        return;
    }

    dispatch({
        type: "ADD_TO_CART",
        payload: book
    });

};
    return(
        <div className="collection">
            <h2 className="text">
                <i>{title || "Collection"}</i> <FaBookReader size={25} /></h2>
            <div className="row">
                {filteredBooks.map((book)=>(
                    <div key={book.id}>
                        <div className="card">
                            <img src={book.image} alt={book.title}
                            className="card-img"/>
                            <div className="card-body">
                                <h4>{book.title}</h4>
                                <p>₹{book.price}</p>

                                <button className="btn-cart" onClick={() => addToCart(book)}    >
                                    Add to Cart
                                </button>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

