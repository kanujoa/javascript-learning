// 인사말을 5번 표시하면 타이머를 멈추는 코드

let counter = 0;

let timer = setInterval(() => {
  console.log("안녕하세요?")
  counter++;
  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);