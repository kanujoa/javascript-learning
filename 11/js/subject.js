const member1 = ["HTML", "CSS"];
const memeber2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = [...member1, ...memeber2, ...member3];     // Set 객체를 사용하기 위해 앞에서 만든 3개의 배열을 하나로 묶어 subjects라는 배열을 만듦. (전개 구문 이용)
const resultList = new Set();     // Set 객체 만들기
subjects.forEach(subject => {     // subject 배열을 순회하면서 
  resultList.add(subject);     // Set 객체에 하나씩 추가함. (중복된 값이 없는 Set 객체가 결과로 나옴.)
});

const result = document.querySelector("#result");
result.innerHTML = `
  <ul id="final_apply">
  ${[...resultList]
  .map(subject => `<li>${subject}</li>`)     // resultList에 있는 요소들을 하나씩 꺼내와 앞뒤에 <li>, </li>를 붙임. (배열 요소에 똑같은 동작을 할 때는 map() 메서드를 사용함.)
  .join("")}     
  </ul>
  `;     // 위에서 만들어진 여러 개의 <li>~</li> 들을 하나로 연결하기 위해 join() 메서드를 사용함.