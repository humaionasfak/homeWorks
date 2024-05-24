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

// const clickebelIcon = document.querySelector(".icon-click");
// const dropDown = document.querySelector(".dorp_down");
// const removeDrop = document.querySelector(".removed");

// clickebelIcon.addEventListener("click", (e) => {
//   clickebelIcon.classList.add("removed");
//   dropDown.classList.add("open-drop-down");
// });
// function rem() {
//   dropDown.classList.remove("open-drop-down");
// }
// if (removeDrop !== null) {
//   removeDrop.addEventListener("click", rem);
// }
//? navbar section end
// navbar section end

// open html file;
// const btnOpen = document.querySelector(".btn1");
// btnOpen.addEventListener("click", function () {
//   console.log("hello world");
// });

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
SeNumber.forEach((counter) => {
  let initialValue = 0;
  let initialCount = counter.dataset.count;
  console.log(initialCount);
  const clearData = setInterval(updateCounting, 1);
  function updateCounting() {
    initialValue = initialValue + 5;
    counter.innerText = initialValue;
    if (initialValue > 1000) {
      initialValue = initialValue + 100;
      counter.innerText = (initialValue / 1000).toFixed(1) + "k+";
    }
    if (initialValue >= initialCount) {
      clearInterval(clearData);
    }
  }
});
//about page end

// shop page start
// shop-grid small progress bar start
let element = document.querySelector(".inline");
let width = 60;
let count = 0;
let j;
// let move;
window.addEventListener("DOMContentLoaded", () => {
  if (count === 0) {
    j = 1;
    if (element !== null) {
      let main = setInterval(frame, 50);
      function frame() {
        element.style.width = width + "%";
        element.style.innerHTML = width + "%";
      }
    }
  }
});
// shop details page start
const mainImgProduct = document.getElementById("main-img");
const smImg = document.querySelectorAll(".small-img");
smImg.forEach((elm) => {
  elm.addEventListener("click", () => {
    mainImgProduct.src = elm.src;
  });
});
// shop details increment and decrement value
let increment = document.querySelector(".increment-value");
let decrement = document.querySelector(".decrement-value");
let valueOfIncrementDecrement = document.querySelector(".value-in");
if (increment !== null || decrement !== null) {
  increment.addEventListener("click", function () {
    valueOfIncrementDecrement.value++;
  });
}
if (decrement !== null) {
  decrement.addEventListener("click", function () {
    if (valueOfIncrementDecrement.value > 1) {
      valueOfIncrementDecrement.value--;
    }
  });
}

// main page section start
// const mainPage = document.querySelectorAll(".main-nav");
const mainPageOne = document.querySelector(".main-nav-one");
const mainPageThree = document.querySelector(".main-nav-three");
const mainPageTow = document.querySelector(".main-nav-two");
const PageOne = document.querySelector(".page-one");
const pageTwo = document.querySelector(".page-tow");
const pageThree = document.querySelector(".page-three");

function addRemoved(e) {
  if (e.target.classList.contains("main-nav-two")) {
    PageOne.classList.add("d-none");
    pageTwo.classList.add("block");
    pageTwo.classList.remove("d-none");
    pageThree.classList.add("d-none");
    mainPageTow.classList.add("clr2");
    mainPageOne.classList.remove("clr");
    mainPageThree.classList.remove("solid-color");
  } else if (e.target.classList.contains("main-nav-one")) {
    PageOne.classList.add("d-block");
    PageOne.classList.remove("d-none");
    pageTwo.classList.remove("block");
    pageThree.classList.add("d-none");
    pageTwo.classList.add("d-none");
    mainPageOne.classList.add("clr");
    mainPageTow.classList.remove("clr2");
    mainPageThree.classList.remove("solid-color");
  }
  if (e.target.classList.contains("main-nav-three")) {
    PageOne.classList.add("d-none");
    pageTwo.classList.remove("block");
    pageTwo.classList.add("d-none");
    pageThree.classList.add("d-block");
    pageThree.classList.remove("d-none");
    mainPageThree.classList.add("solid-color");
    mainPageOne.classList.remove("clr");
    mainPageTow.classList.remove("clr2");
  }
}
if (mainPageOne !== null) {
  mainPageOne.addEventListener("click", addRemoved);
}
mainPageTow.addEventListener("click", addRemoved);
mainPageThree.addEventListener("click", addRemoved);

// compare page
