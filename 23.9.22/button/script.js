// console.log('script')


// getElementById() : 아이디를 기반으로 DOM을 탐색
// querySelector() : 태그, 아이디, 클래스 등을 기반으로 단일요소 탐색
// querySelectorAll : 태그, 아이디, 클래스 등을 기반으로 복수 요소 탐색 - 유사'배열' 형태를 가진다
const sideBar = document.getElementById('sidebar')
const btn = document.getElementById('trigger')
const overlay = document.querySelector('.overlay')
console.log(sideBar)


// addEventListener('이벤트이름',함수)

btn.addEventListener('click',()=>{
    if(!sideBar.classList.contains('open')){
        sideBar.classList.add('open')
        overlay.classList.add('open')
        btn.textContent = '닫기'
    } else {
        sideBar.classList.remove('open')
        overlay.classList.remove('open')
        btn.textContent = '열기'

    }
})
overlay.addEventListener('click',()=>{
    if(overlay.classList.contains('open')){
        sideBar.classList.remove('open')
        overlay.classList.remove('open')
        btn.textContent = '열기'
    }
})

// sideBar.classList.contains('open') sideBar 안에 open 존재하면 true 없으면 false
console.log(sideBar.classList.contains('open'))

/**
 * btn을 클릭햇을때 sider가 표시/감춤 처리
 * -------------------------------------
 */
// btn.addEventListener('click',()=>{
//     sideBar.classList.toggle('open')
// })