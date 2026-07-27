const hamburger_btn = document.getElementById("hamburger-btn");
const ul_nav = document.getElementById("ul-nav");

hamburger_btn.addEventListener('click', () => {
    ul_nav.classList.toggle('nav-open');
})

console.log(hamburger_btn);
console.log(ul_nav);