// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY SAYA
import "./kualifikasi.css";

const Kualifikasi = () => {
  const [aktif, setAktif] = useState(1);
  const alihkanAktif = (index) => {
    setAktif(index);
  };
  return (
    <section className="kualifikasi bagian" id="kualifikasi">
      <h2 className="bagian__judul">Kualifikasi</h2>
      <span className="bagian__subjudul">Jurnal Pribadi Saya</span>

      <div className="wadah__kualifikasi wadah">
        <div className="tabs__kualifikasi">
          <div
            className={
              aktif === 1
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(1)}
          >
            <i className="uil uil-graduation-cap kualifikasi__ikon"></i> Edukasi
          </div>
          <div
            className={
              aktif === 2
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(2)}
          >
            <i className="uil uil-briefcase-alt kualifikasi__ikon"></i>{" "}
            Pengalaman
          </div>
        </div>
        <div className="bagian__kualifikasi">
          <div
            className={
              aktif === 1
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi"> Mahasiswa-IF</h3>
                <span className="subjudul__kualifikasi">
                  Universitas Jenderal Achmad Yani
                </span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2022 - Sekarang</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Siswa-RPL</h3>
                <span className="subjudul__kualifikasi">SMK Mahardhika</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2018 - 2021</i>
                </div>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">Siswa</h3>
                <span className="subjudul__kualifikasi">SMPN 3 Batujajar</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2015 - 2018</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Siswa</h3>
                <span className="subjudul__kualifikasi">SDN</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2009 - 2015</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              aktif === 2
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">Konten Kreator</h3>
                <span className="subjudul__kualifikasi">Youtube</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2024 - Sekarang</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Freelance</h3>
                <span className="subjudul__kualifikasi">Fiver</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2023 - 2024</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kualifikasi;
