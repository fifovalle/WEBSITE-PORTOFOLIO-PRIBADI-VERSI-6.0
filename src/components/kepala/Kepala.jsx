// LIBRARY REACT
import React, { useEffect, useState } from "react";
// LIBRARY SAYA
import "./kepala.css";

const Kepala = () => {
  window.addEventListener("scroll", function () {
    const kepala = document.querySelector(".kepala");
    if (this.scrollY >= 80) kepala.classList.add("perlihatkan-kepala");
    else kepala.classList.remove("perlihatkan-kepala");
  });
  const [beralih, tampilkanMenu] = useState(false);
  const [aktifNav, setAktifNav] = useState("#beranda");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        "#beranda",
        "#tentang",
        "#keahlian",
        "#layanan",
        "#portofolio",
        "#kontak",
      ];

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setAktifNav(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="kepala">
      <nav className="wadah navigasibar">
        <a href="index.html" className="logo__navigasibar">
          Naufal FIFA
        </a>
        <div
          className={
            beralih ? "menu__navigasibar tampilkan-menu" : "menu__navigasibar"
          }
        >
          <ul className="daftar__navigasibar jaringan">
            <li className="konten__navigasibar">
              <a
                href="#beranda"
                onClick={() => setAktifNav("#beranda")}
                className={
                  aktifNav === "#beranda"
                    ? "tautan__navigasibar tautan-aktif"
                    : "tautan__navigasibar"
                }
              >
                <i className="uil uil-estate ikon__navigasibar"></i> Beranda
              </a>
            </li>
            <li className="konten__navigasibar">
              <a
                href="#tentang"
                onClick={() => setAktifNav("#tentang")}
                className={
                  aktifNav === "#tentang"
                    ? "tautan__navigasibar tautan-aktif"
                    : "tautan__navigasibar"
                }
              >
                <i className="uil uil-user ikon__navigasibar"></i> Tentang
              </a>
            </li>
            <li className="konten__navigasibar">
              <a
                href="#keahlian"
                onClick={() => setAktifNav("#keahlian")}
                className={
                  aktifNav === "#keahlian"
                    ? "tautan__navigasibar tautan-aktif"
                    : "tautan__navigasibar"
                }
              >
                <i className="uil uil-file-alt ikon__navigasibar"></i> Keahlian
              </a>
            </li>
            <li className="konten__navigasibar">
              <a
                href="#layanan"
                onClick={() => setAktifNav("#layanan")}
                className={
                  aktifNav === "#layanan"
                    ? "tautan__navigasibar tautan-aktif"
                    : "tautan__navigasibar"
                }
              >
                <i className="uil uil-briefcase-alt ikon__navigasibar"></i>{" "}
                Layanan
              </a>
            </li>
            <li className="konten__navigasibar">
              <a
                href="#portofolio"
                onClick={() => setAktifNav("#portofolio")}
                className={
                  aktifNav === "#portofolio"
                    ? "tautan__navigasibar tautan-aktif"
                    : "tautan__navigasibar"
                }
              >
                <i className="uil uil-scenery ikon__navigasibar"></i> Portofolio
              </a>
            </li>
            <li className="konten__navigasibar">
              <a
                href="#kontak"
                onClick={() => setAktifNav("#kontak")}
                className={
                  aktifNav === "#kontak"
                    ? "tautan__navigasibar tautan-aktif"
                    : "tautan__navigasibar"
                }
              >
                <i className="uil uil-message ikon__navigasibar"></i> Kontak
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times tutup__navigasibar"
            onClick={() => tampilkanMenu(!beralih)}
          ></i>
        </div>
        <div
          className="beralih__navigasibar"
          onClick={() => tampilkanMenu(!beralih)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Kepala;
