const today = new Date();     // 현재 날짜와 시간 정보를 담은 today 객체
const hrs = today.getHours();     // 현재 시간 중 시(hour) 정보를 가져옴.
const container = document.querySelector("#container");

let newImage = document.createElement("img");
newImage.src = (hrs < 12) ? "image/morning.jpg" : "image/afternoon.jpg";
container.appendChild(newImage);
