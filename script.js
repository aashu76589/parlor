alert("This parlor is not exist in real life");
// ==========================
// Aasha Beauty Salon
// script.js
// ==========================

// Booking Form
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector('input[type="text"]').value;

        alert("Thank you " + name + "!\nYour appointment request has been sent successfully.");

        bookingForm.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar Shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }

});

// Gallery Hover Effect
const images = document.querySelectorAll(".gallery img");

images.forEach(image => {

    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.05)";
    });

    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });

});

// Welcome Message
window.onload = function () {
    console.log("Welcome to Aasha Beauty Salon");
};