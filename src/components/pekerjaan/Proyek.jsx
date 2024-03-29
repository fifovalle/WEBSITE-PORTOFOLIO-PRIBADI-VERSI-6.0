// LIBRARY REACT
import React, { useEffect, useState } from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { dataProyek, navigasiProyek } from "./Data";
import DaftarProyek from "./DaftarProyek";
import { Muncul } from "../../utils/AnimasiHalaman";

const Proyek = () => {
  const [item, setItem] = useState({ nama: "Semua" });
  const [proyek, setProyek] = useState([]);
  const [aktif, setAktif] = useState(0);

  useEffect(() => {
    if (item.nama === "Semua") {
      setProyek(dataProyek);
    } else {
      const proyekBaru = dataProyek.filter((proyek) => {
        return proyek.kategori === item.nama;
      });
      setProyek(proyekBaru);
    }
  }, [item]);

  const filterProyek = (e, index) => {
    setItem({ nama: e.target.textContent });
    setAktif(index);
  };
  return (
    <motion.div
      variants={Muncul("atas", 0.3)}
      initial="hilang"
      whileInView={"ada"}
      viewport={{ once: false, amount: 0 }}
    >
      <div className="memfilter__proyek">
        {navigasiProyek.map((item, index) => {
          return (
            <span
              onClick={(e) => filterProyek(e, index)}
              className={`${
                aktif === index ? "aktif-proyek" : ""
              } item__proyek`}
              key={index}
            >
              {item.nama}
            </span>
          );
        })}
      </div>

      <div className="wadah__pekerjaan wadah jaringan">
        {proyek.map((item) => {
          return <DaftarProyek item={item} key={item.id} />;
        })}
      </div>
    </motion.div>
  );
};

export default Proyek;
