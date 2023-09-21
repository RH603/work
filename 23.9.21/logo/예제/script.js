// console.log('script')
/**
 * image : 이미지들
 * show : 크기를 제어하는 클래스
 */

const figure = document.querySelectorAll('.image')

for (let i = 0; i < figure.length; i++) {
    figure[i].addEventListener('click', () => {
        for (let i = 0; i < figure.length; i++) {
            figure[i].classList.remove('show')
        }
        figure[i].classList.add('show')
        console.log(figure[i])
    })

}
