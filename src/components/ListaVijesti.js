import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function ListaVijesti() {
  return (
    <div className="lista-vijesti">
      <div className="vijesti-kartica" id="kartica-0">
        <Router>
          <Link to="x">
            <img src="https://sescg.me/assets/newsim/OpenGaming2.jpg" alt="x" />
          </Link>
        </Router>
        <span>
          <i id="calendar-icon" className="fa fa-calendar"></i>
          8. Avgust 2022
        </span>
        <Router>
          <Link to="x">
            PODGORIČKE KVALIFIKACIJE ZA ZAVRŠNI TURNIR U EFOOTBALL-U ZAVRŠENE
            SINOĆ U SKLOPU FIVEG OPEN GAMING-A
          </Link>
        </Router>
        <Router>
          <div className="opsirnije">
            <Link to="x">
              <div className="kartica-line"></div>
            </Link>

            <Link id="opsirnije-link" to="x">
              Opširnije...
            </Link>
          </div>
        </Router>
      </div>

      <div className="vijesti-kartica" id="kartica-1">
        <Router>
          <Link to="x">
            <img src="https://sescg.me/assets/newsim/eFest.png" alt="x" />
          </Link>
        </Router>
        <span>
          <i id="calendar-icon" className="fa fa-calendar"></i>
          9. Avgust 2022
        </span>
        <Router>
          <Link to="x">PRVI FESTIVAL GEJMINGA I NAUKE U CRNOJ GORI</Link>
        </Router>
        <Router>
          <div className="opsirnije">
            <Link to="x">
              <div className="kartica-line"></div>
            </Link>

            <Link id="opsirnije-link" to="x">
              Opširnije...
            </Link>
          </div>
        </Router>
      </div>

      <div className="block">
        <div className="vijesti-kartica" id="kartica-2">
          <Router>
            <Link to="x">
              <img src="https://sescg.me/assets/newsim/9_small.jpg" alt="x" />
            </Link>
          </Router>
          <span>
            <i id="calendar-icon" className="fa fa-calendar"></i>
            23. Februar 2022
          </span>
          <Router>
            <Link to="x">
              NAGRADNI FOND ZA SVJETSKO PRVENSTVO NA BALIJU 500.000 DOLARA
            </Link>
          </Router>
          <Router>
            <div className="opsirnije">
              <Link to="x">
                <div className="kartica-line"></div>
              </Link>

              <Link id="opsirnije-link" to="x">
                Opširnije...
              </Link>
            </div>
          </Router>
        </div>
        <div className="vijesti-kartica" id="kartica-3">
          <Router>
            <Link to="x">
              <img src="https://sescg.me/assets/newsim/8_small.jpg" alt="x" />
            </Link>
          </Router>
          <span>
            <i id="calendar-icon" className="fa fa-calendar"></i>
            20. Februar 2022
          </span>
          <Router>
            <Link to="x">
              LAKŠE JE KOMENTARISATI NEGO IGRATI NA PROFESIONALNOM NIVOU
            </Link>
          </Router>
          <Router>
            <div className="opsirnije">
              <Link to="x">
                <div className="kartica-line"></div>
              </Link>

              <Link id="opsirnije-link" to="x">
                Opširnije...
              </Link>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default ListaVijesti;
