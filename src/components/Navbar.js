import NavbarIcon from "../tasks.png";

const Navbar = () => {
  return (
    <>
      <nav
        style={{ backgroundColor: "lightgreen" }}
        class="navbar navbar-default fixed-top"
      >
        <div class="container">
          <a className="navbar-brand" href="/">
            <img
              src={NavbarIcon}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            TIme Cluster
          </a>
          <form class="d-flex">
            <button
              style={{ backgroundColor: "orange", color: "white" }}
              class="btn"
              type="button"
            >
              Login/Signup
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;