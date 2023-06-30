const jsBook = {
  title: "모던 자바스크립트 프로그래밍의 정석",
  author: "고경희",
  pages: 702,
  subject: "Javascript",
  finished: false
}

for (info in jsBook) {
  document.write(`${info}: ${jsBook[info]}<br>`);
}