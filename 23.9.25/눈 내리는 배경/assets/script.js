// console.log('hello')


const app = document.getElementById('app')


// console.log(app)

const randomGenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const addbokeh= ()=>{
    const bokeh = document.createElement('div')
    const size = randomGenerate(50, 120)
    bokeh.style.left = `${randomGenerate(0, 100)}%`
    bokeh.style.top = `${randomGenerate(0, 100)}%`
    bokeh.style.animationDelay = `${randomGenerate(0, 10)}s`
    bokeh.style.animationDuration = `${randomGenerate(10, 30)}s`
    bokeh.style.width = `${size}px`
    bokeh.style.height = `${size}px`
    bokeh.style.backgroundColor = `hsl(${randomGenerate(0, 360)},50% ,50%)`
    bokeh.style.filter = `blur(${randomGenerate(0, 1)}px)`
    bokeh.classList.add('bokeh')
    app.append(bokeh)
}


for (let i = 0; i < 50; i++) {
    addbokeh()
}