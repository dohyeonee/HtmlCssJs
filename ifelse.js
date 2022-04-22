let number = 2;

// if(number % 2 === 0 && number != 2){
//     console.log("짝수입니다.");
// } else if (number %2 ===0 && number == 2) {
//     console.log("2입니다.");
// } else {
//     console.log("홀수입니다.");
// }

number % 2 === 0 && number != 2 ? console.log('짝수입니다.'): number %2 === 0 && number == 2? console.log('2입니다'): console.log('홀수입니다');


for(let i = 1; i < 3; i++){
    console.log(i);
}

let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);