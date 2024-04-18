// overlap and offcanvas start
let search = document.querySelector("#sharch"); // search icon select
let overLap = document.querySelector(".overlab");
let cencle_btn = document.querySelector("#cencle_btn");

search.addEventListener("click", function () {
  overLap.style.transform = "scale(1)";
});
cencle_btn.addEventListener("click", function () {
  overLap.style.transform = "scale(0)";
});

// overlap and offcanvas end
