// console.log('hello')

const warpper = document.querySelector('.wrapper')

// const circle = document.createElement('span')
// circle.classList.add('circle')
// warpper.append(circle)

function circleSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i=0; i<50; i++){
    const circle = document.createElement('span')
    const wonSize = circleSize(100, 150)
    circle.classList.add('circle')
    circle.style.top = `${circleSize(0, 100)}%`
    circle.style.left = `${circleSize(0, 100)}%`
    circle.style.backgroundColor = `hsl(${circleSize(0, 360)}, ${circleSize(0, 360)}%, 50%)`
    circle.style.animationDelay = `${circleSize(0, 6)}s`
    circle.style.animationDuration = `${circleSize(10, 15)}s`
    circle.style.filter = blur(`${circleSize(0, 1)}`)
    circle.style.width = `${wonSize}px`
    circle.style.height = `${wonSize}px`
    warpper.append(circle)
}