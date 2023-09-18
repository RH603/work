//console.log() 개발자 도구에서 값을 확인할때 사용한다. 
console.log ('hello world');
/*
주석을 여러줄로 넣을때는 이런 방싱으로
넣어주면 됩니다
*/
console.error('에러메시지는 이렇게 나옵니다');
console.warn('경고메시지는 이렇게 나옵니다');


/**
 * ---------------------------------
 * 변수
 * ---------------------------------
 * */

// 변수를 선언할때 키워드 let, var, cont
// 주로 쓰는것은 ES6부터 추가된 let, cont

// 변수를 선언한다
let dog;

// 변수를 선언할때 주의점
// 이름이 중복되면 안된다.(스코프, scope가 달라야 한다.)
// let 1dog; 
//변수에 숫자를 쓸수 있지만 가장 앞에 나오면 안된다.
// let dog+ 연산자를 붙여선 안된다
let dog1;
let $dog; // 달러 사인을 붙여서 짓는것은 허용
let _dog; // underscore(밑줄)을 붙이는건 허용
console.log(dog1, $dog, _dog);

// 변수를 선언과 동시에 할당
let cat='고양이';
console.log(cat);

// 이름 짓는 규칙
// 변수명은 대소문자도 가린다.
// this is user name
let thisisusername; // 긴 변수명을 지을때 소문자로만 지으면 읽기가 힘들다

// snake case : 밑줄(underscore)를 활용한 변수명 짓는 방법1
let this_is_user_name;

// kebab case : 사용하지 않는다
// let this-is-user-name

//pacalcase: 모든 단어의 첫글자를 대문자로
let ThisIsUserName;

// camel case: 낙타등 같이 생겼다고 해서 camel case
let thisIsUserName;

// let 이라는 키워드를 통해서 변수를 선언
// 변수 = 변하는 값
// 진돗개 삼용이, 치와와 영철이, 포메라니안 춘향이
let dogName = '삼용이';
dogName = '영철이';
console.log(dogName);
dogName = '춘향이';
console.log(dogName);

// 고양이 : 보름이, 반달이 , 밤이
const catName = '보름이';
// 상수(constant)로 선언된 값은 중간에 바꿀 수 없다.
// const : 상수는 값이 변하면 안되는 경우에 사용
// const catName = '밤이';
console.log(catName);


// 몇몇의 예외적인 상황은 있지만, 기본적으로 상수는 변하지 않는다는 것이 기본.
const number = [1,2,3];
number.push(4);
// number = '문자열';
console.log(number);




