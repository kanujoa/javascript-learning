const userName = document.querySelector("#desc p");

userName.onclick = () => {
  userName.classList.toggle("blue-italic");     // class 이름 적을 때는 항상 .을 떼고 적어야 한다!!
}