const folderIco = document.getElementById("folder")

folderIco.addEventListener('click', function () {
  if (folderIco.parentElement.getAttribute("data-folder") === "closed") {
    folderIco.parentElement.setAttribute("data-folder", "open")
  } else {
    folderIco.parentElement.setAttribute("data-folder", "closed")
  }
})