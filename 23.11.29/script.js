const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon")
const overlay = document.querySelector(".overlay")

// 햄버거 버튼에 클릭이벤트 등록
menuBtns.forEach((menuBtn)=>{
    menuBtn.addEventListener("click",()=>{
        navBar.classList.toggle("open")
    })
})
console.log(overlay)
overlay.addEventListener("click",()=>{
    console.log("click")
    navBar.classList.remove("open")
})