class Lecture {
  constructor (hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

function getStudents(subject) {
  let [hasTutor, members] = [subject.hasTutor, subject.members];
  if (hasTutor === true) {
    const tutor = members.splice(0, 1);
    const students = [...members];
    return students;
  } else {
    const students = [...members];
    return students;
  }
}

let science = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);
let english = new Lecture(true, "L002", ["Lee", "Choi", "Kim"]);

// console.log(getStudents(science));       --> 여기서는 전개 구문이 작동을 안 하는 것처럼 보이지만
// console.log(getStudents(english));

console.log(`강의 : ${science.lectID}, 수강생 : ${getStudents(science)}`);     // 여기서 배열이 펼쳐진 형태로 결과가 나오게 된다.
console.log(`강의 : ${english.lectID}, 수강생 : ${getStudents(english)}`);