async function displayHello() {     // function 앞에 async 예약어 붙이기 (프로미스를 반환한다.)
  console.log("Hello");
} 
displayHello();     // Hello 
// 콘솔 창에 직접 displayHello()를 입력했을 때 Hello와 promise도 같이 반환함.