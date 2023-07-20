const menuItems = document.querySelectorAll(".menu li");
const container = document.getElementById("container");

const clearContainer = () => {
    container.innerHTML = "";
};

const about = `<section class="hero">
    <div class="hero__main section-default">
        <h1>Hi, I'm Neha</h1>
        <p>I am Syeda Neha, a Computer Science engineer and a self-taught Frontend Developer from Hyderabad, India.</p>
        <p>I am exceptionally curious, hardworking, and I constantly seek opportunities to expand my knowledge and grow both personally and professionally.</p>
        <p>I have acquired valuable experience working with diverse organizations which has further fueled my passion for technology and reinforced my commitment to continuous improvement.</p>
        <p>As someone who thrives on challenges and embraces a proactive approach, I am eager to explore new technologies and industry trends.</p>
    </div>
</section>`;
const projects = ``;
const skills = `<section class="skills">
    <div class="skills__main section-default">
        <h2>Skills</h2>
        <p>I possess hands-on experience and proficiency in the following tools and technologies</p>
        <div class="skills__main--div">
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-html5"><title>HTML 5</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-css3"><title>CSS 3</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-sass"><title>Sass</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-bootstrap"><title>Bootstrap</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-javascript"><title>JavaScript</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-react"><title>React</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-jest"><title>Jest</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-git"><title>Git</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-npm"><title>npm</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-webpack"><title>Webpack</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-babel"><title>Babel</title></use></svg>
            <svg class="brand"><use xlink:href="assets/sprite.svg#icon-wordpress"><title>Wordpress</title></use></svg>
        </div>
    </div>
</section>`;
const contact = `
    <section class="contact">
        <div class="contact__main section-default">
            <h2>Connect or Collaborate?</h2>
            <div class="social">
                <a class="icon" href="https://codepen.io/syeda_neha">
                    <svg><use xlink:href="assets/sprite.svg#icon-codepen"></use></svg>
                </a>
                <a class="icon" href="https://github.com/syedaCodes">
                    <svg><use xlink:href="assets/sprite.svg#icon-github"></use></svg>
                </a>
                <a class="icon" href="https://in.linkedin.com/in/syeda-neha-7b8b4881">
                    <svg><use xlink:href="assets/sprite.svg#icon-linkedin2"></use></svg>
                </a>
                <a class="icon" href="https://www.youtube.com/channel/UCCnJWJYiVJR0RfhS30v2vVw">
                    <svg><use xlink:href="assets/sprite.svg#icon-youtube"></use></svg>
                </a>
            </div>
        </div>
    </section>
`;

const renderData = (renderItem) => {
    clearContainer();
    container.insertAdjacentHTML("beforeend", renderItem);
};

const getData = (itemToFetch = "About") => {
    const sections = [
        ["About", about],
        ["Projects", projects],
        ["Skills", skills],
        ["Contact", contact],
    ];

    const mapSections = new Map(sections);

    const fetchedData = mapSections.get(itemToFetch);
    renderData(fetchedData);
};

const passTitleToGetData = (e) => {
    if (e.target.parentNode.parentNode.parentNode.title) {
        const itemToFetch = e.target.parentNode.parentNode.parentNode.title;
        getData(itemToFetch);
    } else if (e.target.parentNode.parentNode.title) {
        const itemToFetch = e.target.parentNode.parentNode.title;
        getData(itemToFetch);
    }
};

menuItems.forEach((element) =>
    element.addEventListener("click", (e) => {
        e.preventDefault();
        passTitleToGetData(e);
    })
);

window.addEventListener("load", () => getData());
