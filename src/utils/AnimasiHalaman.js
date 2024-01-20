export const Muncul = (direction) => {
  return {
    hilang: {
      y: direction === "atas" ? 80 : direction === "bawah" ? -80 : 0,
      opacity: 0,
      x: direction === "kiri" ? 80 : direction === "kanan" ? -80 : 0,
    },
    ada: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
