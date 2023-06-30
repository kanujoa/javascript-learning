function changeBg() {
  const bgCount = 5;     // 이미지 개수
  let randomNumber = Math.floor(Math.random() * bgCount) + 1;     // 1부터 5까지의 숫자가 나와야 하므로 5를 곱해주고 1을 더해줌.
  document.body.style.backgroundImage = `url(image/bg-${randomNumber}.jpg)`;
}

document.addEventListener("load", changeBg());
