// LIBRARY SWIPER
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./testimoni.css";
import { Data } from "./Data";

const Testimoni = () => {
  return (
    <section className="testimoni wadah bagian" id="testimoni">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Pelanggan Saya Bilang
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Testimoni Pelanggan
      </motion.span>
      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          className="wadah__testimoni"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {Data.map(({ id, gambar, nama, deskripsi }) => {
            return (
              <SwiperSlide className="kartu__testimoni" key={id}>
                <img src={gambar} alt={nama} className="img__testimoni" />
                <h3 className="nama__testimoni">{nama}</h3>
                <p className="deskripsi__testimoni">{deskripsi}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimoni;
