import React from "react";

function ListaTakmicenja() {
  return (
    <div className="lista-takmicenja">
      <div className="takmicenje">
        <p>9 avgust 2022 - 10:00 AM</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScakcqybiKvaqLTgG_q1f9XV6BNl3-rJ-26tGERNBSKxLJMVQ/viewform">
          BUDVA - KVALIFIKACIJE
          <br></br> ZA EEURO U SEPTEMBRU
        </a>
        <p className="location-p">BUDVA - AKADEMIJA ZNANJA</p>
        <i>ZAVRŠENO</i>
      </div>
      <div className="takmicenje-1">
        <p>16 Avgust 2022 - 18:00 PM</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScakcqybiKvaqLTgG_q1f9XV6BNl3-rJ-26tGERNBSKxLJMVQ/viewform">
          BERANE - KVALIFIKACIJE
          <br></br> ZA EEURO U SEPTEMBRU
        </a>
        <p className="location-p">BERANE - IVANGRAD STUDIO</p>
        <div className="link-prijava">
          <a
            className="prijava-a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAKX7ytRPnNksh7ptxWDereK9NsOyDmGT33f9dGVaDxGCiQw/viewform"
          >
            klikni za prijavu
          </a>
        </div>
      </div>
      <div className="takmicenje-2">
        <p>20 Avgust 2022 - 18:00 PM</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScakcqybiKvaqLTgG_q1f9XV6BNl3-rJ-26tGERNBSKxLJMVQ/viewform">
          PODGORICA -<br></br>KVALIFIKACIJE ZA EEURO
          <br></br> U SEPTEMBRU
        </a>
        <p className="location-p">PODGORICA - CAPITAL PLAZA</p>
        <div className="link-prijava">
          <a href="www.nidje.me">prijava uskoro</a>
        </div>
      </div>
    </div>
  );
}

export default ListaTakmicenja;
