function Product(props) {
  return (
    <>
      <div className="col-md-3 product-card">
        <div className="image-container">
          <div className="sales-tag">{props.sale}</div>
          <img src={props.image} />
        </div>
        <div className="product-name">{props.product_name}</div>
        <h5 className="title">{props.title}</h5>
        <div className="price">${props.price}</div>
        <div className="atc-btn">
          <button className="btn btn-outline-danger">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
export default Product;
