import SocialMedia_Icons from "./SocialMedia-Icon";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Whatsapp from "../assets/whatsapp.png";
import Youtube from "../assets/youtube.png";

function SocialMedia() {
  return (
    <>
      <div className="social-container">
        <p>Follow us:</p>
        <ul>
          <SocialMedia_Icons image={Facebook} />
          <SocialMedia_Icons image={Twitter} />
          <SocialMedia_Icons image={Whatsapp} />
          <SocialMedia_Icons image={Youtube} />
        </ul>
      </div>
    </>
  );
}
export default SocialMedia;
