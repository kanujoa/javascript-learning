const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalBox.classList.add("active");     // 클릭하면 .active 스타일을 toggle한다.
})

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
})