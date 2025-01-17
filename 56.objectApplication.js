// # 문제56 : 객체의 함수 응용

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

let nationWidthArray = Object.values(nationWidth);
nationWidthArray = nationWidthArray.splice(1);
const koreaWidth = 220877;
let gap = 0;
let similarGap = 220877;
let similar = 0;

for (i = 0; i < nationWidthArray.length; i++) {
  if (koreaWidth > nationWidthArray[i]) {
    gap = koreaWidth - nationWidthArray[i];
  } else {
    gap = nationWidthArray[i] - koreaWidth;
  }
  if (similarGap > gap) {
    similarGap = gap;
    similar = nationWidthArray[i];
  }
}

function findNation(similar) {
  for (const index in nationWidth) {
    if (nationWidth[index] == similar) return index;
  }
}

const nation = findNation(similar);
console.log(nation);
