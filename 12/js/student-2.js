let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = function () {     // 파일을 가져오는 함수
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);
    renderHTML(students);     // 파일을 화면에 보여주는 함수의 인자로 students JSON 객체를 넣어줌.
  }
}

function renderHTML(contents) {     // 파일을 화면에 보여주는 함수
  let output = "";
  for (let content of contents) {
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

// 위처럼 for... of가 아닌 forEach를 사용하여 코드를 짤 수도 있다.
// function renderHTML(contents) {
//   let output = "";
//   contents.forEach(function (content) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>     
//       <hr>
//     `;
//   });
//   document.getElementById("result").innerHTML = output;
// }