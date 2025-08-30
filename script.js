let scrolledNav = document.getElementsByClassName("nav-bar")[0];
window.onscroll = function () {
  scrolledNav.classList.add("scroll");
};

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}
function changeSlide(step) {
  currentIndex = (currentIndex + step + slides.length) % slides.length;
  showSlide(currentIndex);
}

setInterval(() => changeSlide(1), 3000);
showSlide(currentIndex);

let myMenu = document.getElementsByClassName("span-menu")[0];
let myLinks = document.querySelector("ul");
myMenu.onclick = function () {
  myLinks.classList.toggle("Appear");
};

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-bar .menu .pages li a");
  let currentPage = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    if (link.getAttribute("href").split("/").pop() === currentPage) {
      link.classList.add("current-page");
    } else {
      link.classList.remove("current-page");
    }
  });
});

let cardsElements = document.getElementsByClassName("cards");

for (let i = 0; i < cardsElements.length; ++i) {
  let cards = cardsElements[i];
  if (!cards || !cards.children.length) continue;

  let cardLength = cards.children[0].offsetWidth;
  let arrowLeft = document.getElementsByClassName("arrow-left")[i];
  let arrowRight = document.getElementsByClassName("arrow-right")[i];

  let scrollStep = cardLength + 25;
  let maxScroll = cards.scrollWidth - cards.offsetWidth;

  arrowRight?.addEventListener("click", () => {
    cards.scrollLeft += scrollStep;
    if (cards.scrollLeft >= maxScroll) {
      cards.scrollLeft = maxScroll;
      arrowRight.style.display = "none";
    }
    arrowLeft.style.display = "block";
  });

  arrowLeft?.addEventListener("click", () => {
    cards.scrollLeft -= scrollStep;
    if (cards.scrollLeft <= 0) {
      cards.scrollLeft = 0;
      arrowLeft.style.display = "none";
    }
    arrowRight.style.display = "block";
  });

  if (arrowLeft) arrowLeft.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  let videos = document.querySelectorAll("video");
  videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.setAttribute("controls", "");
    });
    video.addEventListener("mouseleave", () => {
      video.removeAttribute("controls");
    });
  });
});
