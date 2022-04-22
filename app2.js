// 자바로 표현하면
// final String[] fruits = {"딸기", "바나나", "망고"};

const fruits = ['딸기' , '바나나', '망고'];

console.log(fruits[0]);

console.log(fruits[fruits.length-1]);

fruits.push('사과');

console.log(fruits);

fruits.unshift('파인애플');

console.log(fruits);

fruits.pop();

console.log(fruits);

console.log(fruits.indexOf('바나나'));

fruits.shift();

console.log(fruits);

const a = 10;
 // a = 12; // conts는 이렇게(= 대입연산자) 재할당이 안되는거지 함수같은 걸로는 내용을 바꿀 수 있음.


 fruits.splice(0,2);

 console.log(fruits);

 fruits.splice(1,0, '블루베리', '레몬');

 console.log(fruits);

 fruits.splice(1,1, '귤');

 console.log(fruits);

 fruits.splice(1);

 console.log(fruits);