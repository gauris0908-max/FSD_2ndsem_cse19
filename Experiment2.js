// Welcome Message
console.log("Welcome to TechStore");

// Navbar Link Click Event
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(link.textContent + " clicked");
    });
});

// View Details Button Event
const detailButtons = document.querySelectorAll(".btn-primary");

detailButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Opening Product Details...");
    });
});