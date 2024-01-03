function TextImage(props) {
  return (
    <>
      <div className="text-image-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-block">
                <img src={props.image} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-block">
                <p>{props.subtitle}</p>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <button className="btn btn-outline-danger">
                  {props.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextImage;
