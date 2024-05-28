// ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductCard.css";
const ProductDetail = () => {
  const { ProductId } = useParams(); // Get the product ID from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from your API using the product ID
    // Replace this with your actual API call
    fetch(`https://dummyjson.com/products/${ProductId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details", error));
  }, [ProductId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fo">
      <div className="col-md-6 col-sm-6 mb-10 ">
        <div className="card animated-border">
          <img src={product.thumbnail} alt="" className="card-img-top" />
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <button className="btn" type="submit">
            Add to cart
          </button>
          {/* Display other product details */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
