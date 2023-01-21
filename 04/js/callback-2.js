const bttn = document.querySelector("button");

bttn.addEventListener("click", () => {     // 딱 한번만 함수를 실행한다면 따로 함수를 실행하지 않고 함수에 직접 콜백 함수를 작성할 수도 있다.
  alert("클릭했습니다.");     
})