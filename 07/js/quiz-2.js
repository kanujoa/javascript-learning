const button = document.querySelector("bttn");
const notiBox = document.querySelector("#noti-box");

function showAlert() {
  const createNote = document.createElement("span");
  const note = notiBox.appendChild(createNote);
  note.className = "noti";
  note.innerText = "알림 내용이 표시됩니다."
  
  function removeAlert() {
    note.remove();
  }
  setTimeout(removeAlert, 3000)
}


bttn.addEventListener("click", showAlert)

// 함수 다음과 같이 작성하는 것도 가능!
// function a() {
//   const noti = document.createElement('div');
//   noti.classList.add('noti');
//   noti.innerText = "알림 내용이 표시됩니다.";
//   notiBox.appendChild(noti);

//   setTimeout(() => {
//     noti.remove();
//   }, 3000);
// }