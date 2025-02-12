const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌞";
    }
});

// Apply saved theme
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "🌙";
    }
});
