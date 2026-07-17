/* =====================================================
   SAI RENUKA CAB
   WEBSITE JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });


    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

        });

    });

}


/* ================= HEADER SCROLL EFFECT ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const pickup = document.getElementById("pickup").value.trim();

        const drop = document.getElementById("drop").value.trim();

        const date = document.getElementById("date").value;

        const time = document.getElementById("time").value;

        const vehicle = document.getElementById("vehicle").value;

        const trip = document.getElementById("trip").value;

        const message = document.getElementById("message").value.trim();


        if (!name || !phone || !pickup || !drop || !date) {

            alert("Please fill in all required fields.");

            return;

        }


        const whatsappMessage =

`Hello Sai Renuka Cab,

I would like to book a cab.

*Customer Details*
Name: ${name}
Mobile: ${phone}

*Journey Details*
Pickup: ${pickup}
Drop: ${drop}
Travel Date: ${date}
Pickup Time: ${time || "Not specified"}

Vehicle: ${vehicle}
Trip Type: ${trip}

Additional Details:
${message || "None"}

Please share the availability and fare details.

Thank you.`;


        const whatsappNumber = "919221556555";


        const whatsappURL =

            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank");


    });

}


/* ================= SET MINIMUM DATE ================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");


    dateInput.min = `${year}-${month}-${day}`;

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;


        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();


            targetElement.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});