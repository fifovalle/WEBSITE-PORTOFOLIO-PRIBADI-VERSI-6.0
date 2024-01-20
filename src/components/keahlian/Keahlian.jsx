// LIBRARY REACT
import React from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./keahlian.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Keahlian = () => {
  return (
    <div className="keahlian bagian" id="keahlian">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Keahlian
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Tingkat Keahlian Saya
      </motion.span>

      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__keahlian wadah jaringan"
      >
        <Frontend />
        <Backend />
      </motion.div>
    </div>
  );
};

export default Keahlian;
