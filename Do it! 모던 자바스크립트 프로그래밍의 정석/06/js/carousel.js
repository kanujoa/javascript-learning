const container = document.querySelector("#container");     // 캐러셀 영역 가져오기

const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];     // 이미지 배열

container.style.backgroundImage = `url(image/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");     // 오른쪽, 왼쪽 화살표 모두 가져오기 (리스트로 반환)
let i = 0;     // 배열 인덱스

arrows.forEach(arrow => {     // arrows 리스트의 모든 요소에 한번씩 접근
  arrow.addEventListener("click", (e) => {     // click 이벤트가 일어났을 경우 (일어난 이벤트가 아래 함수의 인자가 됨.)
    if(e.target.id === "left") {     // 왼쪽 화살표를 클릭한 경우
      i--;     // 이전 이미지로 이동한다. (인덱싱에 이용되는 i에서 1을 빼기)
      if (i < 0) {     // 현재 화면이 첫번째 이미지일 경우(i에서 1을 빼면 -1이 되어 0보다 작아지는 경우)
        i = pics.length - 1;     // i는 pics 전체 길이 - 1이다. --> 마지막 이미지로 이동 (pics에 이미지가 추가되거나 빠질 수 있으므로 그것을 고려해 pics.length로 적어줌.)
      } 
    }
    else if (e.target.id === "right") {     // 오른쪽 화살표를 클릭한 경우
      i++;     // 다음 이미지로 이동 (인덱싱에 이용되는 i에서 1을 더하기)
      if (i >= pics.length) {     // 현재 화면이 마지막 이미지일 경우 (i에 1을 더하면 pics 리스트의 길이보다 길어지는 경우)
        i = 0;     // i는 다시 0이 됨. --> 처음 이미지로 이동
      }
    }    
   container.style.backgroundImage = `url(image/${pics[i]})`;     // 현재 이미지를 표시한다. 
  })
})

window.addEventListener("contextmenu", e => {     // 웹 문서에서 마우스 오른쪽 버튼 비활성화시키기
  e.preventDefault();
  alert("오른쪽 버튼을 사용할 수 없습니다.");
})