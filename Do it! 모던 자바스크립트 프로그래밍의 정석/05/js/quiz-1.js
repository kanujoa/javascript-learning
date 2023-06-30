// [상세 설명 보기 / 닫기] 버튼을 클릭할 때마다 상세 설명이 나타나거나 사라지게 하는 소스 코드

const bttn = document.querySelector("ul #view");
const detail = document.querySelector("#detail");

bttn.onclick = () => {
  detail.classList.toggle("hidden");
}