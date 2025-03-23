// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").split(".")[0]; // Get section ID from href
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault(); // Prevent default jump
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Highlight active menu item
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Button hover effect
    document.querySelectorAll(".prev-btn, .next-btn").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    console.log("Portfolio script loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
