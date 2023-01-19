const students = ["Park", "Kim", "Lee", "Kang"];

for (student of students) {      // students에 student가 있는 동안 계속 반복한다. (forEcah를 사용하는 대신 옆과 같이 작성할 수도 있다.)
  document.write(`${student}. `);
}