const getLocation = document.querySelector("#getLocation");

getLocation.addEventListener("click", function(e) {
  e.preventDefault();
  if (navigator.geolocation) {     // 지오로케이션의 지원 여부 확인
    navigator.geolocation.getCurrentPosition(showPosition, errorPostion);
    
    const options = {     // 옵션 객체 정의
      enableHighAccuracy: true,     // 위치 정보의 정확도를 높일 것인지의 여부 확인
      timeout: 5000,     // 위치 정보를 확인하는 데 걸리는 시간 제한
      maximumAge: 0     // 위치 정보의 유효 기간을 지정 (0으로 지정하면 항상 새로운 위치 정보 확인)
    };

    let watchId = navigator.geolocation.watchPosition(showPosition, errorPostion, options);     // 지정한 시간마다 위치 확인하기
    
    setTimeout(function() {
      navigator.geolocation.clearWatch(watchId);     // clearWatch 함수에 들어가는 id는 watchPosition에서 반환된 값을 사용한다. (위에서 watchId에 반환된 값 저장)     
    }, 30000);     // 5분(30000ms)이 지나면 위치 추적을 멈추게 한다.(clearWatch() 메서드 이용)   
  } else {
    alert("지오로케이션을 지원하지 않습니다.");
  }
});

function showPosition(position) {
  document.querySelector("#result").innerHTML = `
  <b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}
  `;
}

function errorPostion(err) {
  alert(err.message);
}