document.addEventListener('DOMContentLoaded', () => {
    console.log("Noshahi POS website loaded successfully!");

    // =========================
    // 🔹 NAVIGATION ACTIVE LINK
    // =========================
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            console.log(`${link.textContent.trim()} page selected.`);
        });
    });

    // =========================
    // 🔹 HEADER BUTTONS ACTION
    // =========================
    const headerButtons = document.querySelectorAll('.header-actions button');
    headerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`${btn.textContent.trim()} button clicked!`);
        });
    });

    // =========================
    // 🔹 HERO SECTION BUTTONS
    // =========================
    const heroButtons = document.querySelectorAll('.hero-buttons button');
    heroButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked: ${button.textContent.trim()}`);
            console.log(`${button.textContent.trim()} button clicked.`);
        });
    });

    // =========================
    // 🔹 FOOTER LINKS FEEDBACK
    // =========================
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // Prevents navigation in demo
            console.log(`Footer link clicked: ${link.textContent.trim()}`);
        });
    });
});
