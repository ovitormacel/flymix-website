// Elements
const questionCardsEl = document.querySelectorAll(".question_card");
const hambMenuEl = document.querySelector(".btn_menu");
const navBarEl = document.querySelector(".nav_bar");

//Questions
const handleQuestionClick = (el) => {
    el.classList.toggle("active");
}

const addListenersQuestions = () => {
    questionCardsEl.forEach((el) => {
        el.addEventListener("click", () => handleQuestionClick(el));
    });
}

addListenersQuestions();

// Hamburguer Menu
const handleHambMenu = () => {
    navBarEl.classList.toggle("active");
    hambMenuEl.classList.toggle("active");
};

hambMenuEl.addEventListener("click", handleHambMenu);