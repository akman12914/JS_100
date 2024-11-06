/* -------------------------------------------------------------------------- */
/*                                문제37 : 반장 선거                                */
/* -------------------------------------------------------------------------- */

const voteName = prompt("입력 : ");
const voteNames = voteName.split(" ");

console.log(voteNames);

let countedName = voteNames.reduce((allName, name) => {
  let elect;
  if (name in allName) {
    allName[name]++;
  } else {
    allName[name] = 1;
  }

  return allName;
}, {});

let elect = 0;
let electName = "";

for (name in countedName) {
  if (countedName[name] > elect) {
    elect = countedName[name];
    electName = name;
  }
}

console.log(`${electName}이가 ${elect}표로 당선되었습니다.`);
