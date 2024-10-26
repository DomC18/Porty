function textActive(text) {
    textElement = document.getElementById(text);
    textElement.style.opacity = 1;
}

function textDeactive(text) {
    textElement = document.getElementById(text);
    textElement.style.opacity = 0;
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenLeftElements = document.querySelectorAll('.hidden-left');
const hiddenRightElements = document.querySelectorAll('.hidden-right');
const hiddenUpElements = document.querySelectorAll('.hidden-up');
hiddenElements.forEach((element) => observer.observe(element));
hiddenLeftElements.forEach((element) => observer.observe(element));
hiddenRightElements.forEach((element) => observer.observe(element));
hiddenUpElements.forEach((element) => observer.observe(element));

document.getElementById("name-label").addEventListener("mouseover", () => textActive("pin-label"));
document.getElementById("name-label").addEventListener("mouseout", () => textDeactive("pin-label"));
document.getElementById("html-logo").addEventListener("mouseover", () => textActive("html-text"));
document.getElementById("css-logo").addEventListener("mouseover", () => textActive("css-text"));
document.getElementById("js-logo").addEventListener("mouseover", () => textActive("js-text"));
document.getElementById("react-logo").addEventListener("mouseover", () => textActive("react-text"));
document.getElementById("django-logo").addEventListener("mouseover", () => textActive("django-text"));
document.getElementById("python-logo").addEventListener("mouseover", () => textActive("python-text"));
document.getElementById("java-logo").addEventListener("mouseover", () => textActive("java-text"));
document.getElementById("html-logo").addEventListener("mouseout", () => textDeactive("html-text"));
document.getElementById("css-logo").addEventListener("mouseout", () => textDeactive("css-text"));
document.getElementById("js-logo").addEventListener("mouseout", () => textDeactive("js-text"));
document.getElementById("react-logo").addEventListener("mouseout", () => textDeactive("react-text"));
document.getElementById("django-logo").addEventListener("mouseout", () => textDeactive("django-text"));
document.getElementById("python-logo").addEventListener("mouseout", () => textDeactive("python-text"));
document.getElementById("java-logo").addEventListener("mouseout", () => textDeactive("java-text"));