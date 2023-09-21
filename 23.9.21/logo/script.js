// console.log('script')

// menu-item이라는 클래스가 붙은 요소들은 모두 가져와야함

const menuItem = document.querySelectorAll('.menu-item')

console.log(menuItem)

// 마지막번째
// console.log(menuItem[menuItem.length-1])

// menuItem[4].addEventListener('click',(e)=>{
//      기본적으로 발생하는 이벤트 취소하는 메소드
//     e.preventDefault();
//      이벤트 전파를 막는 메소드
//     e.stopPropagation();
//     menuItem[4].classList.add('active')
// })
// menuItem[0].addEventListener('click',(e)=>{
//     menuItem[0].classList.remove('active')
// })

//  변수의 스코프(scope, 범위, 영역)
//  let 키워드로 선언된 변수의 scope 는 블록 단위이다
//  변수를 선언할때 원칙 - 동일한 이름으로 선언할 수 없다.
//  scope가 다르다면, 동일한 이름으로 사용해도, 영역이 다르기 때문에 가능하다.
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', () => {
        for (let i = 0 ; i < menuItem.length; i++) {
            menuItem[i].classList.remove('active')
            console.log(i)
        }
        menuItem[i].classList.add('active')
        console.log(i)
    })
    // console.log(i)
}


 
