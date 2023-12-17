console.log('running')
const result = document.querySelector('#result')
const button = document.getElementById('generate')
const li = document.querySelectorAll('li')
// min 최솟값, max 최댓값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 로또 번호 담을 배열
let lottoNumber = [];
button.addEventListener('click', () => {
    button.classList.add('processing')
    button.textContent = '로또번호 생성중'
    if(lottoNumber.length>0){
            lottoNumber = []
        }
        for (let i = 0; lottoNumber.length < 6; i++) {
            const random = randomNumber(1, 45)
            const isEntry = lottoNumber.includes(random)
            !isEntry ? lottoNumber.push(random) : ''
        }

    // 로또 번호를 요소에 추가해 주는 반복문
    // 오름차순 정렬
    lottoNumber = lottoNumber.sort((a, b)=> a-b)
    
    let timer = 200

    for(let i=0; i< lottoNumber.length;i++){
    setTimeout(() => { 
        li[i].textContent = lottoNumber[i]

    }, timer *i)
    }
    setTimeout(()=>{
        button.classList.remove('processing')
        generate.textContent = '로또번호 생성'
    },timer * lottoNumber.length)
})

// 배열에 요소를 추가
// lottoNumber.push(console.log(randomNumber(1, 45)))

// for (let i = 0; lottoNumber.length < 6; i++) {
// random 변수에 난수 생성한 값 할당
// const random = randomNumber(1, 45)
// lottoNumber 내부에 random 과 일치 하는 값이 있는지 true/false
// const isEntry = lottoNumber.includes('random')

// !isEntry ? lottoNumber.push(random) : ''

// if (!isEntry) {
// lottoNumber.push(random)
// }

// console.log(lottoNumber)
// generate.addEventListener('click',()=>{
//     for(let i = 0; i<lottoNumber.length; i++)
//     document.body.querySelector('#result').innerHTML = `<li>${lottoNumber[(i-5)]}</li> <li>${lottoNumber[(i-4)]}</li> <li>${lottoNumber[(i-3)]}</li>
//     <li>${lottoNumber[(i-2)]}</li> <li>${lottoNumber[(i-1)]}</li> <li>${lottoNumber[i]}</li>`

// })
// }


// console.log(lottoNumber)
// 배열중에 '어떤값'이 존재 하는지 유뮤에 따라 true, false
// console.log(lottoNumber.includes('8'))