import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../redux/productReducer";
import { useParams } from "react-router";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const SingleProduct = () => {

  const dispatch = useDispatch();
  let {id} = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, []);

  const productDetail = useSelector(state => state.products.productDetail)

  const [modelId, setModel] = useState(0);
  const [img, setImg] = useState(null);

  useEffect(()=>{
    setImg(productDetail?.productModels[0]?.images[0])
  }, [productDetail])

  const stars = Array(5)
    .fill(0)
    .map((v, i) => (
      <FontAwesomeIcon key={i} icon={i < 4 ? faStarSolid : faStar} />
    ));

  const selectModel = id => {
    setModel(id)
    setImg(productDetail.productModels[id].images[0]);
  }


  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container single_product">
          <div className="name">
            <h1>
              <a href="?">{productDetail.brand}</a> {productDetail.name}
            </h1>
          </div>
          <div className="stars">{stars}</div>
          <div className="form">
            <form>

              <h3>{productDetail.price} $</h3>

              <div className='selectWrapper'>

              <select id='model' onChange={(e)=>selectModel(e.target.value)}>
                {productDetail.productModels.map((model, i) => (
                  <option key={i} value={i}>{model.color}</option>
                ))}
              </select>

              </div>

              <select id='size'>
                <option>size 36</option>
                <option disabled>size 37</option>
                <option disabled>size 38</option>
                <option>size 39</option>
                <option>size 40</option>
                <option disabled>size 41</option>
                <option>size 42</option>
                <option>size 43</option>
              </select>

              <p>{productDetail.description}</p>

              <button>ADD TO CART</button>

            </form>
          </div>
          <div className="thumbnails">
            {productDetail.productModels[modelId]?.images.map(( imageId ) => (
              <div
                key={imageId}
                className={img === imageId ? "selected" : ""}
                onMouseEnter={() => setImg(imageId)}
              >
                <img
                  src={`https://m.media-amazon.com/images/I/${imageId}._AC_SR100,60_.jpg`}
                  alt={productDetail.name}
                />
              </div>
            ))}
          </div>
          <div className="image">
            <img
              src={`https://m.media-amazon.com/images/I/${img}._AC_SR700,525_.jpg`}
              alt={productDetail.name}
            />
          </div>
          <div className="reviews"></div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
