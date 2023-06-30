// 텍스트 필드에 단어를 입력했을 때 글자 수를 화면에 표시하는 프로그램
const button = document.querySelector("button");     // HTML element를 가져오는 것은 함수 바깥에서 진행하여 전역변수로 만들어도 되지만
const userInput = document.querySelector("input");
const result = document.querySelector("#result");

function textLength() {
  const value = userInput.value;     // 이것을 함수 바깥에다 미리 적어주면 값을 적어주기 전 초기 상태의 값인 공백이 value에 담긴 상태로 진행되어 결과가 계속 0이 나오게 된다.
  const textLength = value.length;     // 입력 후 버튼을 클릭한 후에 입력값을 확인하고 그 후에 길이를 확인해야 하므로 value를 구하는 코드는 함수 안에다 적어 주었다.
  result.innerText = `텍스트 필드에 입력한 글자 수는 ${textLength}개 입니다.`
}

button.addEventListener("click", textLength);