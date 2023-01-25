function changeBg() {
  document.body.style.backgroundColor = "green";
}

const bttn = document.querySelector("#changebg");
bttn.onclick = changeBg;     // 여기에 괄호를 적게 되면 함수가 바로 실행되어버려 버튼을 누르지 않았는데도 배경색이 바뀐다.