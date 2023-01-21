function showData(name, age) {     // 이름과 나이를 받아 알림 창에 표시하는 함수
  alert(`안녕하세요? ${name}님. 나이가 ${age}살 이군요.`);
}

function getData(callback) {     // 인자로 showData가 들어갈 것이기 때문에 parameter를 callback으로 설정
  let userName=  prompt("이름을 입력하세요.");
  let userAge = prompt("나이를 입력하세요.");
  callback(userName, userAge);     // showData의 인자로 입력된 userName, userAge가 들어가게 됨.
}

getData(showData);     // getData 함수에서 실행할 콜백 함수는 showData