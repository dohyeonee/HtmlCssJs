function add1(x, y) {
    return x + y;
}
console.log(add1(2,5));

function sayHello1() {
    console.log('you');
}

const sayHello2 = function() {
    console.log('Hello');
}

const add2 = function(x, y) {
    return x + y;
}

const hi = () => {
    console.log('hi');
}

sayHello1();
add1(1 ,4);
sayHello2();
add2(2,5);
hi();