const result = document.querySelector("#result");

let url = "https://reqres.in/api/products/10";     // 자료를 요청할 서버의 주소를 미리 변수에 할당해 주었다. 앞이 https로 시작해야 자료를 제대로 가져올 수 있다.

let xhr = new XMLHttpRequest();     // 1. 서버와 연결하기 위한 객체 생성
xhr.open("GET", url);     // 2. 요청 초기화 (open 메서드 안에 HTTP 요청 방식과 요청할 서버의 URL을 작성해 주었다. 마지막에는 비동기 여부를 작성해 주는데 기본값은 true이므로 비동기를 원하면 건너뛰어도 된다.)
xhr.send()     // 3. 사용자 요청을 서버로 보냄. (GET 방식으로 연결하려 하므로 서버로 넘길 값이 없다.)
// console.log(xhr)     --> response(or responseText에서 자료의 내용을 확인할 수 있다.)

// 4. 성공적으로 자료를 가져왔는지의 여부 확인 후 자료를 제대로 가져왔으면 화면에 그 내용 띄우기
xhr.onreadystatechange = function() {     // readystatechange 이벤트는 readyState 값이 바뀔 때마다 발생하므로 이를 이용해 함수 작성
  if (xhr.readyState === 4 && xhr.status === 200) {     
    const data = JSON.parse(xhr.responseText).data;     // 응답 내용을 문자열에서 객체 형식으로 바꾸어 준다. 그리고 딱 내용 관련 부분인 data만 빼와서 data 변수에 저장
    result.innerHTML = `     
      <ul>
        <li>상품명 : ${data.name}</li>
        <li>생산년도 : ${data.year}</li>
      </ul>
    `;
  }      // innerHTML은 원래 있던 HTML을 초기화하고 작성한 HTML로 대체함.
}
