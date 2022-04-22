const student = {
    name: '홍길동',
    age: 17,
    class: 'A',
}

for(const key in student) {
    console.log(key);
}

for(const key in student) {
    console.log(student[key]);
}

const stu = [
    'a', 'b', 'c'
];
for(const key of stu) {
    console.log(key);
}
