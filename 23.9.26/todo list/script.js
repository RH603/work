// console.log('hello')

const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.querySelector('#list')

// console.log(input,addButton,list)

input.addEventListener('keydown', (e) => {
    // console.log(e.key)
    if (e.key === 'Enter') {
        addLitsItem()
    }
})
addButton.addEventListener('click', () => {
    // console.log(input.value)
    addLitsItem()
})

const addLitsItem = () => {
    if (input.value.length === 0) {
        return alert('내용을 입력해주세요')
    }
    const li = document.createElement('li')
    li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
    li.classList.add('list-item')
    list.append(li)
    input.value = '';
    input.focus();
    saveList(list.innerHTML)
}

list.addEventListener('click',(e)=>{
    // event.currentTarget : 이벤트가 걸려있는 해당요소
    // event.target : 클릭하는 요소
    // console.log(e.currentTarget)
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveList(list.innerHTML)
    }
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        saveList(list.innerHTML)
    }
    
})

const saveList = (list)=>{
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadList = ()=>{
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}
//  DOMContentLoaded : DON이 그려지고 난뒤
//  load : DON도 그려지고 , 이미지와  같은 요소들도 모두 로드 되었을때

document.addEventListener('DOMContentLoaded',loadList())




