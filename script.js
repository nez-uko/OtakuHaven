//start nav-bar
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

//cards
for (let i = 0; i < 9; ++i) {
  let cards = document.getElementsByClassName("cards")[i];
  let cardLenght = cards.children[0].offsetWidth;
  let arrowLeft = document.getElementsByClassName("arrow-left")[i];
  let arrowRight = document.getElementsByClassName("arrow-right")[i];

  let scrollStep = cardLenght + 25;

  let maxScroll = cards.scrollWidth - cards.offsetWidth;
  arrowRight.addEventListener("click", () => {
    cards.scrollLeft += scrollStep;
    if (cards.scrollLeft >= maxScroll) {
      cards.scrollLeft = maxScroll;
      arrowRight.style.display = "none";
    }
    arrowLeft.style.display = "block";
  });

  arrowLeft.addEventListener("click", () => {
    cards.scrollLeft -= scrollStep;
    if (cards.scrollLeft <= 0) {
      cards.scrollLeft = 0;
      arrowLeft.style.display = "none";
    }
    arrowRight.style.display = "block";
  });
  arrowLeft.style.display = "none";
}

let cards = document.getElementsByClassName("cards")[3];
let cardLenght = cards.children[0].offsetWidth;
let arrowLeft = document.getElementsByClassName("arrow-left")[3];
let arrowRight = document.getElementsByClassName("arrow-right")[3];

let scrollStep = cardLenght;

let maxScroll = cards.scrollWidth ;
//- cards.offsetWidth;
arrowRight.addEventListener("click", () => {
  cards.scrollLeft += scrollStep;
  if (cards.scrollLeft >= maxScroll) {
    cards.scrollLeft = maxScroll;
    arrowRight.style.display = "none";
  }
  arrowLeft.style.display = "block";
});

arrowLeft.addEventListener("click", () => {
  cards.scrollLeft -= scrollStep;
  if (cards.scrollLeft <= 0) {
    cards.scrollLeft = 0;
    arrowLeft.style.display = "none";
  }
  arrowRight.style.display = "block";
});
arrowLeft.style.display = "none";


let videos=document.querySelectorAll("video");
videos.forEach(video=>{
  video.onmouseenter = function () {
    video.setAttribute("controls", "");
  };
  video.onmouseleave = function () {
    video.removeAttribute("controls");
  };
});
