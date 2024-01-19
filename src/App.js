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
        <Testimoni />
        <Kontak />
        <Kaki />
      </main>
    </>
  );
}

export default App;
