function greeting() {
  hi = "hello";     // var로 변수를 선언하지 않으면 자동으로 전역변수 선언이 됨.
}
// 함수 안에서는 var 예약어를 붙여서 변수를 선언해야 지역 변수가 됨.

greeting();     
console.log(hi);     // 결과: hello (전역 변수이므로 함수 밖에서 사용하는 것 가능)