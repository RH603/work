console.log('pi')

// PI

console.log(Math.PI)

// 절대값

console.log(Math.abs(-1))
console.log(Math.abs('-1'))

// 반올림

console.log(Math.round(1.4))
console.log(Math.round(1.6))

// 올림

console.log(Math.ceil(1.1))
console.log(Math.ceil(-1.2))

// 버림

console.log(Math.floor(1.9))
console.log(Math.floor(1.9999999))
console.log(Math.floor(-1.9))
console.log(Math.floor(-1.999999))

// 랜덤
// random 범위 : 0부터 0.99999999999999999999999999999....
console.log(Math.random())
// math.random ()*(최댓값 - 최솟값 + 1) + 최솟값;

let max = 45;
let min = 1;

// const random = Math.random() * (max - min + 1) + min;

// console.log(Math.floor(random))


const randomGenerator = (max, min) => {
    return console.log(Math.floor(Math.random() * (max - min + 1) + min))
}

randomGenerator(0, 4)