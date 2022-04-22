class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} 님 안녕하세요.`);
    }
}

const user = new Person('Ailee');
console.log(user);
user.sayHi();

class Data {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    ageAdd() {
        return this.age + 1;
    }
}

const user2 = new Data('홍길동', 17, 'Busan');
console.log(user2);
console.log(user2.ageAdd());

