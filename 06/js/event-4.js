// 방법 1
const button = document.querySelector("button");

button.onclick = function() {
  document.body.style.backgroundColor = "green";
}

// 방법 2(위에서 이미 만든 함수 연결하기)
// button.addEventListener("click", changeBackground);

// 방법 3(익명 함수 사용)
// button.addEventListener("click", function() {
//   document.body.style.backgroundColor = "green";
// })

// 방법 4(화살표 함수 사용)
// button.addEventListener("click", () => {
//  document.body.style.backgroundColor = "green";
// })