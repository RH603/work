// #number , #inc , #dec
/**
 * number : 변해야할 숫자
 * inc : 증가 버튼
 * dec : 감소 버튼
 */

const num = document.getElementById('number')
const inc = document.getElementById('inc')
const dec = document.querySelector('#dec')
const bar = document.querySelector('.bar')

console.log(num, bar, inc, dec)
// 증감할 값이 들어있는 변수
let counter = 0;

// inc : increment(증가) 하는일
// addEventListener('이벤트이름','함수')
// inc.addEventListener('click',function(){})
inc.addEventListener('click', () => {
    // console.log('증가')
    // 1. 누적시키는 방법
    // counter += 10;
    // counter = counter +1;
    // 2. 증가 연산자
    // counter++;
    // if(counter >=100){
    //     counter = 100
    // }
    if (counter < 100) {
        counter += 10
        num.innerText = `${counter}`
        console.log(counter)
        bar.style.width = `${counter}%`
    }
    // num.innerText = `${counter}`
    // console.log(counter)
    // bar.style.width = `${counter}%`
    // inc.style.transform = `rotate(${counter}deg)`
})

// dec : decrement(감소) 하는일

dec.addEventListener('click', () => {
    // console.log('감소')
    // 1. 감소시키는 방법
    counter -= 10;
    // counter = counter - 1;

    //   if(counter > 0){
    //   counter-- ;
    //   num.textContent = counter
    //   }

    if (counter < 0) {
        counter = 0;
    }
    // 2. 감소 연산자
    // counter--;
    num.textContent = counter
    console.log(counter)
    bar.style.width = `${counter}%`
    // dec.style.transform = `rotate(${counter}deg)`
})


