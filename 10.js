// let n = 5

//     for(i=1; i<=n; i++){

//         for(j=0; j<n-i; j++){
//             process.stdout.write(" ");
//         }
//         for(k=0; k<2*i-1; k++){
//             process.stdout.write('*');
//         }
       
//         console.log(); //줄바꿈
//     }

//반복횟수당 조건을 파악 하고 이후 조건에 맞는 조건 식을 만듬


//브라우저 버전 

let n = 5

    for(i=1; i<=n; i++){

        for(j=0; j<n-i; j++){
            process.stdout.write(" ");
        }
        for(k=0; k<2*i-1; k++){
            process.stdout.write('*');
        }
       
        console.log(); //줄바꿈
    }