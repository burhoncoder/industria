const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const header = document.querySelector(".header");
const toTop = document.querySelector(".to-top");
toTop.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const burgerOpen = document.querySelector(".burger-icon");
const burgerClose = document.querySelector(".burger__close");
const burgerMenu = document.querySelector(".burger__menu");
const burgerOverlay = document.querySelector(".burger__overlay");
burgerOpen.addEventListener("click", (e) => {
  burgerMenu.classList.add("burger__menu--active");
  burgerOverlay.classList.add("burger__overlay--active");
});
burgerClose.addEventListener("click", (e) => {
  burgerMenu.classList.remove("burger__menu--active");
  burgerOverlay.classList.remove("burger__overlay--active");
});
burgerOverlay.addEventListener("click", (e) => {
  burgerMenu.classList.remove("burger__menu--active");
  burgerOverlay.classList.remove("burger__overlay--active");
});

const nav = header.querySelectorAll(".nav__item");
const search = document.querySelector(".nav__search");
const searchI = document.querySelector(".nav__searchI");
const searchInput = document.querySelector(".nav__search-input");
searchI.addEventListener("click", (e) => {
  nav.forEach((item) => {
    item.classList.toggle("nav__item--hidden");
  });
  search.classList.toggle("nav__search--active");
  searchInput.focus();
  searchInput.value = "";
});
