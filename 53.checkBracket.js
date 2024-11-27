/* -------------------------------------------------------------------------- */
/*                                문제53 : 괄호 문자열                               */
/* -------------------------------------------------------------------------- */

function identifyBracket(arr) {
  const arr1 = arr.split("");

  const leftBrackets = [];
  const rightBrackets = [];

  arr1.forEach((element) => {
    if (element == ")") {
      rightBrackets.push(element);
    }
  });

  for (i = 0; i < 4; i++) {
    let leftIndex = arr1.indexOf("(");

    if (arr1[i] == ")" && i > leftIndex) {
      leftBrackets.push(arr1[leftIndex]);
      arr1[leftIndex] = 0;
    }
  }

  if (rightBrackets.length !== leftBrackets.length) {
    return false;
  }

  return true;
}

// console.log(identifyBracket("(())))")); //테스트 코드
