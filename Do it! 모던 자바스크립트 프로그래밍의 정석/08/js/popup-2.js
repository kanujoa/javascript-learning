function openPopup() {
  window.open("notice.html", "이벤트 팝업", "width=600 height=500 left=300 top=200");
}

const bttn = document.querySelector("button");
bttn.onclick = openPopup;