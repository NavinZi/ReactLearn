/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./Sigma_Logo.svg";

const url = "";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header style={{ color: "white", backgroundColor: "lightseagreen" }}>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark fixed-top">
          <div
            className="container-fluid"
            style={{ paddingLeft: "8%", paddingRight: "3%" }}
          >
            <a className="navbar-brand" onClick={()=>navigate("/")}>
              <img src={logo} alt={logo} width="70px" height="70px"></img>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-font me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link px-2 text-white HoverAnim" onClick={()=>navigate("/")}>
                    หน้าแรก
                  </a>
                </li>
                <li className="nav-item">
                  <a href={url} className="nav-link px-2 text-white HoverAnim ">
                    คอร์สเรียน
                  </a>
                </li>
                <li className="nav-item">
                  <a href={url} className="nav-link px-2 text-white HoverAnim ">
                    ข้อมูลผู้สอน
                  </a>
                </li>
                <li className="nav-item">
                  <a href={url} className="nav-link px-2 text-white HoverAnim ">
                    ติดต่อเรา
                  </a>
                </li>
              </ul>
              <form className="col-12 col-lg-2 mb-3 mb-lg-0 me-lg-3">
                <input
                  className="form-control"
                  type="search"
                  placeholder="ค้นหา..."
                  aria-label="Search"
                ></input>
              </form>
              <div className="text-start" style={{ fontFamily: "Mitr" }}>
                <button type="button" className="btn btn-outline-light me-2">
                  เข้าสู่ระบบ
                </button>
                  <button type="button" className="btn btn-warning" onClick={()=>navigate("/register")}>
                          สมัครเรียน
                        </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

const Carousel = () => {
  return (
    <div>
      <div className="container-fullwidth">
        <div style={{ backgroundColor: "aliceblue", marginBottom: "50px" }}>
          <div className="col-lg-6 col-md-8 m-auto">
            <div
              className="carousel slide"
              id="slider1"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <button
                  className="active"
                  data-bs-target="#slider1"
                  data-bs-slide-to="0"
                ></button>
                <button
                  className="active"
                  data-bs-target="#slider1"
                  data-bs-slide-to="1"
                ></button>
                <button
                  className="active"
                  data-bs-target="#slider1"
                  data-bs-slide-to="2"
                ></button>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    className="d-block w-100"
                    alt=""
                  ></img>
                  <div className="container">
                    <div className="carousel-caption">
                      <h1 style={{ textAlign: "left" }}>Why Sausage?</h1>
                      <p style={{ textAlign: "left" }}>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit
                      </p>
                      <p style={{ textAlign: "left" }}>
                        <a
                          className="btn btn-sm btn-primary"
                          href={url}
                          role="button"
                        >
                          Sign up today
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    className="d-block w-100"
                    alt=""
                  ></img>
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at
                      </p>
                      <p>
                        <a
                          className="btn btn-sm btn-primary"
                          href={url}
                          role="button"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.pexels.com/photos/6336/light-man-hand-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    className="d-block w-100"
                    alt=""
                  ></img>
                  <div className="container">
                    <div className="carousel-caption text-right">
                      <h1>One more for good measure.</h1>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at
                      </p>
                      <p>
                        <a
                          className="btn btn-sm btn-primary"
                          href={url}
                          role="button"
                        >
                          Browse gallery
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                data-bs-slide="prev"
                data-bs-target="#slider1"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                data-bs-slide="next"
                data-bs-target="#slider1"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img
              src="https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg"
              width="140"
              height="140"
              style={{ borderRadius: "50%" }}
            />
            <h2>BOOK DOWNLOAD</h2>
            <p>Click link below to download book</p>
            <p>
              <a className="btn btn-secondary" href="./Test.pdf" download>
                Download
              </a>
            </p>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: "lightseagreen" }}>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-lg-4 d-flex align-items-center">
              <span className="text-light">© Sigma Class Company, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-dark"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-dark " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    className="bi bi-line"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0zM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157zm.791-2.924h.562c.086 0 .155.07.155.156v3.486c0 .086-.07.155-.155.155h-.562a.156.156 0 0 1-.156-.155V4.918c0-.086.07-.156.156-.156zm3.863 0h.56c.087 0 .157.07.157.156v3.486c0 .086-.07.155-.156.155h-.561a.155.155 0 0 1-.04-.005h-.002a.168.168 0 0 1-.011-.004l-.005-.002-.007-.003a.066.066 0 0 1-.008-.004L9.6 8.54l-.01-.006-.001-.001a.154.154 0 0 1-.04-.039l-1.6-2.16v2.07a.155.155 0 0 1-.155.156h-.561a.156.156 0 0 1-.156-.155V4.918c0-.086.07-.156.156-.156H7.8l.005.001h.006l.003.001h.006l.01.003h.002l.002.001.01.003.005.002a.09.09 0 0 1 .009.004l.003.001.002.001a.113.113 0 0 1 .013.008l.003.002.005.003v.001c.002 0 .003.002.004.003a.092.092 0 0 1 .008.006l.003.003a.17.17 0 0 1 .023.026L9.52 6.99V4.918c0-.086.07-.156.156-.156zm3.815.717c0 .086-.07.156-.155.156H11.81v.59h1.525c.086 0 .155.07.155.155v.561c0 .086-.07.156-.155.156H11.81v.59h1.525c.086 0 .155.07.155.155v.561c0 .086-.07.156-.155.156h-2.242a.155.155 0 0 1-.11-.045l-.002-.003a.155.155 0 0 1-.044-.107V4.918c0-.042.017-.08.043-.107l.003-.003.001-.001a.155.155 0 0 1 .109-.045h2.242c.086 0 .155.07.155.156v.561z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

function Main() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Body />
      <Footer />
      <Body />
    </div>
  );
}

export default Main;
