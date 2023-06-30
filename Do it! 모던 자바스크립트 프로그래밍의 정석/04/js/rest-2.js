function displayFavorites(first, ...favs) {     // 아래에 적어준 인수 중 첫 번째 인수만 first로 받고 나머지는 변수 favs로 맏아서 화면에 표시하는 예제이다.
  let str = `가장 좋아하는 과일은 "${first}"군요`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));