// console.log('hello')

const tabList = document.querySelector('.tab-list')
const tabButton = document.querySelectorAll('.tab-button')
const tabItem = document.querySelectorAll('.tab-item')
// console.log(tabButton)
// console.log(tabItem)

// console.log(tabButton.length)

// for (let i = 0; i < tabButton.length; i++) {

//     tabButton[i].addEventListener('click', () => {
//         for (let i = 0; i < tabButton.length; i++)(
//             tabButton[i].classList.remove('selected')
//         )
//     })

//     tabButton[i].addEventListener('click', () => {
//         tabButton[i].classList.add('selected')
//     })
// }
tabButton.forEach(touch =>
    touch.addEventListener('click', () => {
        tabButton.forEach(tabButton => tabButton.classList.remove('selected'))
        tabButton.classList.add('selected')
    }
    ))
// console.log(tabItem.length)
for (let i = 0; i < tabItem.length; i++) {

    tabButton[i].addEventListener('click', () => {
        for (let i = 0; i < tabItem.length; i++)(
            tabItem[i].classList.remove('show')
        )
    })

    tabButton[i].addEventListener('click', () => {
        tabItem[i].classList.add('show')
    })

}