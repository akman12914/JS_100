/* -------------------------------------------------------------------------- */
/*                               문제40 : 놀이동산에 가자                              */
/* -------------------------------------------------------------------------- */
const limitWeight = +prompt("제한 무게(숫자로 입력)");
const number = +prompt("몇 명이 탔습니까");

const weights = [];
for (i = 0; i < number; i++) {
  weights[i] = Math.floor(Math.random() * 50 + 1);
  console.log(weights[i]);
}
console.log("---------------");
let limitPeople = 0;
let n = 0;
limitPeople = weights.reduce((allWeight, weight, index) => {
  if (allWeight !== 0) return allWeight;
  // 이미 값을 찾았으면 더 이상 인덱스를 변경하지 않음
  n += weight;
  console.log(limitWeight);
  if (n >= limitWeight) return index;
  else if (index == weights.length - 1) return index + 1;

  return allWeight; // 목표 값이 아니라면 0을 유지
}, 0);

console.log(`${limitPeople}명이 탈 수 있습니다.`);
