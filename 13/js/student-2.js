// XMLHtppRequest로 JSON 자료 가져오기
let xhr = new XMLHttpRequest();     // 서버와 연결하기 위한 XMLHttpRequest 객체 생성
xhr.open("GET", "student-2.json");     // 요청 방식은 GET(서버에 자료를 요청할 때 사이트 주소의 뒤에 자료를 붙여서 보내는 방식), 요청할 자료 이름을 open 메서드 안에 작성
xhr.send();     // send() 메서드를 이용해 서버로 해당 요청을 전송

xhr.onreadystatechange = function () {      // xhr 객체에 onreadystatechange 메서드 실행 (readystatechange 이벤트는 readyState 값이 바뀔 때마다 발생함.)
  if (xhr.readyState == 4 && xhr.status == 200) {     // readyState 값이 4일 때(요청이 성공적으로 끝났을 때), status 값이 200일 때(서버에서 클라이언트로 자료를 성공적으로 가져왔을 때) 아래의 코드 실행
    let students = JSON.parse(xhr.responseText);      // 요청에 대한 응답인 responseText(문자열)을 JSON 객체로 변환
    renderHTML(students);     // 아래에 직접 만든 renderHTML 함수의 인자로 students를 대입함. 
  }
}

function renderHTML(contents) {     // JSON 객체인 students가 매개변수 contents 자리에 인자로 들어갈 것임.
  let output = "";     // 추가할 HTML
  for (let content of contents) {     // content는 JSON 객체의 요소 하나하나를 의미함.
    output += `     
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>
      `;
  }
  document.getElementById("result").innerHTML = output;
}