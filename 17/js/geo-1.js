const getLocation = document.querySelector("#geolocation");

getLocation.addEventListener("click", function (e) {     // 위치 정보 가져오기 버튼을 클릭하면 아래와 같은 함수 실행
  e.preventDefault();     // 이벤트의 기본 동작 막기
  if (navigator.geolocation) {     // 지오로케이션의 지원 여부 체크하기
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);     // 사용자의 현재 위치 알아내기 (성공하면 showPosition 함수, 실패하면 errorPosition 함수 실행)
  } else {
    alert("지오로케이션을 지원하기 않습니다.")
  }
  // getCurrentPosition() 메서드를 사용해서 사용자의 현재 위치를 가져오면 해당 정보는 position 객체에 저장된다.

  function showPosition(position) {
    // console.log(position);     --> GeolocaionPosition 객체가 나옴.
    document.querySelector("#result").innerHTML = `
    <b>위도</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}
    `;
  }

  function errorPosition(err) {
    alert(err.message);
  }
})