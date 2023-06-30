// 사용자가 좋아하는 주제를 지정하면 Hello와 함께 주제를 화면에 표시하는 프로그램 만들기
// async로 프로미스 연결하기 (async 예약어를 붙인 함수는 프로미스를 반환하기 때문에 프로미스 체이닝을 이용한 방법처럼 새로운 프로미스 객체를 만들어 주지 않아도 된다.)

async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;     // 이렇게 바로 return하면 된다.     
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

whatsYourFavorite()
  .then(displaySubject)
  .then(console.log);


// 프로미스 체이닝 이용
// function whatsYourFavorite() {
//   let fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// }

// whatsYourFavorite()
//   .then(displaySubject)     --> .then(response => displaySubject(response))
//   .then(console.log);     --> .then(response => console.log(result))