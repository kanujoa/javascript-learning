function greeting() {
  console.log("안녕하세요?");
}

setInterval(greeting, 2000);     // 결과: 2초마다 콘솔 창에 인사말을 표시한다.

// setInterval(() => {
//   console.log("안녕하세요?")
// }, 2000);                     
// 위처럼 setInterval 함수에 직접 함수 표현식을 사용해 원하는 함수를 선언하면서 동시에 실행하게 할 수도 있다.