// 버튼을 클릭하면 문서의 배경색을 바뀌게 하기

const button = document.querySelector("#click");

button.onclick = function () {
  document.body.style.backgroundColor = "green";
}