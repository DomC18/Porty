var arrow1Expanded = false;
var arrow2Expanded = false;
var arrow3Expanded = false;
const arrowContent1 = "arrowContent1";
const arrowContent2 = "arrowContent2";
const arrowContent3 = "arrowContent3";
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrowName2 = document.getElementById("arrowName2");
const arrow3 = document.getElementById("arrow3");
const arrowName3 = document.getElementById("arrowName3");

var contentExpandeds = [false, false];
const home = document.getElementById("home");
const courseContent1 = document.getElementById("courseContent1");
const courseContentContainer1 = document.getElementById("courseContentContainer1");
const courseContent2 = document.getElementById("courseContent2");
const courseContentContainer2 = document.getElementById("courseContentContainer2");
const contentContainers = [courseContentContainer1, courseContentContainer2];

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenLeftElements = document.querySelectorAll('.hidden-left');
const hiddenRightElements = document.querySelectorAll('.hidden-right');
const hiddenUpElements = document.querySelectorAll('.hidden-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
hiddenElements.forEach((element) => observer.observe(element));
hiddenLeftElements.forEach((element) => observer.observe(element));
hiddenRightElements.forEach((element) => observer.observe(element));
hiddenUpElements.forEach((element) => observer.observe(element));




function expandArrow(text) {
    var arrowContent = document.getElementById(text);
    arrowContent.style.display = "block";
    arrowContent.style.pointerEvents = "auto";
    arrowContent.style.cursor = "pointer";
}

function contractArrow(text) {
    var arrowContent = document.getElementById(text);
    arrowContent.style.display = "none";
    arrowContent.style.pointerEvents = "none";
    arrowContent.style.cursor = "default";
}

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

function generateContent(contentContainer) {
    var newExpandeds = [];
    var i = 0;
    var idx = 0;
    contentContainers.forEach((container) => {
        if (container === contentContainer) {
            container.style.display = "block";
            idx = i;
        } else {
            container.style.display = "none";
            i += 1;
        }
    });
    for (let i = 0; i < contentExpandeds.length; i += 1) {
        if (i === idx) {
            newExpandeds[i] = true;
        } else {
            newExpandeds[i] = false;
        }
    }
    contentExpandeds = newExpandeds;
    home.style.display = "none";
}

function contractContent() {
    var newExpandeds = [];
    for (let i = 0; i < contentExpandeds.length; i += 1) {
        newExpandeds[i] = false;
    }
    console.log(newExpandeds);
    contentContainers.forEach((container) => {
        container.style.display = "none";
    });
    home.style.display = "block";
    contentExpandeds = newExpandeds;
}



arrow1.addEventListener("click", () => {
    if (arrow1Expanded) {
        arrow1.src = "images/uparrowheader.png";
        contractArrow(arrowContent1);
        arrow1Expanded = false;
        arrow2.src = "images/uparrowheader.png";
        contractArrow(arrowContent2);
        arrow2Expanded = false;
        arrow3.src = "images/uparrowheader.png";
        contractArrow(arrowContent3);
        arrow3Expanded = false;
    } else {
        arrow1.src = "images/downarrowheader.png";
        expandArrow(arrowContent1);
        arrow1Expanded = true;
    }
});
arrow2.addEventListener("click", () => {
    if (arrow2Expanded) {
        arrow2.src = "images/uparrowheader.png";
        contractArrow(arrowContent2);
        arrow2Expanded = false;
    } else {
        arrow2.src = "images/downarrowheader.png";
        expandArrow(arrowContent2);
        arrow2Expanded = true;
    }
});
arrowName2.addEventListener("click", () => {
    if (arrow2Expanded) {
        arrow2.src = "images/uparrowheader.png";
        contractArrow(arrowContent2);
        arrow2Expanded = false;
    } else {
        arrow2.src = "images/downarrowheader.png";
        expandArrow(arrowContent2);
        arrow2Expanded = true;
    }
});
arrow3.addEventListener("click", () => {
    if (arrow3Expanded) {
        arrow3.src = "images/uparrowheader.png";
        contractArrow(arrowContent3);
        arrow3Expanded = false;
    } else {
        arrow3.src = "images/downarrowheader.png";
        expandArrow(arrowContent3);
        arrow3Expanded = true;
    }
});
arrowName3.addEventListener("click", () => {
    if (arrow3Expanded) {
        arrow3.src = "images/uparrowheader.png";
        contractArrow(arrowContent3);
        arrow3Expanded = false;
    } else {
        arrow3.src = "images/downarrowheader.png";
        expandArrow(arrowContent3);
        arrow3Expanded = true;
    }
});

courseContent1.addEventListener("click", () => {
    if (contentExpandeds[0]) {
        contractContent();
    } else {
        generateContent(courseContentContainer1);
    }
});
courseContent2.addEventListener("click", () => {
    if (contentExpandeds[1]) {
        contractContent();
    } else {
        generateContent(courseContentContainer2);
    }
});


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