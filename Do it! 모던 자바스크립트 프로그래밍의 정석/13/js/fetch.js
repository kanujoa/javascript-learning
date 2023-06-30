fetch("student-2.json")     // 1. json 파일을 읽어옴.
  .then(response => response.json())     // 2. json 파일을 객체로 변환함. (매개변수 response 자리에는 json 파일인 student-2.json이 들어감.)
  .then(json => {     // 3. 객체를 출력함.
    let output = "";
    json.forEach(student => {
      output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch(error => console.log(error));     // 4. 오류가 발생하면 오류를 보여 준다.

// .then()의 끝에다가 ;을 붙이면 안된다.