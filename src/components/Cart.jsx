import cart_icon from "../assets/shopping-cart.png";
import search_icon from "../assets/search.svg";

function Cart() {
  return (
    <>
      <div className="cart-icon">
        <img src={cart_icon} /> (2) Items
      </div>
      <div className="search-icon">
        <img src={search_icon} />
      </div>
    </>
  );
}
export default Cart;
