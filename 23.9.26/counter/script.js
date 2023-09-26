// console.log('hello')


const dataList = document.querySelectorAll('[data-counter]')

// console.log(dataList)
// console.log(dataList[0].dataset.counter)

// for (let i = 0; i < dataList.length; i++) {
//     const target = dataList[i].dataset.counter
//     const timerText = dataList[i].querySelector('.timer')
//     const step = Math.floor(target / 400)
//     console.log(step)
//     let index = 0;
//     console.log(target)
//     console.log(index)
//     console.log(timerText)
//     setInterval(() => {
//         if (target > index) {
//             index = index + step
//             console.log(index)
//             timerText.textContent = index
//         }
//     }, 1)
// }

dataList.forEach(item => {
    let index = 0;
    const target = item.dataset.counter
    const timerText = item.querySelector('.timer')
    const step = Math.floor(target / 200)
    setInterval(()=>{
        if(index < target){
            index = index + step
            timerText.textContent = index
        }
    })
})