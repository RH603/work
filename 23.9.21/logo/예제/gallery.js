const data = [
    { title: '흰고양이', url: 'img/1.jpg' },
    { title: '주황고양이', url: 'img/2.webp' },
    { title: '반고양이', url: 'img/3.webp' },
    { title: '애기고양이', url: 'img/4.jpg' },
    { title: '샴고양이', url: 'img/5.webp' }
]

// 1. list에 목록 꾸미기

const list = document.querySelector('#list')
// console.log(list)

for (let i = 0; i < data.length; i++) {

    list.innerHTML += `<li class="button">${data[i].title}</li>`

    // console.log(data[i].title)
}

const image = document.getElementById('image')
const title = document.getElementById('title')
//  .button 클래스를 가진 요소들을 모두 가져옴
const buttons = document.querySelectorAll('.button')

console.log(title)
// console.log(buttons.length)

for (let i = 0; i < buttons.length; i++) {
    // 초기화
    // 첫번째 버튼에 check 클래스 추가
    buttons[0].classList.add('check')
    // 첫번째 데이터 타이틀을 figcation에 할당
    title.textContent = data[0].title
    buttons[i].addEventListener('click', () => {
        // console.log(data[i].url)

        // 이미지 태그의 src 속성에 data[i].url 값 할당
        image.src = data[i].url
        title.textContent = data[i].title
        // 모든 버튼에서 check 클래스 제거
        for(let i=0;i<buttons.length;i++){
            buttons[i].classList.remove('check')
        }
        // 클릭한 버튼에 check 클래스 추가
        buttons[i].classList.add('check')
    })
}