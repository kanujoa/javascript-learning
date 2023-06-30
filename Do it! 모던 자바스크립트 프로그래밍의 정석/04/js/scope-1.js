function sum(a, b) {
  var result = a + b;     // 함수 안에서만 해당 변수를 사용할 수 있는 지역 스코프
}
console.log(result);     // ReferenceError 오류 발생 (함수를 벗어나는 순간 result 변수의 스코프는 사라짐.)