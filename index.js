const clickImg = document.getElementsByClassName("click-img");
const close = document.getElementsByClassName("modal__content__button-sec");
const bckg = document.getElementsByClassName("modal__bckg");

for (let i = 0; i < clickImg.length; i++) {
  clickImg[i].onclick = openModal
}

function openModal() {
  let modal = document.getElementsByClassName("hidden");

  modal[0].classList.add("show")
  modal[0].classList.remove("hidden");
}

close[0].onclick = closeModal
bckg[0].onclick = closeModal

function closeModal() {
  let modal = document.getElementsByClassName("show");

  modal[0].classList.add("hidden")
  modal[0].classList.remove("show")
}