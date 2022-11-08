const trailer = document.getElementById("trailer");
const trailerText = document.getElementById("trailer-text");
const listContent = document.getElementsByClassName("list-content")

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
    if (interactable.parentElement.nodeName === "LI") {
      trailerText.style.backgroundColor = interactable.dataset.color
      trailerText.innerText = `View ${interactable.childNodes[1].childNodes[3].innerText}`
    } else {
      trailerText.style.backgroundColor = "#f17170"
      trailerText.innerText = interactable.dataset.hover
      trailer.classList.add("onInteract");
    }
    trailerText.style.opacity = 1
  } else {
    trailer.classList.remove("onInteract");
    trailerText.style.opacity = 0
    trailerText.innerText = ""
  }
};

