function textActive(text, useHeight) {
    textElement = document.getElementById(text);
    textElement.style.opacity = 1;
    if (useHeight) {
        textElement.style.height = '45px';
    }
}

function textDeactive(text, useHeight) {
    textElement = document.getElementById(text);
    textElement.style.opacity = 0;
    if (useHeight) {
        textElement.style.height = 0;
    }
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

document.getElementById("react-logo").addEventListener("mouseover", () => textActive("react-text", false));
document.getElementById("django-logo").addEventListener("mouseover", () => textActive("django-text", false));
document.getElementById("python-logo").addEventListener("mouseover", () => textActive("python-text", false));
document.getElementById("r-logo").addEventListener("mouseover", () => textActive("r-text", false));
document.getElementById("java-logo").addEventListener("mouseover", () => textActive("java-text", false));
document.getElementById("cpp-logo").addEventListener("mouseover", () => textActive("cpp-text", false));
document.getElementById("react-logo").addEventListener("mouseout", () => textDeactive("react-text", false));
document.getElementById("django-logo").addEventListener("mouseout", () => textDeactive("django-text", false));
document.getElementById("python-logo").addEventListener("mouseout", () => textDeactive("python-text", false));
document.getElementById("r-logo").addEventListener("mouseout", () => textDeactive("r-text", false));
document.getElementById("java-logo").addEventListener("mouseout", () => textDeactive("java-text", false));
document.getElementById("cpp-logo").addEventListener("mouseout", () => textDeactive("cpp-text", false));