const header = document.getElementById("header");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li");

const toggleActive = (activeLink) => {
    //get attribute from section then find it in nav items
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");

        const id = navItems[i].getAttribute("title").toLowerCase();

        if (id === activeLink) {
            navItems[i].classList.add("active");
        }
    }
};

window.onscroll = () => {
    let activeLink = "";
    sections.forEach((e) => {
        const sectionTop = e.offsetTop;
        const sectionHeight = e.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 5) {
            activeLink = e.getAttribute("id");
        }
    });

    toggleActive(activeLink);
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
