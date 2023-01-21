const factor = 5;

function calc(num) {     // 함수에 parameter 설정
  return num * factor;
}
{
  let result = calc(10);     // 함수에 인자로 10 (num에 들어갈 숫자)을 넣어주어 반환될 값을 result 변수로 정의
  document.write(`result: ${result}`);     // 결과: result: 50
}