/*-- Button & Links Effects --*/

    /*-- BTN Hero */
const lkContact = document.querySelector("#lk-c-hero");
const dLkContact = document.querySelector(".link-hero-container");

dLkContact.addEventListener("mouseenter", () => {
    dLkContact.classList.add("active");
})

dLkContact.addEventListener("mouseout", () => {
    dLkContact.classList.remove("active");
})

dLkContact.addEventListener("click", () => {
    dLkContact.classList.add("active");

    setTimeout(() => {
        dLkContact.classList.remove("active");
    }, 1000)
})

    /*-- BTN Portfolio --*/

const lkProject = document.querySelectorAll(".lk-project");
const lkRepository = document.querySelector("#lk-repository");

lkProject.forEach((elemento) => {
    elemento.addEventListener("click", (event) => {
        event.preventDefault();
        let destination = elemento.href;

        elemento.classList.add("clicked");

        setTimeout(() => {
            elemento.classList.remove("clicked");
        }, 100)

        setTimeout(() => {
           window.open(destination, "_blank");
        }, 200)   
})
})

lkRepository.addEventListener("mouseenter", () => {
    lkRepository.classList.add("active");
})

lkRepository.addEventListener("mouseout", () => {
    lkRepository.classList.remove("active");
})

lkRepository.addEventListener("click", (e) => {
    e.preventDefault();
    let destination = lkRepository.href;
    lkRepository.classList.add("active");
    setTimeout(()=> {
        lkRepository.classList.remove("active");
    }, 100)
    setTimeout(() => {
        window.open(destination, "_blank");
    }, 200)
})

    /*-- BTN Form --*/

const btnForm = document.querySelector("#btn-form");

btnForm.addEventListener("mouseenter", () => {
    btnForm.classList.add("active");
})

btnForm.addEventListener("mouseout", () => {
    btnForm.classList.remove("active");
})

btnForm.addEventListener("click", () => {
    btnForm.classList.add("active");
    setTimeout(() => {
        btnForm.classList.remove("active");
    }, 100)
})