

const title = document.getElementById('title');
const button = document.getElementById('btn')
const container = document.querySelector('.container')
console.log(title)

//제목을 클릭 했을때, alert 창에 '클릭'이라는 문구가 출력

// addEventListener('이벤트이름', 실행할 함수)
title.addEventListener('click', () => {
    // alert('클릭')
    // 클릭 했을때 컬러가 red 가 되도록 변경
    title.style.color='red'
    // if (title.style.color === 'red') {
    //     title.style.color = 'black'
    // } else {
    //     title.style.color = 'red'
    // }
})
// button.addEventListener('click',()=> {
//         container.style. =  'dodgerblue'
// })

