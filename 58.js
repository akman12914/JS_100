// # 문제58 : 콤마 찍기

let input = 123456789;

let inputString = Array.from(String(input));
let result = [];

for (i = 0; i < inputString.length; i++) {
  result.push(inputString[i]);

  if ((i + 1) % 3 == 0 && !(inputString[i + 1] === undefined)) {
    result.push(",");
  }
}
console.log(result.join(""));
