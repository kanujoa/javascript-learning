const userInput = prompt("1보다 큰 숫자를 입력하세요.");

let sum = 0;
for (let i = 2; i <= parseInt(userInput); i += 2) {
  sum += i;
  document.write(`${i} ----- ${sum} <br>`);
}
