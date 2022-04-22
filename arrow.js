const x = 10;
const y = 20;

((x, y) => {
    return x + y;
})(x,y);

console.log((x,y));

const app = () => {
    return 'yo';
}

console.log(app());