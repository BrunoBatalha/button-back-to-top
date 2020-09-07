const heightScreen = window.innerHeight;
const button = document.querySelector(".btn-back-to-top");
const bgButton = button.getAttribute("data-bg");
const colorBars = button.getAttribute("data-bars");

button.innerHTML = "<div></div><div></div>";
setColorsButtonAndBars();

window.onscroll = listenerScroll;

button.addEventListener("click", goToTop);

function listenerScroll() {
  const distanciaDoTopo = window.pageYOffset;

  if (distanciaDoTopo * 2 < heightScreen) {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
}

function goToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

function setColorsButtonAndBars() {
  button.style.display = "none";
  button.style.background = bgButton;

  for (let i = 0; i < button.children.length; i++) {
    const bar = button.children[i];
    bar.style.background = colorBars;
  }
}
