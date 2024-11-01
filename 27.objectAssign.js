const studentNames = prompt("학생 이름을 입력하세요(공백으로 구분").split(" ");
const mathScores = prompt("수학 점수를 입력하세요(공백으로 구분").split(" ");


let studentMathScore ={}

for (i=0;i<studentNames.length;  i++){
  studentMathScore[studentNames[i]]=mathScores[i];
}

console.log(studentMathScore);