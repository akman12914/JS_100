/* -------------------------------------------------------------------------- */
/*                              문제38 : 호준이의 아르바이트                             */
/* -------------------------------------------------------------------------- */
let score = prompt("학생들의 점수를 입력하세요");
let scoreList = [];

scoreList = score.split(" ").map(Number);

scoreList.sort((a, b) => {
  return b - a;
});

const scoreSet = new Set(scoreList);
const scoreSetList = Array.from(scoreSet);

let score_1st = scoreSetList[0];
let score_2st = scoreSetList[1];
let score_3st = scoreSetList[2];

scorePeople = 0;

for (num of scoreList) {
  if (num == score_1st || num == score_2st || num == score_3st) {
    scorePeople++;
  }
}

console.log(`${scorePeople}명이 사탕을 받을 수 있습니다.`);
