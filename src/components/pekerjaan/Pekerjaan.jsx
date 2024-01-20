// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./pekerjaan.css";
import Proyek from "./Proyek";

const Pekerjaan = () => {
  return (
    <section className="pekerjaan bagian" id="portofolio">
      <h2 className="bagian__judul">Portofolio</h2>
      <span className="bagian__subjudul">Terbaru</span>

      <Proyek />
    </section>
  );
};

export default Pekerjaan;
