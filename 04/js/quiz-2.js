let wrongInput = true;

while (wrongInput) {
  const firstInput = prompt("첫번째 숫자를 입력하세요.");
  const firstFloat = parseFloat(firstInput);
  const createH3 = document.createElement("h3");
  const h3 = document.body.appendChild(createH3);
  if (firstInput === null) {     
    alert("사용자가 입력을 취소하였습니다.");
    h3.innerText = "사용자가 입력을 취소하였습니다.";
    wrongInput = false;
  }
  else if (firstFloat <= 0 || isNaN(firstFloat) || firstFloat !== parseInt(firstInput)){
    alert("양의 정수로 입력해 주세요.");
  } 
  else {
    while (wrongInput) {     // while문을 한번 더 적어주고 나서 secondInput을 받아야지 혹시라도 secondInput에서 잘못 입력했을 때 다시 firstInput 입력란이 뜨지 않는다.
      const secondInput = prompt("두번째 숫자를 입력하세요.");
      const secondFloat = parseFloat(secondInput);
      if (secondInput === null) {
        alert("사용자가 입력을 취소하였습니다.");
        h3.innerText = "사용자가 입력을 취소하였습니다.";
        wrongInput = false;
       }
      else if (secondFloat <= 0  || isNaN(secondFloat) || secondFloat !== parseInt(secondInput)) {
        alert("양의 정수로 입력해 주세요.");
      }
      else {
        const biggerNum = Math.max(firstFloat, secondFloat);
        const smallerNum = Math.min(firstFloat, secondFloat);
        for (let i = smallerNum; i >= 1; i--) {     // i를 정의할 때 const를 써 주면 안되는 이유는 i가 조건을 만족하지 않으면 1씩 줄어들어 값 자체가 변하기 때문이다.
          if (biggerNum % i === 0 && smallerNum % i === 0) {
            var maxDivisor = i;     // const나 let은 블록 스코프이므로 var를 사용하여 for문 block 밖에서도 maxDivisor를 사용 가능하게 하였다.
            break;
          }
        }
        alert(`${firstFloat}, ${secondFloat}의 최대 공약수는 ${maxDivisor} 입니다.`);
        h3.innerText = `${firstFloat}, ${secondFloat}의 최대 공약수는 ${maxDivisor} 입니다.`;
        wrongInput = false;     // 여기에서 false가 되면 이미 wrongInput은 false로 값이 바뀌었기 때문에 첫번째 while문에서도 false가 되어 반복문을 빠져나갈 수 있다.
      }
    }
  }
}

// 최대공약수 : Greatest Common Divisor (GCD)

function getGCD(n, m) {     // 함수로 작성함.
  let max = n > m ? n : m;     // n > m이 true이면 변수 max는 n이 되고 false면 m이 된다.
  let GCD = 0;     // GCD는 0부터 시작
  for  (let i = 1; i <= max; i++) {     // i도 작은 수인 1부터 시작
    if (n % i === 0 && m % i === 0) {     
      GCD = i;
    }
  }
  return GCD;
}
  