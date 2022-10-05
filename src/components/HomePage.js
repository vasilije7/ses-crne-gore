import React, { useEffect } from "react";
import Header from "./Header";
import ListaVijesti from "./ListaVijesti";
import ListaTakmicenja from "./ListaTakmicenja";
import Footer from "./Footer";

function HomePage({ headerToggler, setHeaderToggler }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const h2 = entry.target.querySelector(".h2");

        if (entry.isIntersecting) {
          h2.classList.add("h2-animation");
          return;
        }

        h2.classList.remove("h2-animation");
      });
    });

    observer.observe(document.querySelector(".lower-section"));
  }, []);

  return (
    <div className="homePage">
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
          <div id="bot"></div>
          <h2 className="h2">NAJNOVIJE VIJESTI</h2>
          <ListaVijesti />
          <h2 id="1" className="h2-2">
            AKTUELNA TAKMICENJA
          </h2>
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
