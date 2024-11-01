let studentList = ["정유정", "태희김", "한소라", "비르지오", "아르도", "김다정", "정유원"];

for (var key in studentList) {
  if (studentList[key] === "김다정") {
    console.log(`안녕하세요. 저는 ${studentList[key]} 입니다.`);
  }
}
