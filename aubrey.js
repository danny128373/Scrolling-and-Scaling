const audrey = document.getElementById("audrey")

document.addEventListener("scroll", (event) => {
  /*
      Adjust the width of audrey to be 1/3 the value of
      `window.scrollY`. No lower than 50px, though.
  */

  audrey.style.minWidth = "50px";
  const y = window.scrollY / 3;
  audrey.style.width = `${y}px`;
  /*
      Adjust the height of audrey to be 1/4 the value of
      `window.scrollY`. No lower than 100px, though.
  */
  // audrey.style.minWidth = "100px";
  // const yWidth = window.scrollY / 4;
  // audrey.style.width = `${yWidth}px`;
})
