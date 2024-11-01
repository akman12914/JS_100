
/* -------------------------------------------------------------------------- */
/*                                    1차답안                                    */
/* -------------------------------------------------------------------------- */

// let inputName = prompt("행성이름 한글로 입력하시오.");
// let outputName;

// const solarSystem = {
//   Mercury: "수성",
//   Venus: "금성",
//   Earth: "지구",
//   Mars: "화성",
//   Jupiter: "목성",
//   Saturn: "토성",
//   Uranus: "천왕성",
//   Neptune: "해왕성",
// };

// for (const key in solarSystem) {
//   if (solarSystem[key] == inputName) {
//     outputName = key;
//   }
// }

// console.log("영어 이름 : " + outputName);
// 키 값을 찾을 값으로 설정하면 코드가 간결해지고 더 찾기 쉽겠다. 



let inputName = prompt("행성이름 한글로 입력하시오.");


const solarSystem = {
  "수성":Mercury ,
  "금성":Venus ,
  "지구":Earth,
 "화성": Mars,
  "목성":Jupiter,
  "토성":Saturn,
  "천왕성":Uranus,
  "해왕성":Neptune,
};



console.log("영어 이름 : " + solarSystem[inputName]);

