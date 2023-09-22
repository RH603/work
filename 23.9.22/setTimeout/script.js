// console.log('script')

// setTimeout :  지연된 시간후에 실행 되는 함수
// setTimeout(함수,시간 : 1s = 1000ms)

setTimeout(() => {
    // console.log('1번째')
}, 2000)

setTimeout(() => {
    // console.log('2번째')
}, 3000)

setTimeout(() => {
    // console.log('3번째')
}, 1000)

// 1초 뒤에 index값을 1로 변경해서 console.log 출력

setTimeout(() => {
    index++;
    console.log(index);
    document.body.style.backgroundColor = 'orange';
}, 1000)

let index = 0;
// setInterval : 정해진 시간마다 반복 실행 하는 비동기 함수
// setInterval(함수,시간)
setInterval(() => {
    index++;
    document.body.innerHTML = index;
    console.log(index);
}, 1000)



