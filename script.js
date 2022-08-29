// Scroll Animation
// function scroll_animation() {
//     let reveals = document.querySelectorAll(".scroll-animation");

//     for (let i = 0; i < reveals.length; i++) {
//         let windowHeight = window.innerHeight;
//         let elementTop = reveals[i].getBoundingClientRect().top;
//         let elementVisible = 300;

//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active");
//         } else {
//             reveals[i].classList.remove("active");
//         }
//     }
// }
// window.addEventListener("scroll", scroll_animation);

// toggle dark mode
const body = document.querySelector("body")
const img = document.querySelector("img")
const container2 = document.querySelector(".container2")
const top_bar = document.querySelector(".top-bar")

const button = document.querySelector("#nav-icon")

button.addEventListener('click', () =>{
    
    if(! button.classList.contains(".dark-mode-active")){
        
        body.style.cssText = "background-color: #181a1b; color: #FFF"
        img.classList.remove("box-shadow")
        container2.classList.remove("box-shadow")
        top_bar.style.removeProperty("box-shadow")
        
        
        button.classList.add('.dark-mode-active')
    }
    else if(button.classList.contains(".dark-mode-active")){
        
        body.style.removeProperty("background-color")
        body.style.removeProperty("color")
        img.classList.add("box-shadow")
        top_bar.style.cssText = "box-shadow: 0 1px 8px hsl(0, 0%, 87%)"
        
        button.classList.remove('.dark-mode-active')
    }
})
