// LIBRARY REACT
import React from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import "./pekerjaan.css";
import Proyek from "./Proyek";
import { Muncul } from "../../utils/AnimasiHalaman";

const Pekerjaan = () => {
  return (
    <section className="pekerjaan bagian" id="portofolio">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Portofolio
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Terbaru
      </motion.span>

      <Proyek />
    </section>
  );
};

export default Pekerjaan;
