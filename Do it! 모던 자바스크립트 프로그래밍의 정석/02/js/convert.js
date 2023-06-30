const fah = parseFloat(prompt("화씨 온도를 입력하세요."));     // 입력한 숫자(정수든 소수든) 소수로 변환함.
const cel = ((fah - 32) / 1.8).toFixed(1);     // 'toFixed'로 소수점 첫째 자리까지로 고정

const h3 = document.querySelector("h3");     
h3.innerText = `결과: ${cel} °C`;

// 윈도우 11에서는 윈도우 키 + . 을 눌러 특수 기호 사용 가능