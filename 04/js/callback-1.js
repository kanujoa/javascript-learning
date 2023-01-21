const bttn = document.querySelector("button");

function display() {
  alert("클릭했습니다.");
}

bttn.addEventListener("click", display);     // 콜백 함수를 작성할 때에는 소괄호를 작성하지 않고 함수 이름만 작성한다.