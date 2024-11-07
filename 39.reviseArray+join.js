/* -------------------------------------------------------------------------- */
/*                               문제39 : 오타 수정하기                               */
/* -------------------------------------------------------------------------- */

let string = prompt("문장을 입력하세요");
const strings = Array.from(string);

for (let i = 0; i < strings.length; i++) {
  if (strings[i] == "q") {
    strings[i] = "e";
  }
}

let str = strings.join("");
console.log(str);
