import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
function Header({ headerToggler, setHeaderToggler }) {
  const [hClass, setHclass] = useState(false);

  //Pomocu ovog koda header mijenja pozadinu onScroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHclass(true);
    } else {
      setHclass(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <header className={hClass ? "active-header" : "default-header"}>
        <div className="header-content">
          <div className="header-logo">
            <a className="sticky" href="index.html">
              <img
                width="114"
                height="79"
                src="https://sescg.me/assets/img/logo/logo.webp"
                alt="tekst"
              />
            </a>
            <Navbar expand="lg">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto ">
                    <Nav.Link to="/" id="home" className="text-light">
                      POČETAK
                    </Nav.Link>
                    <Nav.Link to="/onama" id="onama" className="text-light">
                      O NAMA
                    </Nav.Link>
                    <Nav.Link to="/vijesti" id="vijesti" className="text-light">
                      VIJESTI
                    </Nav.Link>
                    <Nav.Link
                      to="/takmicenja"
                      id="takmicenja"
                      className="text-light"
                    >
                      TAKMIČENJA
                    </Nav.Link>
                    <Nav.Link to="/igrice" id="igrice" className="text-light">
                      IGRICE
                    </Nav.Link>
                    <Nav.Link
                      to="/partneri"
                      id="partneri"
                      className="text-light"
                    >
                      PARTNERI
                    </Nav.Link>
                    <Nav.Link to="/kontakt" id="kontakt" className="text-light">
                      KONTAKT
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <button className="header-btn">
            <div className="btn-img">
              Uloguj se
              <img
                src="https://sescg.me/assets/img/icon/arrrow-icon2.webp"
                alt="X"
              ></img>
            </div>
          </button>

          {!headerToggler && (
            <div className="hidden-menu" onClick={() => setHeaderToggler(true)}>
              <div className="hr"></div>
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
          )}
        </div>
      </header>
      {headerToggler && (
        <div className="hamburger-open">
          <span className="toggler" onClick={() => setHeaderToggler(false)}>
            X
          </span>
          <div className="hambuerger-menu">
            <ul>
              <Router>
                <li>
                  <Link to="/">Početak</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/onama">O nama</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/vijesti">Vijesti</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/takmicenja">Takmicenja</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/igrice">Igrice</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/partneri">Partneri</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
                <div className="hamburger-hr"></div>
                <li>
                  <Link to="/ulogujse">Uloguj se</Link>
                </li>
                <div className="hamburger-hr"></div>
              </Router>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
