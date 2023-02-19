async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();      // whatsYourFavorite 함수의 실행이 끝날 때까지 기다린 후 결괏값을 response에 저장한다.
  const result = await displaySubject(response);     // response 값을 이용해 displaySubject() 함수를 실행하고 끝나면 결괏값을 result에 저장한다.
  console.log(result);     // result를 콘솔 창에 표시한다.
}

init();