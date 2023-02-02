// 방법 1. 대괄호를 사용한 인덱싱을 이용하여 해결하기

function counting(str, ch) {
  let count = 0;

  // 문자열 안의 문자를 하나씩 체크하기
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {     // i번째 요소가 ch인지 확인하기
      count += 1;
    }     
  }
  return count;
}

const string = prompt("문자열을 입력하세요.");
const letter = prompt("어떤 문자열을 체크하시겠습니까?");

const result = counting(string, letter);
document.write(`"${string}" 에는 "${letter}" 가 <span style="color:red">${result}개</span> 있습니다.`);


// 방법 2. charAt() 메서드를 사용하여 해결하기

function count(str, ch) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ch){
      count += 1;
    }
  }
  return count;
}

const str = prompt("문자열을 입력하세요.");
const pick = prompt("어떤 문자열을 체크하시겠습니까?");

const output = count(str, pick);
document.write(`"${str}" 에는 "${pick}"가 <span style="color:red">${output}개</span> 있습니다.`);