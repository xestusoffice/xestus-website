emailjs.init({
    publicKey: "MjRM1_6Bb8yJSG3d0",
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

console.log(menuToggle);
console.log(navLinks);

menuToggle.addEventListener("click", () => {

    console.log("Menu clicked");

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
    "service_rumjowb",
    "template_malid0j",
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

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

lucide.createIcons();

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

});

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y-centerY)/18;
        const rotateY = (x-centerX)/18;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    const light = card.querySelector(".light");

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        light.style.left = `${x}px`;

        light.style.top = `${y}px`;

    });

});

const magneticButtons = document.querySelectorAll(".magnetic-btn");
console.log("Magnetic buttons found:", magneticButtons.length);
magneticButtons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log("Mouse moving on button");
        const moveX = (x - rect.width / 2) / 7;
        const moveY = (y - rect.height / 2) / 7;

        button.style.transform =
            `translate(${moveX}px, ${moveY}px) scale(1.05)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0px, 0px) scale(1)";

    });

});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    cursorOutline.style.left = `${mouseX}px`;
    cursorOutline.style.top = `${mouseY}px`;

});