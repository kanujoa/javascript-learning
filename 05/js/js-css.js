const title = document.querySelector("#title");

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "white";
}

const userName = document.querySelector(".user");

userName.onclick = () => {
  userName.style.color = "red";
}