// получаем модальное окно

let modal = document.getElementById("myModal");
// получаем кнопку которое открывает модальное окно

let btn = document.getElementById("myBtn");
// получаем кнопку закрытия модального окна

let span = document.getElementsByClassName("close")[0];
// конпка открытия
btn.onclick = function () {
  modal.style.display = "block";
  // modal.style.backgroundColor = "#333";
};
span.onclick = function () {
  modal.style.display = "none";
};
