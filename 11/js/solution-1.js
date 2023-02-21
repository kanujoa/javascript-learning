class Lecture {     // Lecture class 정의 : hasTutor, lectID, members 프로퍼티가 담겨 있음.
  constructor (hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;     // 여기서 철자가 틀리면 아래 함수에서 members변수에 undifined가 저장되어 다음과 같은 오류가 남.
  }                            // Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
}

function getStudents(classRoom) {     // 강사 여부에 따라 학생 이름 출력 방식이 달라지므로 함수로 정의
  let {hasTutor, lectID, members} = classRoom;     // 객체 구조 분해 이용! classRoom 자리에 인자로 들어오는 객체의 적어놓은 각 키에 해당하는 값이 변수에 저장되게 된다.
  let tutor, students;     // tutor 변수와 students 변수 정의
  hasTutor ? [tutor, ... students] = members : [...students] = members;     // members 리스트를 구조 분해 할당하는데, 전개 구문을 이용한다. (배열이 펼쳐진 값을 얻을 수 있게)
  // console.log(students);     --> 여기서 console.log 해보면 전개 구문이 제대로 작동하지 않는 것처럼 나온다. 아래에서는 제대로 작동
  return students;     // 학생 목록만을 반환한다.
}

let class1 = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);     // 인스턴스 객체 만들기, 순서대로 강사 여부, 강좌 이름, 학생 목록.
let class2 = new Lecture(true, "L002", ["Lee", "Choi", "Kim"]);     // 강사가 있을 경우 학생 목록의 0번에는 강사의 이름이 적혀 있음.

console.log(`강의 : ${class1.lectID}, 수강생 : ${getStudents(class1)}`);     // 강의명은 인스턴스 객체를, 수강생 목록은 함수에 인스턴스 객체를 대입하여 구한다.
console.log(`강의 : ${class2.lectID}, 수강생 : ${getStudents(class2)}`);