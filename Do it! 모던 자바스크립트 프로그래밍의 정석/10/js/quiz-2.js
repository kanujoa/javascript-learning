const origin = document.querySelector("#origin");
const result = document.querySelector("#result");
let numbers = [2, 4, 6, 8, 10];

function showOriginArray() {
  let str = "<table><tr>";
  for (num of numbers) {
    str += `<td>${num}</td>`;
  }
  str += "</tr></table>"
  origin.innerHTML = str;
}

function tail(array) {
  let str = "<table><tr>";
  if (array.length > 1) {
    array = array.slice(0, 1);
    for (num of array) {
      str += `<td>${num}</td>`;
    }
  }
  else if (array.length === 1) {
    str += `<td>${array[0]}</td>`;
  }
  str += "</tr></table>"
  result.innerHTML = str;
}

showOriginArray();
tail(numbers);

// 간단하게 아래와 같이 적어주면 된다.
// const origin = document.querySelector("#origin");
// const result = document.querySelector("result");

// let numbers = [2, 4, 6, 8, 10];

// const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

// origin.innerText = numbers;
// result.innerText = tail(numbers);

// tail 함수는 아래와 같이 선언도 가능하다.
// function tail(arr) {
//   let resultArr;
//   if (arr.length > 1) {
//     resultArr = arr.slice(1);
//   }
//   else {
//     resultArr = arr;
//   }
//   return resultArr;
// }

// origin.innerText = numbers;
// result.innerText = tail(numbers);