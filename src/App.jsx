import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import Banner_image from "./assets/banner-bg-1.png";
import Image_Text from "./assets/banner-1.png";
import Catagories from "./components/Catagories";
import AllCatagories from "./components/All-Catogories";
import TextImage from "./components/TextImage";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Banner
        image={Banner_image}
        title="Premium Home Decorator"
        link="https://google.com"
        link_text="LEARN MORE"
      />
      <Catagories
        title="Best Sell"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      />
      <TextImage
        image={Image_Text}
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        title="Winter Discount Up to 30%"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        button="SHOP NOW"
      />
      <AllCatagories
        title="All Products"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
      />
      <Footer />
      <ToTop />
    </>
  );
}

export default App;
