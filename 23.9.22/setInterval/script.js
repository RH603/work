// console.log('runnig')

/**
 * counter : 숫자가 변해야 할 곳
 * start : 숫자가 증가하도록 작동하는 버튼
 * stop : 숫자 증가가 멈추는 버튼
 */

const counter = document.getElementById("counter")
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const reset = document.getElementById('reset')
console.log(counter, startBtn, stopBtn)

let index = 0
let timerId;
startBtn.addEventListener('click',()=> {
    if(timerId){
        // setInterval 함수 취소
        clearInterval(timerId)
    }
    
    timerId = setInterval(()=>{
        index++
        // console.log(index)
        // 증가된 index 값을 counter 내용으로 할당
        counter.textContent = `${index} 만원`
    },100)
    // console.log(timerId)
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timerId)
})

reset.addEventListener('click',()=>{
    // if(timerId){
        index = 0;
        counter.textContent = index
        clearInterval(timerId)
    // }

})
