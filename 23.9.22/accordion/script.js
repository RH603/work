// console.log('script')


const title = document.querySelectorAll('.title')
// console.log(title)
const listItem = document.querySelectorAll('.list-item')
console.log(listItem)
const icon = document.querySelectorAll('.icon')
// const shadow = document.querySelector('.selected')
// title[2].addEventListener('click',()=>{
//     listItem[2].classList.add('selected')
// })

for (let i = 0; i < listItem.length; i++) {
    icon[i].addEventListener('click', () => {

        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.remove('selected')
        }
        // for (let i = 0; i < listItem.length; i++) {
        //     if (listItem[i].classList.contains('selected')) {
        //         listItem[i].style.boxShadow = `0 0 0 3px rgb(1${i}0,0,255)`
        //     }
        // }
        listItem[i].classList.add('selected')
    })
}
console.log(listItem[2].classList.contains('selected'))
// listItem.forEach(item =>
// item.addEventListener('click',()=>{
//     listItem.forEach(list => list.classList.remove('selected'))
//     item.classList.toggle('selected')
//     }
// ))
// console.log(shadow)