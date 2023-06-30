const result = document.querySelector("#result");
const button = document.querySelector("button");

const luckyNumber = {     // 조건을 객체 프로퍼티로 정의
  digitCount : 6,     // 숫자 6개
  maxNumber : 45     // 최대 숫자 45
};

button.addEventListener("click", () => {
  let {digitCount, maxNumber} = luckyNumber;     // digitCount에는 luckyNumber.digitCout의 값이, maxNumber에는 luckyNumber.maxNumber의 값이 담긴다.
  let myNumber = new Set();     // 숫자가 중복되지 않게 저장할 Set 생성 (Set 인스턴스 만들기)
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);     // 랜덤 번호 생성
  }
  result.innerText = `${[...myNumber]}`;     // Set을 array로 변환 (전개 연산자를 Set에서도 사용 가능)
})