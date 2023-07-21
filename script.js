const header = document.getElementById("header");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li");

const removeActive = () => {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
    }
};

const toggleActive = (index) => {
    removeActive();
    navItems[index].classList.add("active");
};

window.onscroll = () => {
    sections.forEach((e, index) => {
        const coords = e.getBoundingClientRect();
        if (coords.y === 0 || coords.y < 350) {
            toggleActive(index);
        }
    });
};
// ---------------------------------
const toggleInput = document.getElementById("toggle-input");

const check = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
};

toggleInput.addEventListener("change", check, false);

const current = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

if (current) {
    document.documentElement.setAttribute("dark-theme", current);

    if (current === "dark") {
        toggleInput.checked = true;
    }
    toggleInput.checked = false;
}
