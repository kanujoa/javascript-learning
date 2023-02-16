let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve('피자를 주문합니다.');     // likePizza가 true일 때 실행될 함수인 resolve 함수이다. '피자를 주문합니다.'라는 텍스트를 .then 메서드의 인자(result)로 넣는다.
  }
  else {
    reject('피자를 주문하지 않습니다.');     // likePizza가 false일 때 실행될 함수인 reject 함수이다. '피자를 주문하지 않습니다.'라는 텍스트를 .catch 메서드의 인자(err)로 넣는다.
  }
});

pizza
  .then (
    result => console.log(result)     // 여기다가 세미콜론 붙이면 안됨! (.then().catch()가 하나의 문임.)
  )
  .catch (
    err => console.log(err)
  )
  .finally (
    () => console.log('완료')     // finally는 성공과 실패에 상관 없이 마지막에 실행하기 위해 사용하는 메서드이다.
  );     // 세미콜론은 .then().catch().finally()문이 끝나는 이 부분에만 붙일 수 있다.