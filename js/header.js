    /*-- Navegação Effects --*/

const navLink = document.querySelectorAll('.lk-nav');


const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id');
        const link = document.querySelector(`.lk-nav[href="#${sectionId}"]`)
        if (entry.isIntersecting) {
            navLink.forEach((l) => {
                l.classList.remove('active')
            })            
            link.classList.add('active');
        }
    })
}, {threshold: 0.5})

const todoElements = document.querySelectorAll('.todo');
todoElements.forEach(el => observer.observe(el));


    /*-- Responsive Menu --*/
    

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navMenu = document.querySelector(".menu-navigation");
const bd = document.querySelector('body');

openMenu.addEventListener("click", () => {
    openMenu.setAttribute("aria-expanded", "true");
    navMenu.classList.add("open");
    bd.classList.add("active");
    openMenu.classList.remove("active");
    closeMenu.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    openMenu.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("open");
    void navMenu.offsetWidth;
    bd.classList.remove("active");
    openMenu.classList.add("active");
    closeMenu.classList.remove("active");
})

navLink.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        navMenu.classList.add("close");
        setTimeout(() => {
            navMenu.classList.remove("open");
        }, 500)
        bd.classList.remove("active");
        openMenu.classList.add("active");
        closeMenu.classList.remove("active");
    })
})