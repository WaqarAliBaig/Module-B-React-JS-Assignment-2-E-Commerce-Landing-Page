function Newsletter(props) {
  return (
    <>
      <div className="newsletter">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="newsletter-form">
          <input type="text" placeholder="Enter your email" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-search"
            >
              <circle cx="10" cy="10" r="6"></circle>
              <line x1="20" y1="20" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
export default Newsletter;
