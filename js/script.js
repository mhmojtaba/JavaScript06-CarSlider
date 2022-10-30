function slider(item) {
  document.querySelector("#image").src = item;
}

function changBg(color) {
  const bg = document.querySelector(".section");
  bg.style.backgroundColor = color;
}
