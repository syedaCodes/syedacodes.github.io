const footer = document.getElementById('footer');

let date = new Date().getFullYear();
console.log(date)
const html = `<p class="copyright">Made with ❤️ &copy Copyright ${date}</p>`;
footer.insertAdjacentHTML('beforeend', html);