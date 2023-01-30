// 이미지의 src 속성값을 바꾸어 마우스 포인터를 그림 위에 올렸을 때랑 떼었을 때랑 다른 그림이 나타나도록 하기

const pic = document.querySelector("img");

function changeImg() {
  pic.src = "image/pic-6.jpg";
}

function originImg() {
  pic.src = "image/pic-1.jpg";
}

pic.addEventListener("mouseover", changeImg);
pic.addEventListener("mouseout", originImg);