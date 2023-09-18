const userName = document.getElementById('username')
console.log(userName)

let value = prompt('이름을 입력해주세요','류한호');
userName.textContent = value;
let color = prompt('원하는 컬러를 입력해주세요','red');
userName.style.color = color;
let size = prompt('원하는 사이즈를 입력하세요','30px');
userName.style.fontSize = size;
// console.log(value)

