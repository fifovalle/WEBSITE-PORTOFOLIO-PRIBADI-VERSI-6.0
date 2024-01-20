// LIBRARY REACT
import React from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";

const Sosial = () => {
  return (
    <motion.div
      variants={Muncul("atas", 0.3)}
      initial="hilang"
      whileInView={"ada"}
      viewport={{ once: false, amount: 0 }}
      className="sosial__beranda"
    >
      <a
        href="https://www.instagram.com/fif_ovalle/"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/naufal-fifa/"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/fifovalle"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.youtube.com/@zonadeveloper"
        className="sosial__beranda-ikon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-youtube"></i>
      </a>
    </motion.div>
  );
};

export default Sosial;
