// Welcome Message

console.log("Portfolio Website Loaded Successfully");

// Project Card Animation

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.backgroundColor = "#f0f8ff";

    });

    card.addEventListener("mouseleave", () => {

        card.style.backgroundColor = "white";

    });

});

// Skill Box Click Effect

const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach((skill) => {

    skill.addEventListener("click", () => {

        alert(skill.innerText + " Skill Selected");

    });

});