// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY SAYA
import "./kepala.css";

const Kepala = () => {
  const [beralih, tampilkanMenu] = useState(false);
  return (
    <header className="kepala">
      <nav className="wadah navigasibar">
        <a href="index.html" className="logo__navigasibar">
          Naufal FIFA
        </a>
        <div
          className={
            beralih ? "menu__navigasibar tampilkan-menu" : "menu__navigasibar"
          }
        >
          <ul className="daftar__navigasibar jaringan">
            <li className="konten__navigasibar">
              <a href="#beranda" className="tautan__navigasibar tautan-aktif">
                <i className="uil uil-estate ikon__navigasibar"></i> Beranda
              </a>
            </li>
            <li className="konten__navigasibar">
              <a href="#tentang" className="tautan__navigasibar">
                <i className="uil uil-user ikon__navigasibar"></i> Tentang
              </a>
            </li>
            <li className="konten__navigasibar">
              <a href="#keahlian" className="tautan__navigasibar">
                <i className="uil uil-file-alt ikon__navigasibar"></i> Keahlian
              </a>
            </li>
            <li className="konten__navigasibar">
              <a href="#layanan" className="tautan__navigasibar">
                <i className="uil uil-briefcase-alt ikon__navigasibar"></i>{" "}
                Layanan
              </a>
            </li>
            <li className="konten__navigasibar">
              <a href="#portofolio" className="tautan__navigasibar">
                <i className="uil uil-scenery ikon__navigasibar"></i> Portofolio
              </a>
            </li>
            <li className="konten__navigasibar">
              <a href="#kontak" className="tautan__navigasibar">
                <i className="uil uil-message ikon__navigasibar"></i> Kontak
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times tutup__navigasibar"
            onClick={() => tampilkanMenu(!beralih)}
          ></i>
        </div>
        <div
          className="beralih__navigasibar"
          onClick={() => tampilkanMenu(!beralih)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Kepala;
