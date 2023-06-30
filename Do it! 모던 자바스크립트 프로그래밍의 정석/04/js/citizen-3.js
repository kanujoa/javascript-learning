let init = () => {
  return function(a, b) {
    return a - b > 0 ? a - b : b - a;
  }
}

console.log(`init(30, 20) : ${init(30, 20)}`);     // 결과: init()안의 함수가 반환됨.
console.log(init()(10, 20));     // 결과: 함수 안에 있는 반환하려는 함수의 a, b에 각각 10, 20이 대입되어 b-a가 실행되어(a-b > 0 이 false이므로) 10이 결과로 나온다.