const folderIco = document.getElementById("folder")
const sideNavIco = document.getElementById("sidenav-btns")

folderIco.addEventListener('click', function () {
  if (folderIco.parentElement.getAttribute("data-folder") === "closed") {
    folderIco.parentElement.setAttribute("data-folder", "open")
  } else {
    folderIco.parentElement.setAttribute("data-folder", "closed")
  }
})