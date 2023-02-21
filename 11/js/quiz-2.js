// 로또 번호 생성기
// 숫자는 1부터 45까지의 범위 안에 있어야 함. 6개의 무작위 수 추출. 번호는 중복되면 안됨.

const button = document.querySelector("button");

button.onclick = () => {
  let num = new Set();
  while (num.size < 6) {
    const randomNum = Math.floor(Math.random() * 45 + 1);
    num.add(randomNum);
  }
  document.querySelector("#result").innerText = [...Array.from(num)];
}