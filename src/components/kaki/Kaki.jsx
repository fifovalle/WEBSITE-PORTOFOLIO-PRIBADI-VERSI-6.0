// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./kaki.css";

const Kaki = () => {
  return (
    <footer className="kaki">
      <div className="wadah__kaki wadah">
        <h1 className="judul__kaki">Naufal FIFA</h1>
        <ul className="daftar__kaki">
          <li>
            <a href="#tentang" className="tautan__kaki">
              Tentang
            </a>
          </li>
          <li>
            <a href="#portofolio" className="tautan__kaki">
              Proyek
            </a>
          </li>
          <li>
            <a href="#testimoni" className="tautan__kaki">
              Terstimoni
            </a>
          </li>
        </ul>
        <div className="sosial__kaki">
          <a
            href="https://www.instagram.com/fif_ovalle/"
            className="tautan__sosial-kaki"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/naufal-fifa/"
            className="tautan__sosial-kaki"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/fifovalle"
            className="tautan__sosial-kaki"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.youtube.com/@zonadeveloper"
            className="tautan__sosial-kaki"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <span className="kaki__hak-cipta">
          &#169; Naufal FIFA. Seluruh hak cipta
        </span>
      </div>
    </footer>
  );
};

export default Kaki;
