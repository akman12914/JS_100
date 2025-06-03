console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) //false
console.log(validAnagram('awesome', 'awesom')) //false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))//false
console.log(validAnagram('qwerty', 'qeywrt'))// true
console.log(validAnagram('texttwisttime', 'timetwisttext'))// true


function validAnagram(arr1, arr2){
  // 일단 문자길이 비교- 서로 다르면 false 리턴 
  if(arr1.length !== arr2.length){
      return false;
  }
  // 빈도수 객체 생성
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // arr1의 요소 빈도수 카운트
  for(let value of arr1){
      frequencyCounter1[value] = (frequencyCounter1[value]||0)+1;
      

  }
  // arr2의 요소 빈도수 카운트 
  for(let value of arr2){
      frequencyCounter2[value] = (frequencyCounter2[value]||0)+1;
      
  }
  // 빈도수 비교
  for(let key in frequencyCounter1){
    // - 빈도수 일치 여부 확인 
    for(let key in frequencyCounter2){
       if( frequencyCounter1[key]!==frequencyCounter2[key]){
            return false;
        }
    }
  }

  // return true 
  return true
}