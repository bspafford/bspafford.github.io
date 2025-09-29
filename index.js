const languages = {
    "C++": 90,
    "C#": 85,
    "HTML": 80,
    "CSS": 75,
    "JavaScript": 70,
    "Python": 60,
    "SQL": 50,
    "GLSL": 40,
    "JSX": 30,
    "Swift": 20,
    "PHP": 10
};

const frameworks = { // / libraries / APIs
    "OpenGL": 50,
    "WinAPI": 40,
    "React Native": 30,
}

const tools = {
    "Visual Studio": 60,
    "Visual Studio Code": 50,
    "Photoshop": 40,
    "Premier Pro": 30,
    "Unreal Engine": 20,
    "Unity": 10,   
}

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