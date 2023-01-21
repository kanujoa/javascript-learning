function hello() {
  return "안녕하세요?";
}

function bye() {
  return "안녕히 가세요.";
}

function userCheck(name, fn) {     // fn 함수를 전달받아서 실행
  console.log(`${name}님,`, fn());
}

userCheck("홍길동", hello);     // 결과: 홍길동님, 안녕하세요?
userCheck("도레미", bye);     // 결과: 도레미님, 안녕하세요?