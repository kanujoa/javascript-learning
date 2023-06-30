let xhr = new XMLHttpRequest();     // 서버와 연결하기 위한 객체 생성

xhr.open("GET", "student-1.json", true);     // 서버와 연결
xhr.send();     // 서버와 연결

xhr.onreadystatechange = function () {     // onreadystatechange는 이벤트이므로 xhr에 이벤트 리스너를 단 것! 따라서 변형 없이 옆과 똑같이 작성해야 한다.
  if (xhr.readyState == 4 && xhr.status == 200) {     // 성공적으로 자료를 가져오면 (처음은 200이 뜨지만 캐싱을 하고 나서부터는 변경된점이 없으면 브라우저가 서버한테 정보를 받지 않고 304를 띄운다.)
    let student = JSON.parse(xhr.responseText);     // JSON 객체로 변환
    let output = `
      <h1>${student.name}</h1>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
    `; 
    document.getElementById("result").innerHTML = output;  
  }
}