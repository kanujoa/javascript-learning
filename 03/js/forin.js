const gitBook = {
  title: "깃&깃허브 입문",
  pubDate: "2019-12-06",
  pages: 272,
  finished: true
}

for (key in gitBook) {     // for ... in문은 객체의 key만 가져올 수 있다.
  document.write(`${key}: ${gitBook[key]}<br>`);     // 따라서 해당 키의 값에 접근하려면 대괄호([])를 사용하여 나타내야 한다.
}