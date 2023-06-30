var hi = "hello";     // 전역 변수

function change() {
  hi = "bye";     // 함수 내에서 전역 변수를 수정할 수 있다.
}

console.log(hi);     // 결과: hello
change();     // change 함수를 실행시킨 이후에는 hi의 값이 bye로 바뀜.
console.log(hi);     // 결과: bye
