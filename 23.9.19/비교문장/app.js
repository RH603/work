// console.log('app')


// getElementById는 ID를 기반으로 찾기 때문에. #이라는 표현을 따로 적어주지 않아도 된다
// querySelector는 태그, 클래스, 아이디 등 범용으로 사용하기 때문에 꼭 아이디인지,클래스인지,태그인지 구분해서 적어줘야 한다
// const title = document.getElementById('title');
// const title =document.querySelector('#title')
// console.log(title);

const title = document.querySelectorAll('.title')

console.log(title)
// console.log(title[2])


for (let i = 0; i < title.length; i++) {
    //요소들의 덱스트 내용을 'i번 째 요소 입니다' 로 변경
    console.log(title[i].textContent = (`${i}번째 요소 입니다`))
    // console.log(title[i])
    // title[i].style.fontSize = `${(i+10)*2}px`;
    // title[i].style.fontWeight = 400;


    // HTML 에 class red를 추가 --- add('red')
    title[i].classList.add('red')

    // if(i === title.length-1){
        // title[i].style.color = 'red' ;

        // HTML 에 class red를 제거--- remove('red')
        // title[i].classList.remove('red')
        // }

        // if문 안쓰고 마지막 요소 class 제거
        title[title.length-1].classList.remove('red')
    }

