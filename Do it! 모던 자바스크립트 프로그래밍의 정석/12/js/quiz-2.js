const result = document.querySelector("#result");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = () => {
  let value = input.value;     // 후에 공란으로 만들어야 하므로 let으로 변수 선언 (안그러면 오류 메시지 뜸.)
  const floatInput = parseFloat(value);     // floatInput은 버튼을 클릭한 후에 입력란에 적혀 있는 값이 되어야 하므로 이벤트 처리 함수 안에 적어주어야 한다.
  try {     // try 블록에서는 가져온 입력값에 따라 어떻게 동작할지를 작성한다.
    if (floatInput < 10)     // 소수가 입력될 수도 있으므로 parseInt가 아닌 parseFloat을 사용해 주었다.
    {
      result.innerText = floatInput;
    }
    else if (value === "")     // 값을 입력하지 않았을 경우
    {
      alert("숫자를 입력하세요.");
    }
    else if (value !== floatInput || isNaN(floatInput))      // --2325 이런 식으로 이상한 형태로 작성하거나 문자열을 작성했을 경우
    {
      alert("올바른 형태의 숫자를 입력하세요.");
    }
    else if (floatInput >= 10)      // 10보다 큰 수를 입력했을 경우
    {
      alert("10보다 작은 수를 입력하세요.");
      result.innerText = "";
    }
  } 
  catch(err)      // catch 블록에서는 알림 창에 error 개체를 표시한다. (예외 발생 시 실행)
  {
    alert(err);
  } 
  finally {     // finally 블록에서는 다음 입력을 위해 입력값을 지운다. (예외와 상관없이 실행)
    input.value = "";     // input.value 이대로 적어 주어야지만 값 삭제 가능. 변수에 넣은 input.value를 사용하면 값이 지워지지 않음.
  }
}