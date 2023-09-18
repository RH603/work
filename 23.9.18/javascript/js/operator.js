// '연산자' 라는 문자를 출력해보세요
console.log('연산자');

let value = 1 + 2;
// value = 1 + '1';
// value = 1 + +'1';
// value = 1 + Number('1');
value = 5 - 1;
value = 10 - '1';
value = 10 - '강아지'; // NaN Not a Number, 숫자형이 아닌것을 계산하려고 했을때 나오는 에러
value = 10 * 10;
value = 10 / 2;
value = 5 % 3; // 나머지를 구하는 연산자, 2 
value = (1 + 2) * 3;
console.log(value, typeof value);

let x = 5;
console.log(x + true); // true = 1
console.log(x + false); // false = 0
// null : 강제로 빈 값을 넣어줄때 쓰는 자료형
console.log(x + null); // null = 0

// + 연산자를 이용하여 문자열을 결합하는 방법

let pokemon;
let name = '피카츄'
let ago = 28;
pokemon = '안녕 나는 ' + name + '야, 나이   는 ' + ago + '살이야';
console.log(pokemon);

// 안녕하세요 userName님, 로그인 되었습니다.
// let userName = '류한호'
// let message;
// massage = '안녕하세요 ' + userName + ' 님, 로그인 되었습니다';

// console.log(massage);

// userName님의 이메일 주소는 usermail, 거주지는 userPlace 입니다
// 문자열을 표현할때 작은따옴표, 큰따옴표,  백틱
let userName = `류한호`;
let userEmail = "gksgh123@naver.com";
let userPlace = '대전';
let userAge = 30;
let userInfo;
// userInfo = userName + '님의 이메일 주소는 ' + userEmail + ', 거주지는 ' + userPlace + ' 입니다.';

// ES6 부터 추가된 템플릿 리터럴 방식
userInfo = `${userName}님의 이메일 주소는 ${userEmail}, 사용자의 나이는 ${userAge + 1} 거주지는 ${userPlace} 입니다`;

console.log(userInfo); 

let text = 'hello world';
console.log(text.length);// 문자열의 길이를 알 수 있는 length

console.log(text.toUpperCase())// 모두 대문자로 변환
console.log(text.toLowerCase())// 모두 소문자로 변환

let num = 1;
num = num + 1;
num = num + 1;
num = num - 1;
num += 1; // num = num + 1;
num -= 1; // num = num - 1;
num = num + num;
num *= 2; // num = num * 2;
num /= 2; // num = num / 2;
num %= 1; // num = num % 1;
num++; // 증가연산자, 매번 사용할때마다 1씩 증가
num++; // 증가연산자
num++; // 증가연산자
num++; // 증가연산자
num--; // 감소연산자 매번 사용할때마다 1씩 감소

console.log(num);

let a = 1;
let b = a++; // 증가 / 감소 연산자가 뒤에 붙을 경우엔 일단 값을 넣어둔 상태에서 증감

console.log(a, b)

a = 1;
b = ++a; // 증가 / 감소 연산자가 앞에 붙을 경우엔, 일단 값을 증감한뒤 담는다
console.log(a, b)


