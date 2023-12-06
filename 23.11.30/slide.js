const slider = document.querySelector(".gallery");
const nextBtn = document.querySelector(".swiper-button-next")
const prevBtn = document.querySelector(".swiper-button-prev")
let startX = 0;
let scrollLeft = 0;
const SCROLL_SPEED = 3;

function doScroll(e){
    e.preventDefault();
    const x = e.pageX
    const move = (x - startX) * SCROLL_SPEED
    slider.scrollLeft = scrollLeft - move
}

slider.addEventListener("mousedown",(e)=>{
    slider.addEventListener("mousemove",doScroll)
    slider.classList.add("onDrag");
    startX = e.pageX;
    scrollLeft = slider.scrollLeft
})

slider.addEventListener("mouseup",()=>{
    slider.removeEventListener("mousemove",doScroll)
    slider.classList.remove("onDrag")
})

slider.addEventListener("mouseleave",()=>{
    slider.removeEventListener("mousemove",doScroll)
    slider.classList.remove("onDrag")
})
nextBtn.addEventListener("click",()=>{
    console.log(slider.scrollLeft)
    slider.scrollLeft = slider.scrollLeft + 697
    // alert("click")
})
prevBtn.addEventListener("click",()=>{
    console.log(slider.scrollLeft)
    slider.scrollLeft = slider.scrollLeft - 697
    // alert("click")
})
// slider.addEventListener("mousemove",()=>{
//     console.log("mousemove")
// })