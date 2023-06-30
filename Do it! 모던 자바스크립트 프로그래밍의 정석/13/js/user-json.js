fetch("https://jsonplaceholder.typicode.com/users")     // 지정한 위치(옆 주소)에서 자료를 가져오고 처리 결과는 아래의 response 매개변수로 넘긴다.
.then(response => response.json())     // 성공적으로 가져왔으면 결괏값 response를 객체로 변환하고, 처리 결과는 아래의 users 매개변수로 넘긴다. 
.then(users => console.log(users));     // 성공적으로 변환하였으면 콘솔 창에 결괏값 users를 표시한다.

// 위 과정을 async과 await을 사용하여 작성하기
async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  display(users);
}

function display(users) {     // users에 들어가는 것은 array 형태이다.
  const result = document.querySelector("#result");
  let string = "";
  users.forEach(user => {
    string += `<table><tr><th>이름</th><td>${user.name}</td></tr>
               <tr><th>아이디</th><td>${user.username}</td></tr>
               <tr><th>이메일</th><td>${user.email}</td></tr>`;
  });
  result.innerHTML = string;
}

init();