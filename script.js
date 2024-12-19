let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu?.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

let debounceTimer;
window.addEventListener("scroll", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        menu?.classList.remove("bx-x");
        navbar?.classList.remove("active");
    }, 100); 
});

if (document.querySelector(".multiple-text")) {
    const typed = new Typed(".multiple-text", {
        strings: ["Learner", "Web Developer", "Creator"],
        typeSpeed: 90,
        backSpeed: 50, 
        loop: true,    
    });
}

