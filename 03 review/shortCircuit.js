const a = "apple";
const b = "banana";

if (b.length <= 5 && a.length <= 5) {
  document.write("둘 다 글자수가 5개 이하입니다.");
}

if (a.length <= 5 || b.length <= 5) {
  document.write("글자수가 5개 이하인 단어가 있습니다.");
}