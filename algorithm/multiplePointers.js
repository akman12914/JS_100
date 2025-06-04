// 배열의 고유값 세기
// 음수가 있을 수 있지만 항상 정렬되어 있음
// 상수 또는 O(1) space 와 O(n) time으로만 이 작업을 수행해야 한다.



console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4




function countUniqueValues(arr){
    // i라는 포인터를 만든다
    let i = 0;
    // j라는 포인터를 만든다 
    let j = 0;


    for(let val of arr){
        // j가 탐색한다
        if(j!==val){
            j = val;
            // 다른 값을 만나면 i의 값이 1 늘어난다 
            i++;
        }
    }
    return i;
    // i의 값을 리턴한다.
    
}