// console.log('scrpt')

const toggle = document.querySelector('.toggle')

console.log(toggle)

// toggle.classList.add('active')

// toggle.classList.remove('active')


// class "active" 존재하는지 유무
console.log(toggle.classList.contains('active'))

//  느낌표 '!' 은 반대로 적용한다
// toggle.addEventListener('click',()=>{
//     if(toggle.classList.contains('active')){
//         toggle.classList.remove('active')
//     } else{
//         toggle.classList.add('active')
//     }
// })

toggle.addEventListener('click', () => {
    // 3항 연사자로 할 경우
    // toggle.classList.contains('active') ? toggle.classList.remove('active') : toggle.classList.add('active')

    // toggle 메소드
    /**
     * element.classList.toggle('클래스')
     * element에 '클래스'가 있으면 삭제, 없으면 추가해주는 메소드
     */
    toggle.classList.toggle('active')
})