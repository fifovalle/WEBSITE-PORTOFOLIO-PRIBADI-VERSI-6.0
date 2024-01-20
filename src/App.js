// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./App.css";
import Kepala from "./components/kepala/Kepala";
import Beranda from "./components/beranda/Beranda";
import Tentang from "./components/tentang/Tentang";
import Keahlian from "./components/keahlian/Keahlian";
import Layanan from "./components/layanan/Layanan";
import Kualifikasi from "./components/kualifikasi/Kualifikasi";
import Testimoni from "./components/testimoni/Testimoni";
import Kontak from "./components/kontak/Kontak";
import Kaki from "./components/kaki/Kaki";
import GulirKeatas from "./components/gulirkeatas/GulirKeatas";
import Pekerjaan from "./components/pekerjaan/Pekerjaan";

function App() {
  return (
    <>
      <Kepala />
      <main className="utama">
        <Beranda />
        <Tentang />
        <Keahlian />
        <Layanan />
        <Kualifikasi />
        <Pekerjaan />
        <Testimoni />
        <Kontak />
      </main>
      <Kaki />
      <GulirKeatas />
    </>
  );
}

export default App;
