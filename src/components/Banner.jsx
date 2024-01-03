function Banner(props) {
  return (
    <>
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <img src={props.image} style={{ width: "100%" }} />
            <div className="banner-content">
              <h3>{props.title}</h3>
              <a href={props.link}>{props.link_text}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
