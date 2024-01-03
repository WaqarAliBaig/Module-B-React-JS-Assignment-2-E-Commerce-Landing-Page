import MenuItem from "./MenuItem";

function Navigation() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <MenuItem link="Home" />
          <MenuItem link="Shop" />
          <MenuItem link="Mens" />
          <MenuItem link="Pages" />
          <MenuItem link="Blog" />
          <MenuItem link="Contact" />
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
