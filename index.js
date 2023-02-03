//Add event listener to imgs
const clickImg = document.getElementsByClassName("click-img");

for (let i = 0; i < clickImg.length; i++) {
  clickImg[i].addEventListener("click", openModal);
}

//Open the modal when img is clicked
function openModal() {
  let modal = document.getElementsByClassName("hidden");

  modal[0].classList.add("show");
  modal[0].classList.remove("hidden");
}

//Add event listener to background and close icons
const close = document.getElementsByClassName("modal__content__button");
const bckg = document.getElementsByClassName("modal__bckg");

close[0].addEventListener("click", closeModal);
bckg[0].addEventListener("click", closeModal);

//Close the modal when the bckg or close icon are clicked
function closeModal() {
  let modal = document.getElementsByClassName("show");

  modal[0].classList.add("hidden");
  modal[0].classList.remove("show");
}

//Change styles to clicked img to make it grow
let inactive = document.getElementsByClassName("inactive");
let active = document.getElementsByClassName("active");

for (i = 0; i < inactive.length && i < active.length; i++) {
  inactive[0].addEventListener("click", growImg);
  active[0].addEventListener("click", reduceImg);
}

function growImg() {
  let inactive = document.getElementsByClassName("inactive");

  inactive[0].classList.add("active");
  inactive[0].classList.remove("inactive");
}

function reduceImg() {
  let inactive = document.getElementsByClassName("inactive");

  active[0].classList.remove("inactive");
  active[0].classList.add("active");
}