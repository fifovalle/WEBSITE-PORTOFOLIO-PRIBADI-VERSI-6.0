// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./App.css";
import Kepala from "./components/kepala/Kepala";
import Beranda from "./components/beranda/Beranda";
import Tentang from "./components/tentang/Tentang";
import Keahlian from "./components/keahlian/Keahlian";

function App() {
  return (
    <>
      <Kepala />
      <main className="utama">
        <Beranda />
        <Tentang />
        <Keahlian />
      </main>
    </>
  );
}

export default App;
