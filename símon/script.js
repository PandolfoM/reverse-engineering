const trailer = document.getElementById("trailer");

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = 100;

  const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);

  if (distanceFromTop >= navbarHeight) {
    navbar.classList.add("border-bottom");
  } else {
    navbar.classList.remove("border-bottom");
  }
});

const animateTrailer = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 100,
    fill: "forwards",
  });
};

document.onmousemove = (e) => {
  animateTrailer(e);
};
