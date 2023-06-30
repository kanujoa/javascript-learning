const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0]     // document.querySelector("#desc p")로도 작성 가능하다.
const pfImage = document.querySelector("#profile img");

title.onclick = () => title.innerText = "프로필";
userName.onclick = () => userName.innerHTML = `이름 : <b>민들레<b>`;     // 태그를 추가해야 하므로 innerHTML을 사용하였다. (<b>는 굵게 표시하는 것을 의미함.)
pfImage.onclick = () => pfImage.src = "image/pf2.png";