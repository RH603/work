// console.log('function')

// add라는 이름의 함수
// x 와 y 라는 값을 받아서 더하는 함수
// x, y : 매개변수, parameter


function add(x, y) {
    return console.log( x + y);
}


// console.log(add(5, 2));
// 사용 하는 방법
add(5, 2);

function mulitiply(x, y, z, a){
    add(x, y)
    return console.log(x * y + z * a)  ;
}

mulitiply(5, 4, 1, 2); 

// fat arrow function, 화살표 함수
const addFunc =(x, y) =>{ 
    return console.log(x + y)
}

addFunc(10, 20)

// 매개변수를 받아서 그대로 출력하는 함수

// const showName = (name) =>{
//     return console.log(`제 이름은 ${name} 입니다`)
// }
// showName('류한호')

const showName = name => console.log(`제 이름은 ${name}입니다`)
showName('류한호')