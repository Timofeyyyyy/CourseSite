// let open = document.querySelector(".learn-accordion");
// let hidden = document.querySelector(".learn-hiden-block");
// let plus = document.querySelector(".learn-plus");

// open.addEventListener("click", function () {
//   open.classList.toggle("active");
//   plus.classList.toggle("active");
// });

window.addEventListener("click", function (event) {
  if (event.target.dataset.action === "open") {
    const accordion = event.target.closest(".learn-accordion");
    const hiden = accordion.querySelector(".learn-hiden-block");
    console.log(hiden);
    hiden.classList.toggle("active");
    const plus = accordion.querySelector(".learn-plus");

    plus.classList.toggle("active");
  }
});
