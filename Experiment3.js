// Welcome Message
console.log("Welcome to FitLife");

// Join Now Button
const joinBtn = document.querySelector("button");

joinBtn.addEventListener("click", () => {
    alert("Thank you for joining FitLife!");
});

// Navigation Links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(link.textContent + " page clicked");
    });
});

// Service Cards Hover Log
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        console.log("Viewing: " + card.querySelector("h3").textContent);
    });
});