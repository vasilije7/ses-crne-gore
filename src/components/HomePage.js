import React from "react";
import Header from "./Header";
import ListaVijesti from "./ListaVijesti";
import ListaTakmicenja from "./ListaTakmicenja";
import Footer from "./Footer";

function HomePage({ headerToggler, setHeaderToggler }) {
  return (
    <div className="HomePage">
      <div>
        <div id="top"></div>
        <section className="upper-section">
          <Header
            headerToggler={headerToggler}
            setHeaderToggler={setHeaderToggler}
          />
          <img
            alt="x"
            className="main-img"
            src="https://sescg.me/assets/img/bg/hero-position-img.webp"
          ></img>
          <div className="main-title">
            <h1>SAVEZ ELEKTRONSKIH</h1>
            <br></br>
            <h1 id="scd-h1">SPORTOVA CRNE GORE</h1>
            <p>Dobrodošli u svijet gejminga</p>
            <button className="main-btn">
              <div className="btn-img">
                Popularne igrice
                <img
                  id="main-img"
                  src="https://sescg.me/assets/img/icon/arrrow-icon2.webp"
                  alt="X"
                ></img>
              </div>
            </button>
          </div>
        </section>
        <section className="lower-section">
          <h2>NAJNOVIJE VIJESTI</h2>
          <ListaVijesti />
          <h2>AKTUELNA TAKMICENJA</h2>
          <ListaTakmicenja />
          <div className="main-baner">
            <img
              src="https://sescg.me/assets/img/bg/banner_sajt.png"
              alt="x"
            ></img>
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
}
export default HomePage;
