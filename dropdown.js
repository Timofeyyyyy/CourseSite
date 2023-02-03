window.addEventListener("click", function (event) {
  console.log("click");
  console.log(event.target.dataset.action);
  if (event.target.dataset.action === "open") {
    const dropDown = event.target.closest(".dropdown");
    const list = dropDown.querySelector(".list");
    list.classList.toggle("newlist");
  }
});
