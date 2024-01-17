// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./keahlian.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Keahlian = () => {
  return (
    <div className="keahlian bagian" id="keahlian">
      <h2 className="bagian__judul">Keahlian</h2>
      <span className="bagian__subjudul">Tingkat Keahlian Saya</span>

      <div className="wadah__keahlian wadah jaringan">
        <Frontend />
        <Backend />
      </div>
    </div>
  );
};

export default Keahlian;
