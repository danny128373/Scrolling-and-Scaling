const audrey = document.getElementById("audrey")

document.addEventListener("scroll", (event) => {
  audrey.style.minWidth = "50px";
  audrey.style.width = `${(window.scrollY) / 3}px`;
  audrey.style.height = `${(window.scrollY) / 4}px`;
})
