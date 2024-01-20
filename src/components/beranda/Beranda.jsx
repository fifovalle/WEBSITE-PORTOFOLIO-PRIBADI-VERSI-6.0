// LIBRARY REACT
import React from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import "./beranda.css";
import Sosial from "./Sosial";
import Data from "./Data";
import GulirKebawah from "./GulirKebawah";
import { Muncul } from "../../utils/AnimasiHalaman";

const Beranda = () => {
  return (
    <section className="beranda bagian" id="beranda">
      <div className="wadah__beranda wadah jaringan">
        <div className="konten__beranda jaringan">
          <Sosial />
          <motion.div
            variants={Muncul("atas", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0 }}
            className="img__beranda"
          ></motion.div>
          <Data />
        </div>
        <GulirKebawah />
      </div>
    </section>
  );
};

export default Beranda;
