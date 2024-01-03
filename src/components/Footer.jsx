import Copyright from "./Copyright"
import FooterList from "./FooterList"
import Logo from "./Logo"
import Newsletter from "./Newsletter"
import Social_Media from "./Social-Media"

function Footer() {
    return <>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Logo />
                    <Social_Media />
                </div>
                <div className="col-md-3">
                    <FooterList title="USEFUL LINKS" link1="Shopping Cart" link2="Wishlist" link3="Checkout" link4="Support" link5="" />
                </div>
                <div className="col-md-3">
                    <FooterList title="ABOUT US" link1="About" link2="Products" link3="Terms and conditions" link4="Help Center" link5="" />
                </div>
                <div className="col-md-3">
                    <Newsletter title="NEWSLETTER" text="Subscribe to get all new updates" />
                </div>
            </div>
        </div>
        <Copyright text="Copyright © Daxone. All Right Reserved." />
    </footer>
    </>
}
export default Footer