function addNum(...numbers) {     // 인수의 개수가 몇 개가 될지를 모를 때는 전개 구문(... 기호 사용)을 사용해 매개변수를 하나의 이름으로 선언해야 한다.
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(addNum(1, 3));     // 결과: 4
console.log(addNum(1, 3, 5, 7));     // 결과: 16