// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./beranda.css";
import Sosial from "./Sosial";
import Data from "./Data";

const Beranda = () => {
  return (
    <section className="beranda bagian" id="beranda">
      <div className="wadah__beranda wadah jaringan">
        <div className="konten__beranda jaringan">
          <Sosial />
          <div className="img__beranda"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Beranda;
