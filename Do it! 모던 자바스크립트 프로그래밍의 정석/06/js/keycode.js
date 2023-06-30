// 키보드에서 키를 눌렀을 때 어떤 키인지 알아내기

const body = document.body;
const result = document.querySelector("#result");

function findKey(e) {
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `
}

body.addEventListener("keydown", findKey);

// 결과: 키보드를 두드릴 때마다 화면에 두드린 키의 정보가 바뀌게 된다.