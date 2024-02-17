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
            <h3 className="judul__layanan">Jasa Frontend</h3>
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
              <h3 className="modal__layanan-judul">Jasa Frontend</h3>
              <p className="modal__layanan-deskripsi">
                Layanan ini mencakup pembuatan antarmuka pengguna yang menarik
                dan responsif menggunakan HTML, CSS, dan JavaScript. Anda juga
                dapat menawarkan integrasi dengan framework seperti Bootstrap
                atau Tailwind untuk mempercepat proses desain. Selain itu,
                layanan ini mencakup pembuatan aplikasi web interaktif dan
                visualisasi 3D menggunakan teknologi seperti React, Next JS,
                Three JS, dan SASS.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Desain dan pembuatan antarmuka pengguna menggunakan HTML,
                    CSS, dan JavaScript.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Penggunaan framework seperti Bootstrap atau Tailwind untuk
                    desain responsif dan menarik.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Pembuatan aplikasi web interaktif dengan menggunakan React,
                    Next JS, atau SASS.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Integrasi animasi dan visualisasi 3D menggunakan Three JS.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-setting ikon__layanan"></i>
            <h3 className="judul__layanan">Jasa Backend</h3>
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
              <h3 className="modal__layanan-judul"> Jasa Backend</h3>
              <p className="modal__layanan-deskripsi">
                Layanan ini fokus pada pengembangan backend untuk aplikasi web,
                termasuk penyusunan basis data menggunakan MySQL, SQL, atau
                MongoDB. Anda dapat menawarkan integrasi dengan PHP, Node JS,
                atau Firebase untuk membuat backend yang efisien dan aman.
                Layanan ini juga mencakup pengaturan keamanan dan otentikasi
                pengguna menggunakan Firebase Authentication atau JWT.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Pengembangan backend menggunakan PHP, Node JS, atau
                    Firebase.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Penyusunan basis data dengan MySQL, SQL, atau MongoDB untuk
                    penyimpanan dan pengelolaan data.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Implementasi RESTful API untuk komunikasi antara frontend
                    dan backend.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Pengaturan keamanan dan otentikasi pengguna menggunakan
                    Firebase Authentication atau JWT.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-web-section ikon__layanan"></i>
            <h3 className="judul__layanan">Jasa Aplikasi</h3>
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
              <h3 className="modal__layanan-judul"> Jasa Aplikasi</h3>
              <p className="modal__layanan-deskripsi">
                Layanan ini mencakup pembuatan aplikasi berbasis web dengan
                fitur lanjutan menggunakan Next JS dan integrasi fitur real-time
                menggunakan Node JS atau Firebase Realtime Database. Anda dapat
                menawarkan penggunaan TypeScript untuk mengoptimalkan
                pengembangan dan mencegah kesalahan pada saat kompilasi.
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Pembuatan aplikasi berbasis web dengan fitur lanjutan
                    menggunakan Next JS.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Integrasi fitur real-time menggunakan Node JS atau Firebase
                    Realtime Database.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Penggunaan TypeScript untuk mengoptimalkan pengembangan dan
                    mencegah kesalahan pada saat kompilasi.
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
