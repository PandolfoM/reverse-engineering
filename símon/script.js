const trailer = document.getElementById("trailer");

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = 20;

  const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);

  if (distanceFromTop >= navbarHeight) {
    navbar.classList.add("border-bottom");
  } else {
    navbar.classList.remove("border-bottom");
  }
});

const animateTrailer = (e) => {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

document.onmousemove = (e) => {
  animateTrailer(e);

  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  if (interacting) {
    trailer.classList.add("onInteract");
  } else {
    trailer.classList.remove("onInteract");
  }
};
