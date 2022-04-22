const user = {
    name: '홍길동',
    age: 17,
    sayHi: function() {
        console.log('안녕하세요 ' + this.name);
    }
};

console.log(user.name);
console.log(user['name']);

user.sayHi();

user.age = 18;
console.log(user);

user.id = 'kim1004';
console.log(user);

delete user.sayHi;
console.log(user);