// LIBRARY REACT
import React from "react";

const Info = () => {
  return (
    <div className="info__tentang jaringan">
      <div className="kotak__tentang">
        <i className="bx bx-award ikon__tentang"></i>
        <h3 className="judul__tentang">Pengalaman</h3>
        <span className="subjudul__tentang">1 Tahun Bekerja</span>
      </div>
      <div className="kotak__tentang">
        <i className="bx bx-briefcase-alt ikon__tentang"></i>
        <h3 className="judul__tentang">Menyelesaikan</h3>
        <span className="subjudul__tentang">12 + Proyek</span>
      </div>
      <div className="kotak__tentang">
        <i className="bx bx-support ikon__tentang"></i>
        <h3 className="judul__tentang">Pendukung</h3>
        <span className="subjudul__tentang">5/5 Aktif</span>
      </div>
    </div>
  );
};

export default Info;
