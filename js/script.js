/*=====================================================
 Sai Renuka Cab
 script.js
======================================================*/

// ============================
// Smooth Scroll for Anchor Links
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ============================
// Sticky Header Shadow
// ============================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

});

// ============================
// WhatsApp Booking
// ============================

function sendWhatsApp() {

    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let trip = document.getElementById("trip").value;
    let vehicle = document.getElementById("vehicle").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;

    if (
        pickup === "" ||
        drop === "" ||
        name === "" ||
        mobile === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }

    let whatsappMessage =
`*Sai Renuka Cab Booking Request*

Name : ${name}

Mobile : ${mobile}

Pickup : ${pickup}

Drop : ${drop}

Journey Date : ${date}

Pickup Time : ${time}

Trip Type : ${trip}

Vehicle : ${vehicle}

Requirement :

${message}`;

    let url =
        "https://wa.me/918828556555?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");

}

// ============================
// Fade Animation on Scroll
// ============================

const revealElements = document.querySelectorAll(

".service-card,.fleet-card,.route-card,.testimonial-card,.why-card,.contact-card,.highlight-card,.feature-box"

);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = ".7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ============================
// Scroll To Top Button
// ============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "scrollTopBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "170px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ff6b00";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "9999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ============================
// Current Year (if element exists)
// ============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ============================
// Console Message
// ============================

console.log("Sai Renuka Cab Website Loaded Successfully");