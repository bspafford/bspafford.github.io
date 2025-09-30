const languages = {
    "C++": 90,
    "C#": 80,
    "Python": 75,
    "HTML": 75,
    "CSS": 70,
    "JavaScript": 65,
    "JSX": 60,
    "GLSL": 50,
    "PHP": 35,
    "SQL": 30,
    "Swift": 25,
};

const frameworks = { // / libraries / APIs
    "OpenGL": 70,
    "React Native": 40,
    "WinAPI": 20,
}

const tools = {
    "Unreal Engine": 90,
    "Unity": 80,   
    "Premiere Pro": 75,
    "Photoshop": 65,
    "Visual Studio": 40,
    "Visual Studio Code": 35,
}

var activeProject = "";

window.addEventListener('scroll', () => {
    const button = document.getElementById('toTop');
    if (window.scrollY > 1000) {
        button.style.opacity = '100%';
        button.style.pointerEvents = "auto";
    } else {
        button.style.opacity = '0%';
        button.style.pointerEvents = "none";
    }
})

// languages
let languageDiv = document.getElementById("languageDiv");
for (lang in languages) {
    const skillItem = document.createElement("div");
    const skillName = document.createElement("p");
    const skillLevel = document.createElement("p");

    skillItem.className = "skillBar";
    skillName.innerHTML = lang;
    skillLevel.innerHTML = languages[lang];
    skillItem.style.width = `${languages[lang]}%`;

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillLevel);
    languageDiv.appendChild(skillItem);
}

// frameworks / libraries
let frameworkDiv = document.getElementById("frameworkDiv");
for (framework in frameworks) {
    const skillItem = document.createElement("div");
    const skillName = document.createElement("p");
    const skillLevel = document.createElement("p");

    skillItem.className = "skillBar";
    skillName.innerHTML = framework;
    skillLevel.innerHTML = frameworks[framework];
    skillItem.style.width = `${frameworks[framework]}%`;

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillLevel);
    frameworkDiv.appendChild(skillItem);
}

// tools
let toolDiv = document.getElementById("toolDiv");
for (tool in tools) {
    const skillItem = document.createElement("div");
    const skillName = document.createElement("p");
    const skillLevel = document.createElement("p");

    skillItem.className = "skillBar";
    skillName.innerHTML = tool;
    skillLevel.innerHTML = tools[tool];
    skillItem.style.width = `${tools[tool]}%`;

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillLevel);
    toolDiv.appendChild(skillItem);
}

const projectDiv = document.getElementsByClassName("projectDiv")[0];
const skillDiv = document.getElementsByClassName("skillDiv")[0];
function showSection(sectionName) {
    switch (sectionName) {
        case 'projects':
            projectDiv.style.display = "block";
            skillDiv.style.display = "none";
            break;
        case 'skills':
            projectDiv.style.display = "none";
            skillDiv.style.display = "block";
            break;
    }
}

async function toggleProject(projectName) {
    const projectDetail = document.getElementById("projectDetail");
    
    if (activeProject == projectName) {
        // remove project
        activeProject = "";
        projectDetail.style.display = "none";
        return;
    }
    
    activeProject = projectName;
    const response = await fetch(`${projectName}/index.html`);
    const html = await response.text();
    projectDetail.innerHTML = "<hr>" + html;
    projectDetail.style.display = "block";

    requestAnimationFrame(() => {
        const projectSection = document.getElementById("projectDetail");
        projectSection.scrollIntoView({ behavior: 'smooth'});
    });
}

function goToTop() {
    const projectSection = document.getElementById("top");
    projectSection.scrollIntoView({ behavior: 'smooth'});
}
