import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import ProductDescription from "../ProductDescription/ProductDescription";
import Similar from "../Similar/Similar";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(""); 
  const [selectedSize, setSelectedSize] = useState(null); 
  const [selectedColor, setSelectedColor] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 


  const thumbnailsMap = {
    2: [
      product?.image,
      "https://5.imimg.com/data5/QQ/TX/MY-24405714/men-s-full-sleeves-t-shirt-250x250.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfd9IppiugWgOd1u3yS8z4U0UZ4b0ySF71A&s",
    ],
    3: [
      product?.image,
      "https://5.imimg.com/data5/SELLER/Default/2021/8/VX/VO/FQ/63239366/men-s-cotton-jacket-500x500.jpeg",
      "https://i.pinimg.com/736x/82/b2/1b/82b21bd15a47df80364cc7010b7aebeb.jpg",
    ],
    4: [
      product?.image,
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg",
      "https://m.media-amazon.com/images/I/618ln70FjTL._AC_UY1000_.jpg",
    ],
    1: [
      product?.image,
      "https://www.jiomart.com/images/product/original/rvjdb0ho3w/ardan-genuine-leather-laptop-office-bag-for-men-fits-upto-15-6-inch-laptop-macbook-product-images-orvjdb0ho3w-p601503474-0-202305142135.jpg?im=Resize=(420,420)",
      "https://m.media-amazon.com/images/I/61gjn9WlbBS._AC_UY300_.jpg",
    ],
    6: [
      product?.image,
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/ring/r/f/q/adjustable-1-rose-mkr147-ring-myki-original-imaghfvvhutztk54.jpeg?q=20&crop=false",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwodTSD5_HkhFxbDI3bbYt-2OFGo1PDlvEqKMp4xn1TxJ96BA_6Tq9jEleuAn3T5LsLI&usqp=CAU",
    ],
    10: [
      product?.image,
      "https://via.placeholder.com/150?text=Thumbnail+Y",
      "https://via.placeholder.com/150?text=Thumbnail+Z",
    ],
    8: [
      product?.image,
      "https://images-na.ssl-images-amazon.com/images/I/515SkXFJw+L._AC_UL600_SR600,600_.jpg",
      "https://piercedowl.com/cdn/shop/files/2024_0426Aloha13_8c469e22-7bc9-496e-8e55-49ec230bae6b.jpg?v=1715711854&width=533",
    ],
    11: [
      product?.image,
      "https://via.placeholder.com/150?text=Thumbnail+Y",
      "https://via.placeholder.com/150?text=Thumbnail+Z",
    ],
    15: [
      product?.image,
      "https://contents.mediadecathlon.com/p2755482/7d7191961e558ad264c00a6fde6af2ad/p2755482.jpg",
      "https://www.globalrepublic.in/cdn/shop/articles/winter_jackets_global.png?v=1668145552",
    ],
    16: [
      product?.image,
      "https://m.media-amazon.com/images/I/71+CyBHlM7L._AC_UY1000_.jpg",
      "https://m.media-amazon.com/images/I/81MzJF6Ac3L._AC_UY350_.jpg",
    ],
    17: [
      product?.image,
      "https://m.media-amazon.com/images/I/61-XR90gCmL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81tPk47mGqL._SY879_.jpg",
    ],
    20: [
      product?.image,
      "https://m.media-amazon.com/images/I/618CxMsF5EL._AC_SL1005_.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2022/11/TZ/LZ/NI/139855611/product-jpeg.jpg",
    ],

  };

  const thumbnailImages = thumbnailsMap[id] || [product?.image];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.image); 
        setIsLoading(false); 
      });
  }, [id]);


  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <span key={`full-${i}`} className="star">
              ⭐
            </span>
          ))}
        {halfStar && (
          <span key="half" className="star">
            ⭐
          </span>
        )}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <span key={`empty-${i}`} className="star empty">
              ☆
            </span>
          ))}
      </>
    );
  };

  
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="product-containers">
      <div className="product-images">
        <div className="thumbnail-container">
          <div className="thumbnail-list">
            {thumbnailImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onMouseOver={() => setMainImage(image)} 
                onClick={() => setMainImage(image)} 
              />
            ))}
          </div>
          <div className="chevron chevron-up">
            <i className="fa fa-chevron-up"></i> 
          </div>
          <div className="chevron chevron-down">
            <i className="fa fa-chevron-down"></i> 
          </div>
        </div>
        <img className="main-image" src={mainImage} alt={product.title} />
      </div>
      <div className="product-details">
        <p>Euphoria <i className="fa fa-chevron-right"></i> Shop <i className="fa fa-chevron-right"></i> {product.category}</p>
        <h1>{product.title}</h1>
        <div className="rating">
          <div className="stars">{renderStars(product.rating.rate)}</div>
          <span className="comments-icon">💬</span>
          <span>{product.rating.count} Comments</span>
        </div>
        <div className="size-selector">
          <div className="sizess">
            <h3>Select Size</h3>
            <h5>Size Guide →</h5>
          </div>
          <div className="sizes">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="colors">
          <h3>Colours Available</h3>
          <div className="color-options">
            {["black", "yellow", "pink", "maroon"].map((color) => (
              <div
                key={color}
                className={`color ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="actions">
          <button className="add-to-cart">Add to Cart</button>
          <p className="price">${product.price}</p>
        </div>
        <hr />
        <br />
        <div className="info">
          <div className="info-row">
            <div className="info-item">
              <span className="info-icon">✅</span>
              <span>Secure payment</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📏</span>
              <span>Size & Fit</span>
            </div>
          </div>
          <div className="info-row">
            <div className="info-item">
              <span className="info-icon">🚚</span>
              <span>Free shipping</span>
            </div>
            <div className="info-item">
              <span className="info-icon">↩️</span>
              <span>Free Shipping & Returns</span>
            </div>
          </div>
        </div>
      <ProductDescription />
          <Similar />
      </div>
    </div>
  );
};

export default ProductDetail;
