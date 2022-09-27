import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-right">
          <h3>KONTAKT</h3>
          <span>Email:</span>
          <p>marketing@sescg.me </p>
          <span>Lokacija:</span>
          <p>Moskovska 93, Podgorica, Montenegro</p>
          <span>Telefon:</span>
          <p>+382 69 238 128</p>
        </div>
        <div className="footer-left">
          <a href="index.html">
            <img src="https://sescg.me/assets/img/logo/logo.webp" alt="x"></img>
          </a>
          <p>Pratite nas i na društvenim mrežama</p>
          <div className="links">
            <a className="facebook" href="https://www.facebook.com/sescg/">
              <i id="facebook-icon" className="fa fa-facebook"></i>
            </a>
            <a className="twitch" href="https://www.twitch.com/sescg/">
              <i id="twitch-icon" className="fa fa-twitch"></i>
            </a>
            <a className="youtube" href="https://www.youtube.com/sescg/">
              <i id="youtube-icon" className="fa fa-youtube"></i>
            </a>
            <a className="twitter" href="https://www.twitter.com/sescg/">
              <i id="twitter-icon" className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <p>
          © 2022 SESCG
          <img
            src={require("../styles/images/ikonica.png")}
            alt="x"
          ></img> BY{" "}
          <span>
            <a href="index.html">SESCG</a>
          </span>
        </p>
        <a href="#top">
          <img
            aria-label="scroll-top"
            src="https://sescg.me/assets/img/icon/scroll-top.webp"
            alt="x"
          ></img>
        </a>
      </div>
    </div>
  );
}
export default Footer;
