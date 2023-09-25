// console.log('hello')


/**
 *  wrapper 에다가 snow를 추가해서 animation
 */

const wrapper = document.querySelector('.wrapper')
console.log(wrapper)

const snow = document.createElement('span')
snow.classList.add('snow')
wrapper.append(snow)


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let i = 0; i < 100; i++) {
    // console.log(snowNunber)
    const snow = document.createElement('span')
    const size = randomNumber(3, 10)
    snow.classList.add('snow')
    snow.style.left = `${randomNumber(0,100)}%`
    snow.style.animationDuration = `${randomNumber(10,40)}s`
    snow.style.animationDelay = `${randomNumber(0,30)}s`
    snow.style.opacity = Math.random();
    snow.style.width = `${size}px`
    snow.style.height = `${size}px`
    snow.style.filter = `blur(${randomNumber(1,3)}px)`
    wrapper.append(snow)
}

// animation-duration:10s ;