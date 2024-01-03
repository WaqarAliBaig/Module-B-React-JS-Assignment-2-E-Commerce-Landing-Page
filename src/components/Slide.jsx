import hm1_bg_1 from "../assets/hm1-bg-1.png";

function Slide(props) {
  return (
    <>
      <div className={"carousel-item " + props.active}>
        <img src={hm1_bg_1} className="d-block w-100" />
        <div className="carousel-caption d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={props.image} className="d-block w-100" />
              </div>
              <div className="content col">
                <h5>{props.subtitle}</h5>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button className="btn btn-outline-danger">{props.button}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slide;
