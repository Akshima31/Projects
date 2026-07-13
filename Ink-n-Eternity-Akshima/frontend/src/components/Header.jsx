import React, { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import { FaBookOpen } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {CartContext} from '../context/ContextProvider';
import '../index.css';

function Header() {
   const {cart, dispatch} = useContext(CartContext);

   const navigate = useNavigate();

const user = JSON.parse(
    localStorage.getItem("user")
);

const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");
     dispatch({type: "Clear" })
                                

};
    return (
        <div className="navbar-custom">

            <h2 className="logo ">
               <u><FaBookOpen size={25} /> Ink N Eternity <FaBookOpen size={25} /> </u>
            </h2>

            <div className="nav">

                 <Link to="/" className="nav-link-custom"> 
                    Home 
                 </Link> 
            <div className="dropdown">
   <button className="dropbtn">
      Genre ▼
   </button>

   <div className="dropdown-content">
      <Link to="/genre/fantasy">Fantasy</Link>

      <Link to="/genre/romance">Romance</Link>

      <Link to="/genre/dark romance">Dark Romance</Link>

      <Link to="/genre/thriller">Thriller</Link>

      <Link to="/genre/self-help">Self Help</Link>

   </div>
</div>

                <Link to="/cart" className="nav-link-custom " >
                    <BsCart /> 
                     {cart.length}
                </Link>

                { user ? (
        <>   
            <Link to="/orders" className="nav-link-custom " >
                    Orders 
           </Link>
            <span className="username">
                Welcome, {user.name}
            </span>

            <button
                className="btn"
                onClick={handleLogout}
            >
                Logout
            </button>
        </>
    ) : (
        <>
            <Link
                to="/login" className="btn"
            >
                Login
            </Link>

            <Link
                to="/signup"className="btn"
            >
                Sign Up
            </Link>
        </>
    )
}

            </div>

        </div>
    );
};

export default Header;