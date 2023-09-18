
console.log('app');
// 문서안에서 title 이라는 아이디를 가진 요소를 찾아서 text 라는 변수에 담은 상황
const text = document.getElementById('title');

console.log(text);
const size = 60;
text.style.color = 'red';
// font size
// text.style.fontSize = '50px';
// size = 60
// DOM 를 제어 한다 = HTML  요소들을 추가, 수정, 삭제
text.style.fontSize = size + 'px';
// text.style.fontSize = `${size}px`;

text.textContent = '바뀐 내용입니다'
text.innerText = '이렇게도 바꿀수 있습니다.'
// HTML요소를 추가할 수 있는 방식
text.innerHTML = '<span>이렇게 태그를 넣어서 바꿀수도 있습니다</span>'

const barGraph = document.getElementById('graph');

// graph 라는 아이디를 통해서 element 요소를 가져옴
const graphValue = barGraph.dataset.value;
// graph 요소에서 data-value 값을 가져옴

// graph 요소의 폭을 graphValue만큼 조정
barGraph.style.width = graphValue + '%';

// graph 요소의 텍스트를 graphValua 값으로 넣음
barGraph.textContent = `${graphValue}%`

// graph 요소의 컬러, 폰트 사이즈 조정
barGraph.style.color = 'white';
barGraph.style.fontSize = '30px';
console.log(barGraph, graphValue);


