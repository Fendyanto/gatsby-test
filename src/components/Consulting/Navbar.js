import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md navbar-light nav-style3">
        <div className="container-fluid">
          <Link to="/consulting" onClick={toggleNavbar} className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="#home"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  to="#whyus"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Why Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#features"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Services
                </Link>
              </li>


              <li className="nav-item">
                <Link
                  to="#portfolio"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Portfolio
                </Link>
              </li>


              <li className="nav-item">
                <Link
                  to="#testimonials"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Happy Client
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#pricing"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Prices
                </Link>
              </li>
  
              <li className="nav-item">
                <Link
                  to="#team"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Team
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  to="#blog"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="others-options d-flex align-items-center">
            <div className="option-item">
              <Link to="https://wa.me/6285945123233?text=Halo ReStat, Aku Mau Konsultasi">Gratis Konsultasi</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
