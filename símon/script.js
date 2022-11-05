const trailer = document.getElementById("trailer");

const animateTrailer = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 100,
    fill: 'forwards'
  })
};

document.onmousemove = (e) => {
  animateTrailer(e);
};
