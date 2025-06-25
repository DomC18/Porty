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

var contentExpandeds = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const home = document.getElementById("home");
const courseContent1 = document.getElementById("courseContent1");
const courseContentContainer1 = document.getElementById("courseContentContainer1");
const courseContent2 = document.getElementById("courseContent2");
const courseContentContainer2 = document.getElementById("courseContentContainer2");
const courseContent3 = document.getElementById("courseContent3");
const courseContentContainer3 = document.getElementById("courseContentContainer3");
const courseContent4 = document.getElementById("courseContent4");
const courseContentContainer4 = document.getElementById("courseContentContainer4");
const courseContent5 = document.getElementById("courseContent5");
const courseContentContainer5 = document.getElementById("courseContentContainer5");
const courseContent6 = document.getElementById("courseContent6");
const courseContentContainer6 = document.getElementById("courseContentContainer6");
const courseContent7 = document.getElementById("courseContent7");
const courseContentContainer7 = document.getElementById("courseContentContainer7");
const courseContent8 = document.getElementById("courseContent8");
const courseContentContainer8 = document.getElementById("courseContentContainer8");
const courseContent9 = document.getElementById("courseContent9");
const courseContentContainer9 = document.getElementById("courseContentContainer9");
const courseContent10 = document.getElementById("courseContent10");
const courseContentContainer10 = document.getElementById("courseContentContainer10");
const courseContent11 = document.getElementById("courseContent11");
const courseContentContainer11 = document.getElementById("courseContentContainer11");
const courseContent12 = document.getElementById("courseContent12");
const courseContentContainer12 = document.getElementById("courseContentContainer12");
const courseContent13 = document.getElementById("courseContent13");
const courseContentContainer13 = document.getElementById("courseContentContainer13");
const courseContent14 = document.getElementById("courseContent14");
const courseContentContainer14 = document.getElementById("courseContentContainer14");
const courseContent15 = document.getElementById("courseContent15");
const courseContentContainer15 = document.getElementById("courseContentContainer15");
const courseContent16 = document.getElementById("courseContent16");
const courseContentContainer16 = document.getElementById("courseContentContainer16");
const courseContent17 = document.getElementById("courseContent17");
const courseContentContainer17 = document.getElementById("courseContentContainer17");
const courseContent18 = document.getElementById("courseContent18");
const courseContentContainer18 = document.getElementById("courseContentContainer18");
const courseContent19 = document.getElementById("courseContent19");
const courseContentContainer19 = document.getElementById("courseContentContainer19");
const courseContent20 = document.getElementById("courseContent20");
const courseContentContainer20 = document.getElementById("courseContentContainer20");
const courseContent21 = document.getElementById("courseContent21");
const courseContentContainer21 = document.getElementById("courseContentContainer21");
const courseContent22 = document.getElementById("courseContent22");
const courseContentContainer22 = document.getElementById("courseContentContainer22");
const courseContent23 = document.getElementById("courseContent23");
const courseContentContainer23 = document.getElementById("courseContentContainer23");
const contentContainers = [courseContentContainer1, courseContentContainer2, courseContentContainer3, courseContentContainer4, courseContentContainer5, courseContentContainer6, courseContentContainer7, courseContentContainer8, courseContentContainer9, courseContentContainer10, courseContentContainer11, courseContentContainer12, courseContentContainer13, courseContentContainer14, courseContentContainer15, courseContentContainer16, courseContentContainer17, courseContentContainer18, courseContentContainer19, courseContentContainer20, courseContentContainer21, courseContentContainer22, courseContentContainer23];

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

function linkHandler(event) {
    event.preventDefault();
    contractContent();
}

function applyLinkHandler() {
    document.getElementById("home-link").addEventListener("click", linkHandler);
    document.getElementById("projects-link").addEventListener("click", linkHandler);
    document.getElementById("education-link").addEventListener("click", linkHandler);
    document.getElementById("achievements-link").addEventListener("click", linkHandler);
    document.getElementById("contact-link").addEventListener("click", linkHandler);
}

