// LIBRARY REACT
import React from "react";
// LIBRARY SAYA
import "./App.css";
import Kepala from "./components/kepala/Kepala";
import Beranda from "./components/beranda/Beranda";

function App() {
  return (
    <>
      <Kepala />
      <main className="utama">
        <Beranda />
      </main>
    </>
  );
}

export default App;
