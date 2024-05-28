import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import useState from 'react'; 



const productCard = (props) => {
  const [showFullDescription] = useState(false);

  const truncateDescription = (description) => {
    const maxLength = 100;
    if (description.length <= maxLength) {
      return description;
    }
    return showFullDescription
      ? description
      : `${description.slice(0, maxLength)}...`;
  };

  const productsData = props.propsData.map((productData) => (
    <div className="col-md-5 col-sm-6 mb-5 " key={productData.id}>
      <div className="card animated-border">
        <img src={productData.thumbnail} alt="" className="card-img-top" />
        <div className="card-body justify-content-center">
          <h3 className="card-title">Title: {productData.title}</h3>
          <p className="card-text">Description: {truncateDescription(productData.description)}</p>
          <p className="card-text">Discount Percentage: {productData.discountPercentage} %</p>
          <p className="card-title">Price: {productData.price} EGP</p>
        </div>
        <button>Details</button>
      </div>
    </div>
  ));

  return (
    <div className="container text-center">
      <div className="row equal-height justify-content-center">{productsData}</div>
    </div>
  );
};



export default productCard;