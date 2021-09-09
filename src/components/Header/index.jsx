import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, loggedUser } from "../../redux/userReducer"
import { getProducts } from '../../redux/productReducer'
import "./style.css";

const Header = () => {
  let [loading, setLoading] = useState(false);
  let [cartItems, setCartItems] = useState(4);
  let [inputValue, setInputValue] = useState("");

  // isLoggedHook
  useEffect(() => {
    dispatch(loggedUser());
  }, [])

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const Search = () => {
    setLoading(true);
    dispatch(getProducts(inputValue))
    setTimeout(() => setLoading(false), 500);
  };

  const dummyLogin = () => {}

  return (
    <header>

      <Link className='zappas' to='/'>
      <h1>ZAPPAS</h1>
      </Link>

      <form onSubmit={(e)=>{e.preventDefault() ; Search()}} >
        <div className="search">
          <FontAwesomeIcon
            icon={loading ? faSpinner : faSearch}
            spin={loading}
          />
          <input type="text" palceholder="search..." onChange={(e) => setInputValue(e.target.value)} />
        </div>
      </form>

      <div>
        {user.id ? (
          <span>

            <span className='userInfo'>
              Hi, {user.firstName}!
            </span>

          <button onClick={dummyLogin}>
          <FontAwesomeIcon
            icon={faShoppingCart}
          />
          {cartItems && <span>{cartItems}</span>}
          </button>
          / <a href='#' onClick={()=>dispatch(logoutUser())}>Logout</a>
          </span>
        ) : (
          <span>
            <Link to='/login'>
            <a href="#">Login</a>
            </Link>
             / 
            <Link to='/register'>
            <a href="#">Register</a>
            </Link>
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
