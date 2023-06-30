const changeBttn = document.querySelector("#change-color");
const text = document.querySelector("h1");

function changeBackground() {     // 화면의 가장 아래 버튼을 클릭했을 때 배경색을 바꾸는 코드
  document.body.style.backgroundColor = "#222";
}

function changeText() {     // 화면의 text를 클릭했을 때 글자 색깔을 바꾸는 코드
  document.body.style.color = "#fff";
}

changeBttn.onclick = changeBackground;
text.onclick = changeText;