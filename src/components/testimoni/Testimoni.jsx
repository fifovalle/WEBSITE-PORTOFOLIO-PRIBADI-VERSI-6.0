// LIBRARY SWIPER
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// LIBRARY SAYA
import "./testimoni.css";
import { Data } from "./Data";

const Testimoni = () => {
  return (
    <section className="testimoni wadah bagian" id="testimoni">
      <h2 className="bagian__judul">Pelanggan Saya Bilang</h2>
      <span className="bagian__subjudul">Testimoni Pelanggan</span>
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
    </section>
  );
};

export default Testimoni;
