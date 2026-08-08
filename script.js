// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ================= CLOSE MOBILE MENU AFTER CLICK =================

if (navLinks) {
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ================= SCROLL TO TOP =================

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);
    }

});


// ================= SERVICE BUTTONS =================

const serviceBtns = document.querySelectorAll(".service-btn");

serviceBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const detail = btn.nextElementSibling;

        if (detail) {
            detail.classList.toggle("active");
        }

    });

});


// ================= PROJECT POPUP =================

function openPopup(project) {

    const title = document.getElementById("popupTitle");
    const desc = document.getElementById("popupDescription");
    const features = document.getElementById("popupFeatures");

    if (!title || !desc || !features) {
        return;
    }

    features.innerHTML = "";

    if (project === "project1") {

        title.innerHTML = "Corporate Website";

        desc.innerHTML =
            "Professional corporate website built for businesses to establish a strong online presence.";

        features.innerHTML = `
            <li>Responsive Design</li>
            <li>SEO Optimized</li>
            <li>Fast Loading</li>
            <li>Contact Form</li>
        `;
    }

    if (project === "project2") {

        title.innerHTML = "Business Website";

        desc.innerHTML =
            "Modern business website with clean UI and high performance.";

        features.innerHTML = `
            <li>Premium UI</li>
            <li>Mobile Friendly</li>
            <li>Google Maps</li>
            <li>WhatsApp Integration</li>
        `;
    }

    if (project === "project3") {

        title.innerHTML = "E-Commerce Store";

        desc.innerHTML =
            "Complete online shopping solution with secure payment integration.";

        features.innerHTML = `
            <li>Shopping Cart</li>
            <li>Payment Gateway</li>
            <li>Admin Dashboard</li>
            <li>Order Management</li>
        `;
    }

    const popup = document.getElementById("projectPopup");

    if (popup) {
        popup.style.display = "flex";
    }
}


// ================= CLOSE PROJECT POPUP =================

function closePopup() {

    const popup = document.getElementById("projectPopup");

    if (popup) {
        popup.style.display = "none";
    }

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const formStatus = document.getElementById("formStatus");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        let valid = true;


        // Clear previous errors

        if (nameError) {
            nameError.textContent = "";
        }

        if (emailError) {
            emailError.textContent = "";
        }

        if (messageError) {
            messageError.textContent = "";
        }

        if (formStatus) {
            formStatus.textContent = "";
        }


        // Name validation

        if (name === "") {

            if (nameError) {
                nameError.textContent = "Please enter your name.";
            }

            valid = false;
        }


        // Email validation

        if (email === "") {

            if (emailError) {
                emailError.textContent = "Please enter your email.";
            }

            valid = false;

        } else {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                if (emailError) {
                    emailError.textContent =
                        "Please enter a valid email address.";
                }

                valid = false;
            }
        }


        // Message validation

        if (message === "") {

            if (messageError) {
                messageError.textContent =
                    "Please enter your message.";
            }

            valid = false;
        }


        // Stop if validation fails

        if (!valid) {
            return;
        }


        // Success message

        if (formStatus) {

            formStatus.style.color = "green";

            formStatus.textContent =
                "Thank you! Your message has been submitted successfully.";
        }


        // Clear form

        contactForm.reset();

    });

}