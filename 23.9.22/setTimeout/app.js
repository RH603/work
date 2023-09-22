// console.log('script')

const title = document.getElementById('text')

// console.log(title)

// console.log(title.textContent[3])

// createElement('태그이름') : 태그를 생성하는 메소드

const p = document.createElement('p')
// 생성한 p 태그 안에 title의 텍스트 내용을 할당
p.textContent = title.textContent

// title.textContent 내용을 배열로 변환
// split('기준이 되는 문자') 메소드: 기준이 되는 문자를 기준으로 쪼개 배열로 변환, '' 그냥 따옴표를 넣으면 글자단위로 쪼갠다.
const textArray = title.textContent.split('')
// console.log(textArray)

// title의 택스트 내용 내열을 반복해서 처리
title.textContent=''
for (let i = 0; i < textArray.length; i++) {
    setTimeout(() => {
        // document.body.innerHTML = textArray[i]
        
        // 안됌
        // document.body.append(textArray[i])

        // 텍스트 내용을 누적해서 추가
        title.textContent += textArray[i]
    }, i*500)
}
// body의 맨 마지막 부분에 생성한 p 태그를 추가
// document.body.append(p)
// console.log(textArray[i]);
// console.log(p)




