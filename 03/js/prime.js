// 소수 판별 프로그램: 소수인지 아닌지 '판별' 하기만 하면 되므로 소수의 개수를 세는 불필요한 코드를 작성할 필요 없음. boolean을 이용해 작성하면 됨. 
const number = prompt("자연수를 입력하세요: ");

const intNum = parseInt(number);
const floatNum = parseFloat(number);

let isPrime;     // bool 자료형이 될 isPrime 변수 선언 (소수인지 아닌지의 여부를 나타냄.)

if (number === null) {     // 취소 버튼을 눌렀을 때
  alert("사용자가 입력을 취소했습니다.");
}
else if (isNaN(intNum)) {     // 값을 입력하지 않고 확인 버튼을 눌렀을 때
  alert("자연수를 입력한 후 제출해 주세요.");
}
else if (floatNum <= 0) {     // 음수를 입력했을 때
  alert("자연수만 입력 가능합니다.");
}
else if (intNum !== floatNum) {     // 소숫점 아래의 숫자 중 0이 아닌 수가 있을 때
  alert("소숫점 아래로는 0만 입력 가능합니다.");
}
else if (intNum === 1) {     // 1을 입력했을 때 (1은 기본적으로 약수가 1개이므로 소수도 아니고 합성수도 아님. 나머지 자연수들은 최소 약수 2개 이상이므로 1만 따로 빼서 조건문 작성함.)
  const createH3 = document.createElement("h3");
  const h3 = document.body.appendChild(createH3);
  h3.innerText = "1은 소수도 합성수도 아닙니다.";
}
else if (intNum === 2) {     // 2 를 입력했을 때
  isPrime = true;
}
else {     // 3 이상의 수부터는 약수 중 2 이상의 수가 하나라도 있다면 합성수에 해당한다.
  for (let i = 2; i < intNum; i++) {     // 나누는 수 i 초깃값 2로 선언, intNum보다 작을 때까지 아래의 조건문에서 break걸리지 않는 이상 i++를 반복    
    if (intNum % i === 0) {     // 2이상 intNum 값 미만 중 하나라도 나누어 떨어지게 하는 i값이 있으면
      isPrime = false;     // 소수가 아니게 되고(false)
      break;     // for문 빠져나감.
    } else {     // 나누어 떨어지지 않는다면
      isPrime = true;     // 나누어 떨어지지 않을 때까지는 intNum이 소수로 판별됨.(true)
    }
  }
  const createH3 = document.createElement("h3");
  const h3 = document.body.appendChild(createH3);
  if (isPrime) {     // isprime이 true이면
    h3.innerText = `${intNum}은/는 소수입니다.`;     // 소수
  } else {     // isPrime이 false이면
    h3.innerText = `${intNum}은/는 소수가 아닙니다.`;     // 소수가 아님.
  }
}

