const home = document.getElementById("home");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
document.querySelectorAll('.hidden, .hidden-left, .hidden-right, .hidden-up, .hidden-down').forEach(el => observer.observe(el));


const skills = ['sql', 'django', 'python', 'r', 'java', 'cpp'];
skills.forEach(skill => {
    const logo = document.getElementById(`${skill}-logo`);
    const text = document.getElementById(`${skill}-text`);

    logo.addEventListener('mouseenter', () => {
        text.style.opacity = 1;
    });

    logo.addEventListener('mouseleave', () => {
        text.style.opacity = 0;
    });
});


var arrowExpanded = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
};
const arrows = {};
for (let i = 1; i <= 6; i++) {
    arrows[i] = {
        button: document.getElementById(`arrow${i}`),
        name: document.getElementById(`arrowName${i}`),
        content: document.getElementById(`arrowContent${i}`)
    };
}
const courseIds = [
    1,2,3,4,5,6,7,8,9,
    10,11,12,13,14,15,16,17,18,19,
    20,22,23,24,25,26,27,28,29,
    30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49
];
var contentExpandeds = Array(courseIds.length).fill(false);
const inlineCourseIds = [35, 36, 37, 38, 45, 46, 47, 48, 49];
const contentContainers = courseIds.map(id =>
    document.getElementById(`courseContentContainer${id}`)
);


function linkHandler(event) {
    event.preventDefault();
    contractContent();
    contract(arrow1, arrowContent1);
    contract(arrow4, arrowContent4);
    arrow1Expanded = false;
    arrow4Expanded = false;
}
const navLinks = [
    "home-link",
    "projects-link",
    "education-link",
    "achievements-link",
    "contact-link"
];
function applyLinkHandler() {
    navLinks.forEach(id => {
        document.getElementById(id)
            ?.addEventListener("click", linkHandler);
    });
}
function removeLinkHandler() {
    navLinks.forEach(id => {
        document.getElementById(id)
            ?.removeEventListener("click", linkHandler);
    });
}


function generateContent(contentContainer) {
    const idx = contentContainers.indexOf(contentContainer);

    contentContainers.forEach(container => {
        container.style.display =
            container === contentContainer ? "block" : "none";
    });

    contentExpandeds.fill(false);

    if (idx !== -1) {
        contentExpandeds[idx] = true;
    }

    home.style.display = "none";
    applyLinkHandler();
}
function contractContent() {
    contentExpandeds.fill(false);

    contentContainers.forEach(container => {
        container.style.display = "none";
    });

    home.style.display = "block";
    removeLinkHandler();
}


function setArrowContent(id, visible) {
    const el = document.getElementById(id);

    el.style.display = visible ? "block" : "none";
    el.style.pointerEvents = visible ? "auto" : "none";
    el.style.cursor = visible ? "pointer" : "default";
}
function setArrow(arrow, contentId, expanded) {
    arrow.src = expanded
        ? "images/downarrowheader.png"
        : "images/uparrowheader.png";

    setArrowContent(contentId, expanded);
}


const groups = {
    1: [2, 3, 4, 5, 6],
    2: [3],
    3: [2],
    4: [1, 2, 3, 5, 6],
    5: [6],
    6: [5]
};
function toggleArrow(id) {
    arrowExpanded[id] = !arrowExpanded[id];

    setArrow(
        arrows[id].button,
        `arrowContent${id}`,
        arrowExpanded[id]
    );

    if (arrowExpanded[id]) {
        groups[id].forEach(other => {
            arrowExpanded[other] = false;

            setArrow(
                arrows[other].button,
                `arrowContent${other}`,
                false
            );
        });
    }
}
Object.keys(arrows).forEach(id => {
    arrows[id].button?.addEventListener(
        "click",
        () => toggleArrow(Number(id))
    );

    arrows[id].name?.addEventListener(
        "click",
        () => toggleArrow(Number(id))
    );
});


courseIds.forEach((id, index) => {
    const content = document.getElementById(`courseContent${id}`);

    content?.addEventListener('click', () => {
        if (contentExpandeds[index]) {
            contractContent();
        } else {
            generateContent(
                document.getElementById(`courseContentContainer${id}`)
            );
        }
    });
});
inlineCourseIds.forEach(id => {
    document.getElementById(`courseInline${id}`)
        ?.addEventListener('click', () => {
            generateContent(
                document.getElementById(`courseContentContainer${id}`)
            );
        });
});