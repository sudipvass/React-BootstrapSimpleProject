import "../../style/navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
// import logo from "../../assets/images/munaLogo.png";
import logo from "../../assets/images/munaLogo.png"

export default function NavBar() {
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar-container d-flex">
      <nav className="navbar navbar-expand-lg  fixed-top d-flex">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="company logo" width={60} height={60} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
             <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="company logo" width={60} height={60} />
              </h5>
              <button
                type="button"
                className=" btn btn-close  "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul
                className="navbar-nav nav d-inline-flex flex-1 flex-grow-1 justify-content-between pe-3  fw-medium"
                style={{ fontSize: "18px" }}
              >
                <li className="nav-item">
                  <NavLink
                    
                    className="nav-link active"
                    activeClassName="active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/about"
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/service"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="dropdownId1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Destinations
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdownId1">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        USA
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        UK
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Canada
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Denmark
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        id="dropdownEurope"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        to="#"
                      >
                        Study in Europe
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownEurope"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            France
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Croatia
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="dropdownId2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="dropdownId2">
                    <Link className="dropdown-item" to="#">
                      IELTS
                    </Link>
                    <Link className="dropdown-item" to="#">
                      PTE
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Our Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span className="Navadded-items d-flex justify-content-center align-items-center ">
          <span>
            <button
              className="btn btn-light infoOffcanvas-button-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#Id1"
              aria-controls="Id1"
            >
              {/* <i className="bi bi-menu-button-wide"></i> */}
              <span className="navbar-toggler-icon" />
            </button>
          </span>
          <span>
            <NavLink
              role="button"
              className="btn  mx-5 profile-btn"
              to="https://www.munaleduhub.com/assets/PDF/MUNAL%20EDUCATION%20HUB%20(cOMPANY%20PROFILE).pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#ee5d0e" }}
            >
              Company Profile
            </NavLink>
          </span>
        </span>
      </nav>
      <div>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="Id1"
          aria-labelledby="Enable both scrolling & backdrop"
        >
          <div className="offcanvas-header d-flex justify-content-between">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              <img src={logo} alt="company logo" width={60} height={60} />
            </h5>
            <button
              type="button"
              className="close-button "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="bi bi-x fs-3 "></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <hr className="horizontal_bar opacity-50 border border-warning border-1" />
            <div>
              <div className="contact-list mb-30">
                <p className="h5 "style = {{color:"#14176c"}}>Address</p>
                <p className="mb-3"style={{color:"#3e4073"}}>New Baneshwor,Kathmandu,Nepal</p>
              </div>
              <div className="contact-list mb-30">
                <p className="h5 "style = {{color:"#14176c"}}>Phone Number </p>
                <p className="mb-3"style={{color:"#3e4073"}}>01-5920019</p>
              </div>
              <div className="contact-list mb-30">
                <p className="h5 "style = {{color:"#14176c"}}>Email Address</p>
                <p className="mb-3"style={{color:"#3e4073"}}>munaleducationhub@gmail.com</p>
              </div>

              <div className="contact-list mb-3-0">
                <Link
                  role="button"
                  className="btn    profile-btn"
                  href="https://www.munaleduhub.com/assets/PDF/MUNAL%20EDUCATION%20HUB%20(cOMPANY%20PROFILE).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#ee5d0e" }}
                >
                  Company Profile
                </Link>
              </div>
              <div className="offCanvas__social-icon ">
                <Link
                  to="https://www.facebook.com/profile.php?id=61555270616613"
                  target="_blank"
                  className="social-icon"
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to="_blank" 
                target="_blank"
                className="social-icon "
                >
                  <i className="bi bi-twitter bg-light "></i>
                  
                </Link>

                <Link
                  to="https://www.instagram.com/munaleducation/"
                  target="_blank"
                  className="social-icon"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
