// console.log('hello')

const container = document.querySelector('.container')

// console.log(container)

// console.log(circle)
function circleSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



for (let i = 0; i < 30; i++) {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.top = `${circleSize(0, 100)}%`
    circle.style.left = `${circleSize(0, 100)}%`
    container.append(circle)
}

