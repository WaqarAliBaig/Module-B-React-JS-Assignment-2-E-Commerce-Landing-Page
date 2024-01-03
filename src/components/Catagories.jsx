import Product from "./Product";
import Image1 from "../assets/pro-hm1-1.png";
import Image2 from "../assets/pro-hm1-2.png";
import Image3 from "../assets/pro-hm1-3.png";
import Image4 from "../assets/pro-hm1-4.png";

function Catagories(props) {
  return (
    <>
      <div className="catagories-home">
        <div className="container">
          <div className="row">
            <div className="catagories-header">
              <h3>{props.title}</h3>
              <p>{props.text}</p>
            </div>
          </div>
          <div className="row">
            <Product
              sale="NEW"
              image={Image1}
              product_name="Chair"
              title="Golden Easy Spot Chair."
              price="210"
            />
            <Product
              sale="-30%"
              image={Image2}
              product_name="Chair"
              title="Golden Easy Spot Chair."
              price="250"
            />
            <Product
              sale="Stock Out"
              image={Image3}
              product_name="Chair"
              title="Golden Easy Spot Chair."
              price="210"
            />
            <Product
              sale="SALE"
              image={Image4}
              product_name="Chair"
              title="Golden Easy Spot Chair."
              price="190"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catagories;
