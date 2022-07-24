// Scroll Animation
function scroll_animation() {
    let reveals = document.querySelectorAll(".scroll-animation");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", scroll_animation);


// Back on Top
window.onload=function(){

    let target = document.querySelector("footer");
    
    let scrollToTopBtn = document.querySelector(".scroll-to-top");
    let rootElement = document.documentElement;
    
    // Next we want to create a function that will be called when that element is intersected
    function callback(entries, observer) {
        // The callback will return an array of entries, even if you are only observing a single item
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Show button
                scrollToTopBtn.classList.add("showBtn");
            } else {
                // Hide button
                scrollToTopBtn.classList.remove("showBtn");
            }
        });
    }
    
    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    
    // Next we instantiate the observer with the function we created above. This takes an optional configuration
    // object that we will use in the other examples.
    let observer = new IntersectionObserver(callback);
    // Finally start observing the target element
    observer.observe(target);
}


// Dark Mode Switch
function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
    } else {
        theme.setAttribute('href', 'light.css');
    }
}
