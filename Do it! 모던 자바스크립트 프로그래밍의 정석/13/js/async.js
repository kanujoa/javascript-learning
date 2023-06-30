function displayA() {
  console.log("A");
}

function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
}

function displayC() {
  console.log("C");
}

displayA();
displayB(displayC);     // displayB 함수에 displayC 함수 이름을 인자로 넣어 A를 표시하고 2초 기다렸다가 B를 표시한 후 이어서 C를 표시하게 한다.