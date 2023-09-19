const friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아']


console.log(friends)

// 친구들은 총 몇명인가요?
console.log(`친구들은 총 ${friends.length} 명 있습니다`)
console.log(friends[1])

friends.pop()

console.log(friends)

friends.push('짱아')

console.log(friends)

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}

const add = (x) => {
    return console.log(x * 2);
}

const numbers = [1, 2, 3, 4, 5]


// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// add함수를 이용해서 2,4,6,8,10 출력
for (let i = 0; i < numbers.length; i++){
    add(numbers[i])
}

const showName = (name)=>{
    return console.log(`제 이름은 ${name} 입니다`)
}


// const friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아']
// friends의 내용을 for 문으로 차레대로 꺼내 showName함수에 전달
for(let i=0; i<friends.length;i++){
    showName(friends[i])
}

showName('류한호')

