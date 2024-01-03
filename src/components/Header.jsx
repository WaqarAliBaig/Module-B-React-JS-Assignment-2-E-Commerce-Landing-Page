import Logo from "./Logo";
import Navigation from "./Menu";
import Cart from "./Cart";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-3 col-lg-3 ">
              <Logo />
            </div>
            <div className="col-xl-7 col-lg-6">
              <Navigation />
            </div>
            <div className="col-xl-2 col-lg-3 position-relative">
              <Cart />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
