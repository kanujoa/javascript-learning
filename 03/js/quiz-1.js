const playButton = document.getElementById("playButton");
const div = document.querySelector("div");

const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const array = [];

while (array.length < 10) {
  let length = num_list.length;
  let i = Math.floor(Math.random() * length);
  array.push(num_list[i]);
  num_list.splice(i, 1);
}

function setQuiz() {
  const createH1 = document.createElement("h1");
  const h1 = div.appendChild(createH1);
  h1.innerText = `문제: ${array}`;
  h1.style = "padding: 30px; margin: 70px 0 0; border: 3px solid #f08080; border-radius: 10px;"
  const createH3 = document.createElement("h3");
  const h3 = div.appendChild(createH3);
  h3.innerText = "❗정답 입력 시 공백 한 칸(스페이스 바 한 번만 누르기)으로 숫자 사이를 구분해야 정답으로 인정됩니다.❗";
  h3.style = "margin: 50px 0 0; background-color: #e5d2e9;";
}

function setInput() {
  const createForm = document.createElement("form");
  const form = div.appendChild(createForm);
  const createInput = document.createElement("input");
  const createButton = document.createElement("button");
  const input = form.appendChild(createInput);
  const button = form.appendChild(createButton);
}

playButton.onclick = function removeDirection() {
  const info = document.getElementById("info");
  const tip = document.getElementById("tip");
  info.remove();
  playButton.remove();
  tip.remove();
  setQuiz();
  setInput();
}