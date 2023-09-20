// 더하기 함수

function add(x, y) {
    return x + y;
}
// 실행
console.log(add(2, 3))

//  Fat arrow function, 혹은 화살표 함수
const addFunc = (x,y) => {
    return console.log(x + y);
}
// 실행
addFunc(5, 5)

//매개변수가 하나일때

const double = (x)=>{
    return console.log(x*x);
}
// const double = x => console.log(x * x);
double(4)

// 일반적인 화살표 함수의 형태
// const showName = (name) =>{
//     return console.log(`제 이름은 ${name} 입니다`)
// }

// 화살표 함수의 축약형
// const showName = name => console.log(`제 이름은 ${name} 입니다`);

/* if 문
const 조건 = ture
 if(조건){
    조건이  맞을 경우 실행되는 내용
    console.log(조건)
}else{
    조건이 안맞을 경우 실행되는 내용
}
*/

// ES6 이전에 쓰이던 일반적인 함수 선언 형태
function showName(name){
    // 매개변수 name 의 타입이 string 경우 출력
    console.log(`매개변수의 타입은 ${typeof name} 입니다`)
    // length는 배열, 문자열의 길이를 알아낼때 사용할 수 있다.
    console.log(name.length)
    if(typeof name === 'string'){
        return console.log(`제이름은 ${name} 입니다`);
    }
    // return 문 아래에 작성된 내용은 실행되지 않는다
}


showName('류한호')