function removeLinkHandler() {
    document.getElementById("home-link").removeEventListener("click", linkHandler);
    document.getElementById("projects-link").removeEventListener("click", linkHandler);
    document.getElementById("education-link").removeEventListener("click", linkHandler);
    document.getElementById("achievements-link").removeEventListener("click", linkHandler);
    document.getElementById("contact-link").removeEventListener("click", linkHandler);
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

    applyLinkHandler();
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

    removeLinkHandler();
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
courseContent3.addEventListener("click", () => {
    if (contentExpandeds[2]) {
        contractContent();
    } else {
        generateContent(courseContentContainer3);
    }
})
courseContent4.addEventListener("click", () => {
    if (contentExpandeds[3]) {
        contractContent();
    } else {
        generateContent(courseContentContainer4);
    }
})
courseContent5.addEventListener("click", () => {
    if (contentExpandeds[4]) {
        contractContent();
    } else {
        generateContent(courseContentContainer5);
    }
})
courseContent6.addEventListener("click", () => {
    if (contentExpandeds[5]) {
        contractContent();
    } else {
        generateContent(courseContentContainer6);
    }
})
courseContent7.addEventListener("click", () => {
    if (contentExpandeds[6]) {
        contractContent();
    } else {
        generateContent(courseContentContainer7);
    }
})
courseContent8.addEventListener("click", () => {
    if (contentExpandeds[7]) {
        contractContent();
    } else {
        generateContent(courseContentContainer8);
    }
})
courseContent9.addEventListener("click", () => {
    if (contentExpandeds[8]) {
        contractContent();
    } else {
        generateContent(courseContentContainer9);
    }
})
courseContent10.addEventListener("click", () => {
    if (contentExpandeds[9]) {
        contractContent();
    } else {
        generateContent(courseContentContainer10);
    }
})
courseContent11.addEventListener("click", () => {
    if (contentExpandeds[10]) {
        contractContent();
    } else {
        generateContent(courseContentContainer11);
    }
})
courseContent12.addEventListener("click", () => {
    if (contentExpandeds[11]) {
        contractContent();
    } else {
        generateContent(courseContentContainer12);
    }
})
courseContent13.addEventListener("click", () => {
    if (contentExpandeds[12]) {
        contractContent();
    } else {
        generateContent(courseContentContainer13);
    }
})
courseContent14.addEventListener("click", () => {
    if (contentExpandeds[13]) {
        contractContent();
    } else {
        generateContent(courseContentContainer14);
    }
})
courseContent15.addEventListener("click", () => {
    if (contentExpandeds[14]) {
        contractContent();
    } else {
        generateContent(courseContentContainer15);
    }
})
courseContent16.addEventListener("click", () => {
    if (contentExpandeds[15]) {
        contractContent();
    } else {
        generateContent(courseContentContainer16);
    }
})
courseContent17.addEventListener("click", () => {
    if (contentExpandeds[16]) {
        contractContent();
    } else {
        generateContent(courseContentContainer17);
    }
})
courseContent18.addEventListener("click", () => {
    if (contentExpandeds[17]) {
        contractContent();
    } else {
        generateContent(courseContentContainer18);
    }
})
courseContent19.addEventListener("click", () => {
    if (contentExpandeds[18]) {
        contractContent();
    } else {
        generateContent(courseContentContainer19);
    }
})
courseContent20.addEventListener("click", () => {
    if (contentExpandeds[19]) {
        contractContent();
    } else {
        generateContent(courseContentContainer20);
    }
})
courseContent21.addEventListener("click", () => {
    if (contentExpandeds[20]) {
        contractContent();
    } else {
        generateContent(courseContentContainer21);
    }
})
courseContent22.addEventListener("click", () => {
    if (contentExpandeds[21]) {
        contractContent();
    } else {
        generateContent(courseContentContainer22);
    }
})
courseContent23.addEventListener("click", () => {
    if (contentExpandeds[22]) {
        contractContent();
    } else {
        generateContent(courseContentContainer23);
    }
})

