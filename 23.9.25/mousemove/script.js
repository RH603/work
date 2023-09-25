// console.log('hello')

const dot = document.querySelector('.dot')

console.log(dot)



window.addEventListener('mousemove', (event) => {
    console.log(`X 좌표 : ${event.clientX}`)
    console.log(`Y 좌표 : ${event.clientY}`)
    // dot.classList('dot')
    console.log(`dot의 width는 : ${dot.clientWidth / 2}`)
    console.log(`dot의 heught는 : ${dot.clientHeight / 2}`)
    requestAnimationFrame(()=>{
        mouseMove(event)
    })
})

const mouseMove = (event)=>{
    dot.style.top = `${event.clientY - (dot.clientHeight / 2)}px`
    dot.style.left = `${event.clientX - (dot.clientWidth / 2)}px`

}

window.addEventListener('click', () => {
    const span = document.createElement('span')
    span.classList.add('bubble')
    dot.append(span)
    setTimeout(()=>{
        span.remove()

    },5000)
})