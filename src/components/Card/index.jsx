import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({product}) => {

  const [favorite, setFavorite] = useState(false);
  const heart = <FontAwesomeIcon icon={favorite ? faHeartSolid : faHeart } />
  
  return (
    <>
    <div className="card">
    <Link to={`/product/${product.id}`}>
      <img
        src={`https://m.media-amazon.com/images/I/${product.productModels[0].images[0]}._AC_SR375,375_.jpg`}
        alt={product.name}
      />
      <hr />
    </Link>
      <div className="card-info">
    <Link to={`/product/${product.id}`}>
        <h2>{`$ ${product.price}`}</h2>
        <p>{product.name}</p>
    </Link>
        <span onClick={() => setFavorite(!favorite)}>{heart}</span>
      </div>
    </div>
    </>
  );
};

export default Card;
