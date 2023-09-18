// types.js
// js 파일을 생성하면 html문서에 연결해주는것을 잊지말것.
// 'types'라는 문자열을 console.log로 출력해보세요
console.log('types');

/**
 *  자료형
 umber : 숫자형
 string : 문자
 boolean: 참 거짓
 undefined : 정의 되지 않은 값
 null: 빈 값
 */

 let value = 5;
value = '5';
value = true;
value = false;

// 변수 이름 앞에 typeof 를 붙이면 자료형을 확인할 수 있다.
 console.log(value, typeof value);

//  형변환 예시 (문자 -> 숫자로 형변환)
// '5개' 라는 문자열이 왔고, 거기서 '개'를 지우고 
//  '5'라는 값이 왔으나 여전히 문자열인 상태,
// '5'를 숫자형으로 변환하는 방법

let number = '5';
// number = parseInt(number); integer(정수) 로 변환
number = Number(number); //숫자로 변환하는 메소드(method)
number = +number; // 숫자사 문자형으로 들어갔을 경우에만 작동
console.log(number, typeof number);


let number2 = '9.5';
number2 = parseFloat(number2); // 형변환시 소주점을 표현해야 할때

console.log(number2);


let string = 100;
string = String(string);
string = string.toString();

console.log(string, typeof string);