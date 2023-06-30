let stars = parseInt(prompt("별의 개수 : "));

while (stars > 0) {
  document.write("*");
  stars--;
}

// do...while문 사용해 보기
// let stars = parseInt(prompt("별의 개수 : "));

// do {
//   document.write("*");
//   stars--;
// } while (stars > 0)


// stars 값을 0으로 지정하면 while문만을 사용한 코드에서는 조건을 먼저 체크하므로 아무것도 표시되지 않지만 do...while 문에서는 일단 *을 표시한 후 조건을 체크하므로 화면에 *
// 이 하나 나타난다.