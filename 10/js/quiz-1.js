const origin = document.querySelector("#origin");
const result = document.querySelector("#result");
let originArray = [2, 4, 6, 8, 10]

function showOrigin() {
  const createTable = document.createElement("table");
  const tableInOrigin = origin.appendChild(createTable);
  for (num of originArray){
    const createTd = document.createElement("td");
    const tdInOrigin = tableInOrigin.appendChild(createTd);
    tdInOrigin.innerText = num;
  }
}

function showResult() {
  const createTable = document.createElement("table");
  const tableInResult = result.appendChild(createTable);
  for (num of originArray){
    const createTd = document.createElement("td");
    const tdInOrigin = tableInResult.appendChild(createTd);
    tdInOrigin.innerText = num;
  }
  const sum = originArray.reduce((acc, cur) => acc + cur, 0);
  const createTd = document.createElement("td");
  const tdSum = tableInResult.appendChild(createTd);
  tdSum.innerText = sum;
}

showOrigin();
showResult();

// 더 짧은 풀이 (createElement와 appendChild를 사용하지 말고 HTML을 작성한 후 innerHTML을 작성하면 코드 길이를 줄일 수 있다.)
// const origin = document.querySelector("#origin");
// const result = document.querySelector("#result");

// let numbers = [2, 4, 6, 8, 10];
// showArray(origin, numbers);

// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// numbers.push(sum);
// showArray(result, numbers);

// function showArray(area, arr) {
//   let str;
//   str = "<table><tr>";
//   for (let i = 0; i < arr.length; i++) {
//     str += "<td>" + arr[i] + "</td>";
//   }
//   str += "</tr></table>";
//   area.innerHTML = str;
// }