// 키보드에서 키를 누를 때마다 어떤 키를 눌렀는지 알아내는 예제
const body = document.body;
const code = document.querySelector("#code");
const key = document.querySelector("#key");

function showKey(event) {
  code.innerText = `code: ${event.code}`;
  key.innerText = `key: ${event.key}`;
}

body.addEventListener("keydown", showKey);