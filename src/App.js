// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./App.css";
import Kepala from "./components/kepala/Kepala";
import Beranda from "./components/beranda/Beranda";
import Tentang from "./components/tentang/Tentang";

function App() {
  return (
    <>
      <Kepala />
      <main className="utama">
        <Beranda />
        <Tentang />
      </main>
    </>
  );
}

export default App;
