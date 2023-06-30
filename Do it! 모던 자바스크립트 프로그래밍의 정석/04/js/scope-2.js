var hi = "hello";     // 전역 변수

function greeting() {
  console.log(hi);     // 전역 변수는 프로그래밍의 모든 곳에서 사용 가능하므로 greeting() 함수에서도 사용 가능!
}

greeting();     // 결과: hello