import up_arrow from "../assets/up-arrow.png"

function ToTop() {
  return (
    <>
      <div className="to-top">
        <a href="#"><img src={up_arrow} width={10} /></a>
      </div>
    </>
  );
}
export default ToTop;
