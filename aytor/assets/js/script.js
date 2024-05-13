// navbar section start
"use strict";
const mainNav = document.querySelector(".navbar-src");
const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const close_btn = document.querySelector(".close_btn");
const nav_list = document.querySelector(".nav_list");
const searchSection = document.querySelector(".overlab");
const searchContainer = document.querySelector(".search_section");
const searchFieldClose = document.querySelector(".search_section_close_btn");
const input = document.querySelector(".input");
searchSection.addEventListener("click", (e) => {
  e.preventDefault();
  searchContainer.classList.add("open_search");
  input.classList.add("input-open");
});

searchFieldClose.addEventListener("click", () => {
  searchContainer.classList.remove("open_search");
});
window.addEventListener("scroll", () => {
  let scrollWindow = window.scrollY;
  if (scrollWindow > 200) {
    mainNav.classList.add("fixed");
  } else if (scrollWindow < 190) {
    mainNav.classList.remove("fixed");
  }
});
menu.addEventListener("click", function () {
  list.classList.add("open");
  nav_list.classList.add("open_nav");
});
const navCloseFun = (e) => {
  if (
    e.target.classList.contains("fa-xmark") ||
    e.target.classList.contains("list")
  ) {
    list.classList.remove("open");
    nav_list.classList.remove("open_nav");
  }
};
close_btn.addEventListener("click", navCloseFun);
list.addEventListener("click", navCloseFun);
//? navbar section end
// navbar section end

// section six time counter

let countDown = () => {
  const days = document.querySelector("#day");
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minute");
  const second = document.querySelector("#sec");
  let futureDate = new Date("31 April 2024");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  let day = Math.abs(Math.floor(myDate / 1000 / 60 / 60 / 24));
  let hours = Math.abs(Math.floor(myDate / 1000 / 60 / 60) % 24);
  let minutes = Math.abs(Math.floor(myDate / 1000 / 60) % 60);
  let seconds = Math.abs(Math.floor(myDate / 1000) % 60);

  try {
    days.innerHTML = day;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
  } catch {}
};
countDown();
setInterval(countDown, 100);
// section six end

// upper button
const upperButton = document.querySelector(".upper_btn");
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 600) {
    upperButton.classList.add("up_active");
  } else if (window.scrollY < 500) {
    upperButton.classList.remove("up_active");
  }
});

//about page start
let SeNumber = document.querySelectorAll(".section-num");
let valueOf = 10;
SeNumber.forEach((element) => {
  function formatNumber(num, precision = 2) {
    const map = [
      { suffix: "T", threshold: 1e12 },
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted =
        (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }

    return num.toFixed();
  }
  let startValue = 0;
  let endValue = parseInt(element.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(valueOf / endValue);
  let count = setInterval(function () {
    startValue += 1;
    if (startValue / 1000) {
      element.innerHTML = formatNumber(startValue);
    }
    if (startValue == endValue) {
      clearInterval(count);
    }
  }, duration);
});
//about page end

// shop page start
// shop-grid small progress bar start
let element = document.querySelector(".inline");
let width = 60;
let count = 0;
window.addEventListener(
  "DOMContentLoaded",
  (move = () => {
    if (count === 0) {
      j = 1;
      let main = setInterval(frame, 50);
      function frame() {
        if (width >= 80) {
          clearInterval(main);
        } else {
          element.style.width = width + "%";
          element.style.innerHTML = width + "%";
        }
      }
    }
  })
);
// shop details page start
const mainImgProduct = document.getElementById("main-img");
const smImg = document.querySelectorAll(".small-img");
console.log(smImg);
smImg.forEach((elm) => {
  console.log(elm);
  elm.addEventListener("click", () => {
    mainImgProduct.src = elm.src;
  });
});
