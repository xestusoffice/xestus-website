emailjs.init({
    publicKey: "Guuv0-3BSaDwwgi5E",
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(item => {
    item.addEventListener("click", () => {

        navItems.forEach(link => {
            link.classList.remove("active");
        });

        item.classList.add("active");

        navLinks.classList.remove("active");
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>observer.observe(el));

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    progressBar.style.width=progress+"%";

});

// =========================
// CURSOR GLOW
// =========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// =// =========================
// PREMIUM COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        function animate(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            const value = Math.floor(progress * target);

            counter.innerText = value;

            if (progress < 1) {

                requestAnimationFrame(animate);

            } else {

                if (target === 10) {

                    counter.innerText = "10+";

                }

                if (target === 100) {

                    counter.innerText = "100%";

                }

            }

        }

        requestAnimationFrame(animate);

        counterObserver.unobserve(counter);

    });

}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// =========================
// CONTACT FORM VALIDATION
// =========================

const form = document.querySelector(".contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.innerText = "❌ Please fill all fields.";
        formMessage.style.color = "#ff4d4d";
        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.innerText = "❌ Please enter a valid email.";
        formMessage.style.color = "#ff4d4d";
        return;

    }

    formMessage.innerText = "⏳ Sending...";
    formMessage.style.color = "#00bfff";

    emailjs.send(
    "service_xz2fssc",
    "template_i22k6em",
        {
            name: name,
            email: email,
            message: message
        }
    )

    .then(function () {

        formMessage.innerText = "✅ Message sent successfully!";
        formMessage.style.color = "#00ff99";

        form.reset();

    })

  .catch(function (error) {

    console.error(error);

    alert(JSON.stringify(error));

    formMessage.innerText = "❌ Failed to send message.";
    formMessage.style.color = "#ff4d4d";

});

});