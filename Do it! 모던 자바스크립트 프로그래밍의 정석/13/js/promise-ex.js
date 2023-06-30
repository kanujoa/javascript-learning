const order = new Promise((resolve, reject) => {
  let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");     // 여기서 "아메리카노"는 프롬프트 창이 나타날 때 같이 나타나는 기본값으로 지우고 다른 값을 입력하는 것도 가능하다.
  if(coffee != null && coffee != "") {     // 취소 버튼을 누르거나 아무것도 입력하지 않지 않았을 때
    document.querySelector(".start").innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);     // 조건문이 참일 때 resolve 함수에 coffee를 인자로 넘겨줌.
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");     // 조건문이 거짓일 때 reject 함수에 옆과 같은 텍스트를 인자로 넘겨준다.
  }
});

function display(result) {
  document.querySelector(".end").innerText = `${result} 준비 완료`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
}

function showErr(err) {
  document.querySelector(".start").innerText = err;
}

order
  .then(display)
  .catch(showErr);