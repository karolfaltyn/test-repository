// Scroll Animation
function scroll_animation() {
    let reveals = document.querySelectorAll(".scroll-animation");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 300;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", scroll_animation);

// toggle dark mode
const body = document.querySelector("body");
const img = document.querySelector("img");

const button = document.querySelector("#nav-icon")

button.addEventListener('click', () =>{
    
    if(! button.classList.contains(".dark-mode-active")){
        
        body.style.cssText = "background-color: #181a1b; color: #FFF"
        img.classList.add("img-shadow-dark-mode")
        
        
        button.classList.add('.dark-mode-active')
    }
    else if(button.classList.contains(".dark-mode-active")){
        
        body.style.removeProperty("background-color")
        body.style.removeProperty("color")
        img.classList.remove("img-shadow-dark-mode")
        
        button.classList.remove('.dark-mode-active')
    }
})
