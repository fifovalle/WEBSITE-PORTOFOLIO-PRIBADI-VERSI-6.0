// LIBRARY REACT
import React from "react";
// LIBRARY CSS
import "./gulirkeatas.css";

const GulirKeatas = () => {
  window.addEventListener("scroll", function () {
    const gulirkeatas = document.querySelector(".gulirkeatas");
    if (this.scrollY >= 560) gulirkeatas.classList.add("perlihatkan");
    else gulirkeatas.classList.remove("perlihatkan");
  });
  return (
    <a href="#beranda" className="gulirkeatas">
      <i className="uil uil-arrow-up ikon__gulirkeatas"></i>
    </a>
  );
};

export default GulirKeatas;
