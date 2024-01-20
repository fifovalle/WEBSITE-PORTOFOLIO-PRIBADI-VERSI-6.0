import React from "react";

const DaftarProyek = ({ item }) => {
  return (
    <div className="kartu__pekerjaan" key={item.id}>
      <img src={item.gambar} alt={item.nama} className="gambar__pekerjaan" />
      <h3 className="nama__pekerjaan">{item.nama}</h3>
      <a href="#beranda" className="tombol__pekerjaan">
        Lihat Demo{" "}
        <i className="bx bx-right-arrow-alt ikon__tombol-pekerjaan"></i>
      </a>
    </div>
  );
};

export default DaftarProyek;
