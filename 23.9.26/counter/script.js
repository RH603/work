// console.log('hello')


const dataList = document.querySelectorAll('[data-counter]')

// console.log(dataList)
// console.log(dataList[0].dataset.counter)

for (let i = 0; i < dataList.length; i++) {
    const target = dataList[i].dataset.counter
    const timerText = dataList[i].querySelector('.timer')
    const step = Math.floor(target / 400)
    console.log(step)
    let index = 0;
    // console.log(target)
    // console.log(index)
    // console.log(timerText)
    setInterval(() => {
        //증가
        if (target >index) {
            index = index + step
            // console.log(index)
            timerText.textContent = index
        }
    }, 1)
}