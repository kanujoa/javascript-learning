const currentYear = 2023;
let birthYear = parseInt(prompt("태아난 해를 입력하세요."));
let age = currentYear - birthYear + 1;

if (isNaN(birthYear)) {     // birthYear === NaN이 아닌 birthYear이 NaN이 맞는지를 확인해주는 함수를 이용해야 함. (NaN: Not a Number)
  document.write("나이를 입력해 주세요.")  
} else if (birthYear < 0) {
  document.write("0보다 큰 숫자를 입력하세요.")
} else {
  document.write(`사용자의 나이는 ${age}살 입니다.`)
}