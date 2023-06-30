const factor = 5;     // factor는 모든 블록의 바깥쪽에서 선언하였으므로 모든 블록에서 사용 가능하다.

function calc() {
  return num * factor;     // num 변수가 정의되어 있지 않다는 오류 발생
}
{     // num 변수와 result 변수는 두 번째 블록에서 선언하였으므로 두 번째 블록에서 벗어나면 사용 불가함.
  const num = 10;     
  let result = calc();
  document.write(`result: ${result}`);
}

// let이나 const를 사용하여 만든 변수는 기본적으로 변수가 선언된 블록({} 하나가 하나의 블록) 안에서만 유효함.