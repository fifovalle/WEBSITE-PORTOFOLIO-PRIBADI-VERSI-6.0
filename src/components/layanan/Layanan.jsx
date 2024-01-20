// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./layanan.css";

const Layanan = () => {
  const [modal, setModal] = useState(0);

  const bukakanModal = (index) => {
    setModal(index);
  };
  return (
    <div className="layanan bagian" id="layanan">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Layanan
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        Apa Yang Saya Tawarkan
      </motion.span>

      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__layanan wadah jaringan"
      >
        <div className="konten__layanan">
          <div>
            <i className="uil uil-web-grid ikon__layanan"></i>
            <h3 className="judul__layanan">
              Pengembangan <br />
              Web
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(1)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 1 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">Pengembangan Web</h3>
              <p className="modal__layanan-deskripsi">
                Membangun situs web dan aplikasi interaktif yang tidak hanya
                estetis tetapi juga fungsional. Dengan menggunakan teknologi
                seperti React, Node.js, dan Next.js, kami menghadirkan solusi
                yang responsif dan sesuai dengan standar pengembangan terkini.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Layanan Pengembangan Situs Web Full Stack
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Layanan Pengembangan Aplikasi Web Interaktif
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Layanan Integrasi Basis Data
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-setting ikon__layanan"></i>
            <h3 className="judul__layanan">
              Optimisasi <br /> Pemeliharaan
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(2)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 2 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
                {" "}
                Optimisasi <br /> Pemeliharaan
              </h3>
              <p className="modal__layanan-deskripsi">
                Menyediakan layanan pemeliharaan kode untuk memastikan kualitas
                dan keamanan aplikasi, serta melakukan audit keamanan untuk
                melindungi dari potensi kerentanan.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Layanan Optimisasi dan Pemeliharaan Kode
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Layanan Audit Keamanan Aplikasi Web
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-web-section ikon__layanan"></i>
            <h3 className="judul__layanan">
              Pengembangan <br />
              E-commerce
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(3)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 3 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul"> Pengembangan E-commerce</h3>
              <p className="modal__layanan-deskripsi">
                Merancang dan mengembangkan situs web e-commerce yang tidak
                hanya menarik tetapi juga efisien. Dengan penekanan pada
                pengalaman pengguna dan fungsionalitas transaksi yang mulus,
                kami mendukung pertumbuhan bisnis online Anda.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Layanan Pengembangan Situs Web E-commerce
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Layanan;
