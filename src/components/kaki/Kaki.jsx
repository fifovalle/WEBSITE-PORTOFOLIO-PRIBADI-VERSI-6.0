// LIBRARY REACT
import React from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./kaki.css";

const Kaki = () => {
  return (
    <footer className="kaki">
      <div className="wadah__kaki wadah">
        <motion.h1
          variants={Muncul("bawah", 0.3)}
          initial="hilang"
          whileInView={"ada"}
          viewport={{ once: false, amount: 0 }}
          className="judul__kaki"
        >
          Naufal FIFA
        </motion.h1>
        <motion.ul
          variants={Muncul("bawah", 0.3)}
          initial="hilang"
          whileInView={"ada"}
          viewport={{ once: false, amount: 0 }}
          className="daftar__kaki"
        >
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
              Testimoni
            </a>
          </li>
        </motion.ul>
        <motion.div
          variants={Muncul("atas", 0.3)}
          initial="hilang"
          whileInView={"ada"}
          viewport={{ once: false, amount: 0 }}
          className="sosial__kaki"
        >
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
        </motion.div>
        <motion.span
          variants={Muncul("atas", 0.3)}
          initial="hilang"
          whileInView={"ada"}
          viewport={{ once: false, amount: 0 }}
          className="kaki__hak-cipta"
        >
          &#169; Naufal FIFA. Seluruh hak cipta
        </motion.span>
      </div>
    </footer>
  );
};

export default Kaki;
